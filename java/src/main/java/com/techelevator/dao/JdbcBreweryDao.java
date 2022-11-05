package com.techelevator.dao;

import com.techelevator.model.Brewery;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;

import javax.sql.DataSource;
import java.math.BigDecimal;
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
                     "beer_id, user_id, brewery_name, brewery_phone, brewery_website, brewery_active, brewery_address " +
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
        String sql = "INSERT INTO brewery(brewery_img, brewery_hours, brewery_history, brewery_email," +
                "beer_id, user_id, brewery_name, brewery_phone, brewery_website, brewery_active, brewery_address) VALUES (?,?,?,?,?,?,?,?,?,?,?) ";
        jdbcTemplate.update(sql,
                brewery.getBreweryImg(),
                brewery.getBreweryHours(),
                brewery.getBreweryHistory(),
                brewery.getBreweryEmail(),
                brewery.getBeerId(),
                brewery.getUserId(),
                brewery.getBreweryName(),
                brewery.getBreweryPhone(),
                brewery.getBreweryWebsite(),
                brewery.isBreweryActive(),
                brewery.getBreweryAddress());
    }

    @Override
    public Brewery getBreweryById(int breweryId) {
        Brewery brewery = new Brewery();
        String sql = "SELECT brewery_id, " +
                "brewery_img, brewery_hours, brewery_history, brewery_email, " +
                "beer_id, user_id, brewery_name, brewery_phone, brewery_website, brewery_active, brewery_address " +
                "FROM brewery WHERE brewery_id = ?";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, breweryId);
        while (results.next()){
            brewery = mapRowToBrewery(results);
        }
        return brewery;
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
        brewery.setBeerId(rowSet.getInt("beer_id"));
        brewery.setUserId(rowSet.getInt("user_id"));
        brewery.setBreweryName(rowSet.getString("brewery_name"));
        brewery.setBreweryPhone(rowSet.getString("brewery_phone"));
        brewery.setBreweryWebsite(rowSet.getString("brewery_website"));
        brewery.setBreweryActive(rowSet.getBoolean("brewery_active"));
        brewery.setBreweryAddress(rowSet.getString("brewery_address"));

        return brewery;
    }
}
