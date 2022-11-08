package com.techelevator.dao;

import com.techelevator.model.Review;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;

import javax.sql.DataSource;
import java.util.ArrayList;
import java.util.List;

@Component
public class JdbcReviewDao implements ReviewDao {
    private final JdbcTemplate jdbcTemplate;

    public JdbcReviewDao(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }

    @Override
    public List<Review> getReviewsByBeerId(int beerId) {
        List<Review> reviewsByBeer = new ArrayList<>();
        String sql = "select " +
                "review_id = ?, " +
                "beer_id = ?, " +
                "review = ?, " +
                "rating = ? " +
                "from beer_reviews " +
                "where beer_id = ?";

        SqlRowSet rs = jdbcTemplate.queryForRowSet(sql, beerId);
        while (rs.next()) {
            Review review = mapRowToReview(rs);
            reviewsByBeer.add(review);
        }
        return reviewsByBeer;
    }

    @Override
    public void addReview(Review review) {
//        List<Review> reviews = new ArrayList<>();
        String sql = "INSERT INTO review" +
                "(beer_id, review, rating)"+
                "VALUES (?, ?, ?)";

      jdbcTemplate.update(sql,
                          review.getBeerId(),
                          review.getReview(),
                          review.getRating()
                    );
        }

        private Review mapRowToReview(SqlRowSet rs){
            Review review = new Review();
            review.setReviewId(rs.getInt( "review_id"));
            review.setBeerId(rs.getInt("beer_id"));
            review.setReview(rs.getString("review"));
            review.setRating(rs.getInt("rating"));
            return review;
        }
    }


