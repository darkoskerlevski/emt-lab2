package mk.ukim.finki.emt.eshop.model.exceptions;

public class BookNotFoundException extends RuntimeException{

    public BookNotFoundException(Long id) {
        super(String.format("Book with id: %s was not found",id));
    }
}