package com.techelevator.dao;

import com.techelevator.model.Brewery;

import java.util.List;

public interface BreweryDao {

    List<Brewery> getAllBreweries();

    void addNewBrewery(Brewery brewery);

    Brewery getBreweryById(long breweryId);

    void updateBrewery(Brewery brewery);

    void deleteBrewery(Long breweryId);

    List<Brewery> getBreweryByUserID(Long userId);


}
