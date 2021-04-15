package mk.ukim.finki.emt.eshop.model.exceptions;

public class AuthorNotFoundException extends RuntimeException{
    public AuthorNotFoundException(Long id) {
        super(String.format("Author with id: %s was not found",id));
    }
}