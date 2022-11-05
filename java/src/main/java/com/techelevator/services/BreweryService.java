package com.techelevator.services;

import com.techelevator.dao.JdbcBreweryDao;
import com.techelevator.model.Brewery;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Service
public class BreweryService {
    private final RestTemplate restTemplate = new RestTemplate();
    private final JdbcTemplate jdbcTemplate = new JdbcTemplate();
    private final JdbcBreweryDao breweryDao;

    public BreweryService(JdbcBreweryDao breweryDao){ this.breweryDao = breweryDao;}

    public List <Brewery> getAllBreweries(){return breweryDao.getAllBreweries();}

    public Brewery getBreweryByBreweryId(int breweryId){return breweryDao.getBreweryById(breweryId);}
}
