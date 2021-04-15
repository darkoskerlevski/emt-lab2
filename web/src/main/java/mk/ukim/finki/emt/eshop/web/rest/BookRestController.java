package mk.ukim.finki.emt.eshop.web.rest;

import mk.ukim.finki.emt.eshop.model.Book;
import mk.ukim.finki.emt.eshop.model.dto.BookDto;
import mk.ukim.finki.emt.eshop.service.BookService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/books")
public class BookRestController {
    private final BookService bookService;

    public BookRestController(BookService bookService) {
        this.bookService = bookService;
    }

    @GetMapping
    public List<Book> findAll(){
        return bookService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Book> findById(@PathVariable Long id){
        return bookService.findById(id).map(book -> ResponseEntity.ok().body(book)).orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/add")
    public ResponseEntity<Book> saveBook(@RequestBody BookDto bookDto)
    {
        return bookService.save(bookDto)
                .map(book->ResponseEntity.ok().body(book))
                .orElse(ResponseEntity.badRequest().build());
    }
    @PutMapping("/edit/{id}")
    public ResponseEntity<Book> editBook(@PathVariable Long id,@RequestBody BookDto bookDto)
    {
        return bookService.edit(id,bookDto).map(book -> ResponseEntity.ok().body(book)).orElse(ResponseEntity.badRequest().build());
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity deleteBook(@PathVariable Long id)
    {
        try{
            bookService.delete(id);
            return ResponseEntity.ok().build();
        }
        catch(Exception exception)
        {
            return ResponseEntity.badRequest().build();
        }
    }
    @PostMapping("/decrement/{id}")
    public ResponseEntity reserveCopies(@PathVariable Long id)
    {
        try{
            bookService.reserveCopy(id);
            return ResponseEntity.ok().build();
        }
        catch(Exception exception)
        {
            return ResponseEntity.badRequest().build();
        }
    }
}
