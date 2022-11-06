package com.techelevator.dao;

import com.techelevator.model.Review;

import java.util.List;

public class JdbcReview implements ReviewDao{
    @Override
    public List<Review> getReviews(long beer_id) {
        return null;
    }

    @Override
    public void addReview(Review review) {

    }
}
