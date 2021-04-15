package mk.ukim.finki.emt.eshop.model.BootStrap;

import lombok.Getter;
import mk.ukim.finki.emt.eshop.model.Author;
import mk.ukim.finki.emt.eshop.model.Country;
import mk.ukim.finki.emt.eshop.repository.AuthorRepository;
import mk.ukim.finki.emt.eshop.repository.CountryRepository;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

@Getter
@Component
public class DataLoader {

    private final CountryRepository countryRepository;
    private final AuthorRepository authorRepository;

    public DataLoader(CountryRepository countryRepository, AuthorRepository authorRepository) {
        this.countryRepository = countryRepository;
        this.authorRepository = authorRepository;
    }

    @PostConstruct
    public void init(){
//        Country country1 = countryRepository.save(new Country("Country1","Continent1"));
//        Country country2 = countryRepository.save(new Country("Country2","Continent2"));
//        Country country3 = countryRepository.save(new Country("Country3","Continent3"));
//        Country country4 = countryRepository.save(new Country("Country4","Continent4"));
//        Country country5 = countryRepository.save(new Country("Country5","Continent5"));
//        Country country6 = countryRepository.save(new Country("Country6","Continent6"));
//
//        Author author1 = authorRepository.save(new Author("authorName1","authorSurname1",country1));
//        Author author2 = authorRepository.save(new Author("authorName2","authorSurname2",country2));
//        Author author3 = authorRepository.save(new Author("authorName3","authorSurname3",country3));
//        Author author4 = authorRepository.save(new Author("authorName4","authorSurname4",country4));
//        Author author5 = authorRepository.save(new Author("authorName5","authorSurname5",country5));
//        Author author6 = authorRepository.save(new Author("authorName6","authorSurname6",country6));

    }
}