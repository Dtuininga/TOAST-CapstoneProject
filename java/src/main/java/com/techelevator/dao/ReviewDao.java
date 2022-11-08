package com.techelevator.dao;

import com.techelevator.model.Review;


import java.util.List;

public interface ReviewDao {

    List<Review> getReviewsByBeerId(int beerID);

    void addReview(Review review);

}
