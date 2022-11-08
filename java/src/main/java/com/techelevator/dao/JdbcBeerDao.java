package com.techelevator.dao;

import com.techelevator.model.*;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;

import javax.sql.DataSource;
import java.util.ArrayList;
import java.util.List;
@Component
public class JdbcBeerDao implements BeerDao {

    private final JdbcTemplate jdbcTemplate;

    public JdbcBeerDao(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }

    //getting all beers from the database
    @Override
    public List<Beers> getAllBeer() {
        List<Beers> beers = new ArrayList<>();
        String sql =
                "SELECT  " +
                        "beer_id, " +
                        "brewery_id, " +
                        "beer_img, " +
                        "beer_name, " +
                        "beer_abv, " +
                        "beer_type, " +
                        "beer_description," +
                        "beer_active"+
                        "FROM beers " +
                        "ORDER BY id";
        SqlRowSet rs = jdbcTemplate.queryForRowSet(sql);
        while (rs.next()) {
            Beers b = mapRowToBeers(rs);
            beers.add(b);
        }
        return beers;
    }

    @Override
        public void saveBeer (Beers newBeer){
        String sql = "INSERT INTO beers (beer_img, brewery_id, beer_name, beer_abv, beer_type, beer_description, beer_active) " +
                "VALUES (?,?,?,?,?,?,?)";
        jdbcTemplate.update(sql,
                newBeer.getBeerImg(),
                newBeer.getBreweryId(),
                newBeer.getBeerName(),
                newBeer.getBeerAbv(),
                newBeer.getBeerType(),
                newBeer.getBeerDescription(),
                newBeer.isActive());
        }

    @Override
        public void deleteBeer ( long beerId){
            String sql = "delete from beer_reviews where beer_id = ?; delete from beer where id = ?";
            jdbcTemplate.update(sql, beerId, beerId);
        }

            @Override
        public Beers getBeerByID ( long beerId ){
           String sql = "select  " +
                    "beer_id = ?, " +
                    "brewery_id = ?, " +
                    "beer_img = ?, " +
                    "beer_name = ?, " +
                    "beer_abv = ?, " +
                    "beer_type = ?, " +
                    "beer_description = ? " +
                    "from beers " +
                    "where id = ?";
            Beers beer = new Beers();
            SqlRowSet rs = jdbcTemplate.queryForRowSet(sql, beerId);
            while (rs.next()) {
                beer = mapRowToBeers(rs);
            }
            return beer;
        }



    @Override
    public List<Beers> getBeerByBreweryID(long breweryId) {
        return null;
    }

            @Override
        public void updateBeer (Beers beer) {
                String sql =
                        "update beers " +
                                "set beer_id = ?, " +
                                "brewery_id = ?, " +
                                "beer_img = ?, " +
                                "beerName = ?, " +
                                "beer_abv = ?, " +
                                "beerType = ?, " +
                                "beerDescription = ?";
                try {
                    jdbcTemplate.update(sql,
//                            beer.getBeerId(),
                            beer.getBreweryId(),
                            beer.getBeerImg(),
                            beer.getBeerName(),
                            beer.getBeerAbv(),
                            beer.getBeerType(),
                            beer.getBeerDescription());
                } catch (Exception e) {
                    System.err.println(e.getMessage());
                }
            }

    private Beers mapRowToBeers(SqlRowSet rs) {
        Beers beers = new Beers();
        beers.getBeerId(rs.getInt("beer_id"));
        beers.setBreweryId(rs.getInt("brewery_id"));
        beers.setBeerImg(rs.getString( "beer_img"));
        beers.setBeerName(rs.getString( "beer_name"));
        beers.setBeerAbv(rs.getDouble("beer_abv"));
        beers.setBeerType(rs.getString("beer_type"));
        beers.setBeerDescription(rs.getString("beer_description"));
        beers.setActive(rs.getBoolean("beer_active"));
        return beers;
    }
}

//    @Override
//    public Beers getBeerByName(String beerName) {
//        String sql =
//                "select  " +
//                        "set beer_id = ?, " +
//                        "brewery_id = ?, " +
//                        "beer_img = ?, " +
//                        "beerName = ?, " +
//                        "beer_abv = ?, " +
//                        "beerType = ?, " +
//                        "beerDescription = ? " +
//                        "from beers " +
//                        "where id = ?";
//        Beers beer = new Beers();
//        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, beerName);
//        while (results.next()) {
//            beer = mapRowToBeer(results);
//
//        }
//








