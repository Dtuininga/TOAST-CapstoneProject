package com.techelevator.controller;

import com.techelevator.model.Brewery;
import com.techelevator.services.BreweryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

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
}
