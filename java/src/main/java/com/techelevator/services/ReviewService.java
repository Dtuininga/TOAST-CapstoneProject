package com.techelevator.services;


import com.techelevator.dao.ReviewDao;
import com.techelevator.model.Review;
import com.techelevator.dao.JdbcReviewDao;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Service
public class ReviewService {
    private final RestTemplate restTemplate = new RestTemplate();
    private final JdbcTemplate jdbcTemplate = new JdbcTemplate();
    private final JdbcReviewDao reviewDao;

    public ReviewService(JdbcReviewDao reviewDao) {
        this.reviewDao = reviewDao;
    }

    public List<Review> getReviews(){
        return reviewDao.getReviews();
    }

    public void addReview(Review review){
        reviewDao.addReview(review);
    }
}
