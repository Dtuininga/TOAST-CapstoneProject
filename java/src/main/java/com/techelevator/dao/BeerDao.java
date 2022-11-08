package com.techelevator.dao;


import com.techelevator.model.*;

import java.util.List;

public interface BeerDao {

    List<Beers> getAllBeer();

    void saveBeer(Beers newBeer);

    void deleteBeer(long beerId);

    Beers getBeerByID(long beerId);

    List <Beers> getBeerByBreweryID(long breweryId);

    void updateBeer(Beers beer);

}
