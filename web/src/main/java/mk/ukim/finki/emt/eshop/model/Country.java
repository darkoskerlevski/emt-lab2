package mk.ukim.finki.emt.eshop.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Data
public class Country {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    public Long countryId;

    public String name;

    public String continent;

    public Country(){}

    public Country(String name, String continent) {
        this.name = name;
        this.continent = continent;
    }
}