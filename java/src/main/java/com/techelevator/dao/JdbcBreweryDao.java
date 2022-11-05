package com.techelevator.dao;

import com.techelevator.model.Brewery;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;

import javax.sql.DataSource;
import java.util.ArrayList;
import java.util.List;

@Component
public class JdbcBreweryDao implements BreweryDao {

    private final JdbcTemplate jdbcTemplate;

    public JdbcBreweryDao(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }

    @Override
    public List<Brewery> getAllBreweries() {
        List<Brewery> breweries = new ArrayList<>();
        String sql = "SELECT brewery_id, " +
                     "brewery_img, brewery_hours, brewery_history, brewery_email, " +
                     "beer_id, brewery_name, brewery_phone, brewery_website, brewery_active " +
                     "FROM brewery";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql);
        while(results.next()){
            Brewery brewery = mapRowToBrewery(results);
            breweries.add(brewery);
        }
        return breweries;
    }

    @Override
    public void addNewBrewery(Brewery brewery) {

    }

    @Override
    public Brewery getBreweryById(int breweryId) {
        String sql = "SELECT brewery_id, " +
                "brewery_img, brewery_hours, brewery_history, brewery_email, " +
                "beer_id, brewery_name, brewery_phone, brewery_website, brewery_active " +
                "FROM brewery";
        return null;
    }

    @Override
    public void updateBrewery(Brewery brewery) {

    }

    @Override
    public void deleteBrewery(Long breweryId) {

    }

    @Override
    public List<Brewery> getBreweryByUserID(Long userId) {
        return null;
    }

    private Brewery mapRowToBrewery(SqlRowSet rowSet){
        Brewery brewery = new Brewery();
        brewery.setBreweryId(rowSet.getInt("brewery_id"));
        brewery.setBreweryImg(rowSet.getString("brewery_img"));
        brewery.setBreweryHours(rowSet.getString("brewery_hours"));
        brewery.setBreweryHistory(rowSet.getString("brewery_history"));
        brewery.setBreweryEmail(rowSet.getString("brewery_email"));
        brewery.setBreweryName(rowSet.getString("brewery_name"));
        brewery.setBreweryPhone(rowSet.getString("brewery_phone"));
        brewery.setBreweryWebsite(rowSet.getString("brewery_website"));
        brewery.setBreweryActive(rowSet.getBoolean("brewery_active"));

        return brewery;
    }
}
