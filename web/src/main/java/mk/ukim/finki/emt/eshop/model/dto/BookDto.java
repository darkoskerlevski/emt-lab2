package mk.ukim.finki.emt.eshop.model.dto;

import lombok.Data;
import mk.ukim.finki.emt.eshop.model.enumerations.Category;

@Data
public class BookDto {

    private String name;

    private Category category;

    private Long authorId;

    private Integer availableCopies;

}
