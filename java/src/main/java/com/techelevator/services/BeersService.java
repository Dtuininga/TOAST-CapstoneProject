package com.techelevator.services;

import com.techelevator.dao.JdbcBeerDao;
import com.techelevator.model.*;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Service
public class BeersService {
    private final RestTemplate restTemplate = new RestTemplate();
    private final JdbcTemplate jdbcTemplate = new JdbcTemplate();
    private final JdbcBeerDao beerDao;

    public BeersService(JdbcBeerDao beerDao) {
        this.beerDao = beerDao;
    }

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
