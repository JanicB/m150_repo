package m150;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import m150.model.Product;
import m150.service.ProductService;

@SpringBootApplication
public class SWShopApplication {

    public static void main(String[] args) {
        SpringApplication.run(SWShopApplication.class, args);
    }

    @Bean
    CommandLineRunner runner(ProductService productService) {
        return args -> {
            productService.save(new Product(1L, "T-Shirt Episode IV (Rot)", 45.00, "https://res.fashionsnap.com/image/upload/f_auto,q_auto/media/2019/07/etro20190712-027.jpg"));
            productService.save(new Product(2L, "T-Shirt Logo Farbig (Grau)", 40.00, "https://i.pinimg.com/originals/b7/fd/5c/b7fd5c51749f332bc9990a481c484fd8.jpg"));
            productService.save(new Product(3L, "T-Shirt Logo Schwarz (Grau)", 42.00, "https://images-na.ssl-images-amazon.com/images/I/A1Sujy80POL._AC_UL1500_.jpg"));
            productService.save(new Product(4L, "T-Shirt R2D2 (Grau)", 47.00, "https://images-na.ssl-images-amazon.com/images/I/61AG4Q%2B1CoL._UX385_.jpg"));
            productService.save(new Product(5L, "T-Shirt Strumtruppe (Schwarz)", 50.00, "https://ae01.alicdn.com/kf/HTB1H6CSbUz.BuNjt_bXq6AQmpXaI/2017-Latest-Fashion-Star-Wars-Stormtrooper-T-Shirts-Men-Short-Sleeve-O-Neck-Top-Tees-Short.jpg"));
            productService.save(new Product(6L, "T-Shirt Logo mit Lichtschwert (Schwarz)", 45.00, "https://cdn.webshopapp.com/shops/177779/files/164409800/650x750x2/star-wars-star-wars-logo-saber-t-shirt.jpg"));
            productService.save(new Product(7L, "Lego Star Wars Todesstern", 190.00, "https://i5.walmartimages.com/asr/a8464d83-c24a-4777-b034-129862721306_4.0999082094d5d13d3536cbf3e080a2ff.jpeg"));
            productService.save(new Product(8L, "Lego Star Wars Sternenzerstörer", 130.00, "https://sh-s7-live-s.legocdn.com/is/image/LEGO/75252_alt1?wid=528&hei=528&fit=constrain%2C1"));
            productService.save(new Product(9L, "Lego Star Wars Snokes Thronsaal", 80.00, "https://www.starwars-universe.com/images/collection/databank/fabricants/lego/75216/75216_0.jpg"));
            productService.save(new Product(10L, "Star Wars Lichtschwert (Darth Jalio)", 800.00, "http://www.wechseln.co.de/image?url=https%3A%2F%2Fs24.media%2Foriginal%2F545350144.jpg"));
        };
    }
}
