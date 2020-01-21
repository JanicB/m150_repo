package m150.controller;

import javax.validation.constraints.NotNull;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import m150.model.Product;
import m150.service.ProductService;

@RestController
@RequestMapping("/api/products")
public class ProductController {
 
	private ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }
 
    @GetMapping(value = { "", "/" })
    public @NotNull Iterable<Product> getProducts() {
        return productService.getAllProducts();
    }
    
    @GetMapping(value = "/{id}")
    public Product getProduct(@PathVariable("id") long id) {
    	return productService.getProduct(id);
    }
}