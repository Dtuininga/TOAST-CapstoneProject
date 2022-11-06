package com.techelevator.dao;

import com.techelevator.model.Review;
import org.springframework.jdbc.core.JdbcOperations;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class JdbcReview implements ReviewDao{
    private JdbcTemplate jdbcTemplate;

    @Override
    public List<Review> getReviews(long beer_id) {
        List<Review> reviews = new ArrayList<>();
        String sql = "select * from beer_reviews where beer_id = ?";
        SqlRowSet rs = jdbcTemplate.queryForRowSet(sql, beer_id);
        while (rs.next()){
            Review review = new Review();
            review.setReviewId((int) rs.getLong("review_id"));
            review.setReview(rs.getString("review"));
            review.setRating(rs.getInt("rating"));
            reviews.add(review);
        }
        return reviews;
    }

    @Override
    public void addReview(Review review) {

    }
}
