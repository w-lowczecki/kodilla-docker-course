package main;
import (
    "fmt"
    "log"
    "net/http"
)

const path = "/hello"

func main() {
    http.HandleFunc(path, func(w http.ResponseWriter, r *http.Request){
        fmt.Fprintf(w, "Hello from Golang Application!")
    })
    fmt.Printf("Server running (port=8080), route: http://localhost:8080%s\n", path)
    if err := http.ListenAndServe(":8080", nil); err != nil {
        log.Fatal(err)
    }
}