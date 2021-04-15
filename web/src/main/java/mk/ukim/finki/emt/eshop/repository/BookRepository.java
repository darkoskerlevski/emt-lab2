package mk.ukim.finki.emt.eshop.repository;

import mk.ukim.finki.emt.eshop.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookRepository extends JpaRepository<Book,Long> {
}
