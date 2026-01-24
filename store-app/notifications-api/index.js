const express = require("express");
const amqp = require("amqplib");

const app = express();

// to allow restart by compose
const forceExit = () => {
  console.log("force process.exit(1)")
  process.exit(1)
};

async function connect() {
  try {
    const connection = await amqp.connect(
        `amqp://${process.env.RABBITMQ_HOST}:${process.env.RABBITMQ_PORT}`
    );

    connection.on("error", (err) => {
      console.error("AMQP connection error:", err?.message || err);
      forceExit();
    });

    connection.on("close", () => {
      console.error("AMQP connection closed");
      forceExit();
    });

    const queueName = `${process.env.RABBITMQ_QUEUE_NAME}`;
    const channel = await connection.createChannel();
    channel.assertQueue(queueName);
    channel.consume(queueName, (message) => {
      console.log({ message: message.content.toString() });
      channel.ack(message);
    });
  } catch (error) {
    console.log({ error });
    forceExit();
  }
}

connect().catch((err) => {
  console.error("AMQP initial connect failed:", err?.message || err);
  forceExit();
});

app.listen(5001, () => {
  console.log("Listening on PORT 5001");
});
