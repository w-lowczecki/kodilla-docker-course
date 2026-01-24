package com.kodilla.products.api.init;

import com.kodilla.products.api.domain.Product;
import com.kodilla.products.api.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import javax.transaction.Transactional;

@Component
@RequiredArgsConstructor
public class InitialDataSeeder implements ApplicationRunner {

  private final ProductRepository repo;

  @Override
  @Transactional
  public void run(ApplicationArguments args) {
      if (repo.count() == 0) {
           repo.save(new Product(
                   "Mleko 1L",
                   "https://dietetycy.org.pl/wp-content/uploads/2021/01/40196922_m-1-1600x1067.jpg",
                   4.99,
                   "Mleko 1L"
           ));
           repo.save(new Product("Chleb Babci", null, 5.99, "Chleb pszenno-żytni 700g"));
           repo.save(new Product("Ser Gouda", null, 23.99, "Ser dojrzewający 300g"));
      }
  }
}