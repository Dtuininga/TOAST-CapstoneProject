package com.techelevator.services;

import com.techelevator.dao.JdbcBeerDao;
import com.techelevator.model.Beers;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BeersService {
    private final RestTemplate = new RestTemplate();
    private final JdbcTemplate jdbcTemplate = new JdbcTemplate();
    private final JdbcBeerDao beerDao;

    public List<Beers> getAllBeer(JdbcBeerDao beerDao){
        return beerDao.getAllReviews();
    }

    public void deleteBeer(long beerId){
        beerDao.deleteBeer(beerId);
    };

    public Beers getBeerByID(long beerId){
        return beerDao.getBeerByID(beerId);
    };

   public void updateBeer(Beers beer){
       beerDao.updateBeer(beer);
   };
}
