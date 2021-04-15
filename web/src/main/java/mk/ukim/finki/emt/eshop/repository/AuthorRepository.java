package mk.ukim.finki.emt.eshop.repository;

import mk.ukim.finki.emt.eshop.model.Author;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AuthorRepository extends JpaRepository<Author,Long> {
}