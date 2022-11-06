package com.techelevator.dao;

import com.techelevator.model.Beers;

import java.util.List;

public class JdbcBeer implements BeerDao {

    @Override
    public List<Beers> getAllBeer() {
        return null;
    }

    @Override
    public void saveBeer(Beers newBeer) {

    }

    @Override
    public void deleteBeer(long beerId) {

    }

    @Override
    public Beers getBeerByID(long beerId) {
        return null;
    }

    @Override
    public List<Beers> getBeerByBreweryID(long breweryId) {
        return null;
    }

    @Override
    public void updateBeer(Beers beer) {

    }
}
