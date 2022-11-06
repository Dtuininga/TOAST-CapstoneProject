package com.techelevator.dao;

import com.techelevator.model.Beers;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
@Component
public class JdbcBeer implements BeerDao {

    private JdbcTemplate jdbcTemplate;

    public JdbcBeer(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<Beers> getAllBeer() {
        String sql = "SELECT *  FROM beers ORDER BY id";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql);
        List<Beers> beers = new ArrayList<>();
        while (results.next()) {
            Beers beer = mapRowToBeers(results);
            beers.setReviews(getReviews(beers.getBeerId()));
            beers.add(beers);
        }
        return beers;
    }



    @Override
    public void saveBeer(Beers newBeer) {

    }

    @Override
    public void deleteBeer(long beerId) {
    String sql = "delete from beer_reviews where beer_id = ?; delete from beer where id = ?";
    jdbcTemplate.update(sql, beerId, beerId);
    }

    @Override
    public Beers getBeerByID(long beerId) {
        String sql = "select * from beers where id = ?";
        Beers beer = new Beers();

        while (results.next()){
            beer = mapRowToBeer(results);
            beer.setReviews(getReviews(beer.getBeerId()));
        }
        return beer;
    }

    @Override
    public void updateBeer(Beers beer) {

    }
}
