package com.techelevator.dao;

import com.techelevator.model.Review;


import java.util.List;

public interface ReviewDao {

    List<Review> getReviews(long review_id);

    void addReview(Review review);

}
