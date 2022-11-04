package com.techelevator.dao;

import com.techelevator.model.Brewery;
import com.techelevator.model.BreweryLocation;

import java.util.List;

public interface BreweryLocationDao {

    List<BreweryLocation> getAllBreweryLocations();

    void addNewBreweryLocation(BreweryLocation breweryLocation);

    BreweryLocation getBreweryLocationByBreweryId(int breweryId);

    void updateBreweryLocation(BreweryLocation breweryLocation);

    void deleteBreweryLocationByBreweryId(int breweryId);
}
