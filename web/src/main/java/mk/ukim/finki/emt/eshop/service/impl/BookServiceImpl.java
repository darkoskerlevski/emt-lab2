package mk.ukim.finki.emt.eshop.service.impl;

import mk.ukim.finki.emt.eshop.model.Author;
import mk.ukim.finki.emt.eshop.model.Book;
import mk.ukim.finki.emt.eshop.model.dto.BookDto;
import mk.ukim.finki.emt.eshop.model.exceptions.AuthorNotFoundException;
import mk.ukim.finki.emt.eshop.model.exceptions.BookNotFoundException;
import mk.ukim.finki.emt.eshop.repository.AuthorRepository;
import mk.ukim.finki.emt.eshop.repository.BookRepository;
import mk.ukim.finki.emt.eshop.service.BookService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class BookServiceImpl implements BookService {

    private final BookRepository bookRepository;
    private final AuthorRepository authorRepository;

    public BookServiceImpl(BookRepository bookRepository, AuthorRepository authorRepository) {
        this.bookRepository = bookRepository;
        this.authorRepository = authorRepository;
    }

    @Override
    public Optional<Book> findById(Long id) {
        return bookRepository.findById(id);
    }

    @Override
    public List<Book> findAll() {
        return bookRepository.findAll().stream().sorted((book1,book2)-> (int) (book1.getBookId()-book2.getBookId())).collect(Collectors.toList());
    }

    @Override
    public Optional<Book> save(BookDto bookDto) {
        Author author = authorRepository.findById(bookDto.getAuthorId()).orElseThrow(()->new AuthorNotFoundException(bookDto.getAuthorId()));
        Book book = new Book(bookDto.getName(),bookDto.getCategory(),author,bookDto.getAvailableCopies());
        return Optional.of(bookRepository.save(book));
    }

    @Override
    public Optional<Book> edit(Long bookId, BookDto bookDto) {
        Book book = bookRepository.findById(bookId).orElseThrow(()->new BookNotFoundException(bookId));
        Author author = authorRepository.findById(bookDto.getAuthorId()).orElseThrow(()-> new AuthorNotFoundException(bookDto.getAuthorId()));
        book.setName(bookDto.getName());
        book.setCategory(bookDto.getCategory());
        book.setAuthor(author);
        book.setAvailableCopies(bookDto.getAvailableCopies());
        return Optional.of(bookRepository.save(book));
    }

    @Override
    public void delete(Long id) {
        bookRepository.deleteById(id);
    }

    @Override
    public void reserveCopy(Long bookId) {
        Book book = bookRepository.findById(bookId).orElseThrow(()->new BookNotFoundException(bookId));
        if(book.getAvailableCopies()==0)
        {
            return;
        }
        book.setAvailableCopies(book.getAvailableCopies()-1);
        bookRepository.save(book);
    }
}