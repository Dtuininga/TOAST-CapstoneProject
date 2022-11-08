package com.techelevator.controller;

import com.techelevator.model.*;
import com.techelevator.model.Beers;
import com.techelevator.services.BeersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class BeersController {
    @Autowired
    private BeersService beersService;

    @RequestMapping(value = "/beers" method = RequestMethod.GET)
    public List<Beers> getAllBeers() {
        return beersService.getAllBeer();
    }

    @RequestMapping(value = "beers/{id}", method = RequestMethod.GET)
    public Beers getBeerById(@PathVariable int id){
        return beersService.getBeerByID();
    }

    @ResponseStatus(HttpStatus.CREATED)
    @RequestMapping(value = "/updatebeers", method = RequestMethod.POST)
    public void updateBeer(@RequestBody Beers beers){
        beersService.updateBeer(beers);
    }
}
