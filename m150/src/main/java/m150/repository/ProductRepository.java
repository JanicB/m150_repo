package m150.repository;

import org.springframework.data.repository.CrudRepository;

import m150.model.Product;

public interface ProductRepository extends CrudRepository<Product, Long>{

}
