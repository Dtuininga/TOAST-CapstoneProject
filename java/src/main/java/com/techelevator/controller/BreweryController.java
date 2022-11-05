package com.techelevator.controller;

import com.techelevator.model.Brewery;
import com.techelevator.services.BreweryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
//@PreAuthorize("isAuthenticated()")
public class BreweryController {
    @Autowired
    private BreweryService breweryService;

    @RequestMapping(value = "/breweries", method = RequestMethod.GET)
    public List<Brewery> getAllBreweries(){
        return breweryService.getAllBreweries();
    }

    @RequestMapping(value = "breweries/{id}", method = RequestMethod.GET)
    public Brewery getBreweryByBreweryId(@PathVariable int id){return breweryService.getBreweryByBreweryId(id);}

    @ResponseStatus(HttpStatus.CREATED)
    @RequestMapping(value = "/addbrewery", method = RequestMethod.POST)
    public void addBrewery(@RequestBody Brewery brewery){
        breweryService.createBrewery(brewery);
    }
}
