//package com.techelevator.dao;
//
//import com.techelevator.model.Beers;
//import org.springframework.jdbc.core.JdbcTemplate;
//import org.springframework.jdbc.support.rowset.SqlRowSet;
//import org.springframework.stereotype.Component;
//
//import javax.sql.DataSource;
//import java.util.ArrayList;
//import java.util.List;
//@Component
//public abstract class JdbcBeer implements BeerDao {
//
//    private JdbcTemplate jdbcTemplate;
//
//    public JdbcBeer(JdbcTemplate jdbcTemplate) {
//        this.jdbcTemplate = jdbcTemplate;
//    }
////getting all beers from the database
//    @Override
//    public List<Beers> getAllBeer() {
//        String sql =
//                "select  " +
//                        "set beer_id = ?, " +
//                        "brewery_id = ?, " +
//                        "beer_img = ?, " +
//                        "beerName = ?, " +
//                        "beer_abv = ?, " +
//                        "beerType = ?, " +
//                        "beerDescription = ? " +
//                        "from beers "+
//                        "ORDER BY id";
//        SqlRowSet results = jdbcTemplate.queryForRowSet(sql);
//        List<Beers> beers = new ArrayList<>();
//        while (results.next()) {
//            Beers beer = mapRowToBeers(results);
//            beers.setBeerId(getBeerByID(beer.getBeerId()));
//            beers.add(beer);
//        }
//        return beers;
//    }
//
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
//                        "from beers "+
//                        "where id = ?";
//        Beers beer = new Beers();
//        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, beerName);
//        while (results.next()){
//            beer = mapRowToBeer(results);
//
//    }
//
//    @Override
//    public void saveBeer(Beers newBeer) {
//
//    }
//
//    @Override
//    public void deleteBeer(long beerId) {
//    String sql = "delete from beer_reviews where beer_id = ?; delete from beer where id = ?";
//    jdbcTemplate.update(sql, beerId, beerId);
//    }
//
//    @Override
//    public Beers getBeerByID(long beerId = 1) {
//            sql = "select  " +
//                    "set beer_id = ?, " +
//                    "brewery_id = ?, " +
//                    "beer_img = ?, " +
//                    "beerName = ?, " +
//                    "beer_abv = ?, " +
//                    "beerType = ?, " +
//                    "beerDescription = ? " +
//                    "from beers " +
//                    "where id = ?";
//        Beers beer = new Beers();
//        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, beerId);
//        while (results.next()){
//            beer = mapRowToBeer(results);
//        }
//        return beer;
//    }
//
//    @Override
//    public void updateBeer(Beers beer) {
//        String sql =
//                        "update beers " +
//                        "set beer_id = ?, " +
//                        "brewery_id = ?, " +
//                        "beer_img = ?, " +
//                        "beerName = ?, " +
//                        "beer_abv = ?, " +
//                        "beerType = ?, " +
//                                "beerDescription = ?";
//        try {
//            jdbcTemplate.update(
//                    sql,
//                    beer.getBeerId(),
//                    beer.getBreweryId(),
//                    beer.getBeerImg(),
//                    beer.getBeerName(),
//                    beer.getBeerAbv(),
//                    beer.getBeerType(),
//                    beer.getBeerDescription());
//        }
//        catch (Exception e){
//            System.err.println(e.getMessage());
//        }
//    }
//}
//
//
//
//}