package com.techelevator.controller;

import com.techelevator.model.Review;
import com.techelevator.services.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class ReviewController {
    @Autowired
    private ReviewService reviewService;

    @RequestMapping(value ="/reviews", method = RequestMethod.GET)
    public List<Review> getReviewsByBeerId(int beerId) {return reviewService.getReviews(beerId);}

    @ResponseStatus(HttpStatus.CREATED)
    @RequestMapping(value = "/addReview", method = RequestMethod.POST)
    public void addReview(@RequestBody Review review){
        reviewService.addReview(review);
    }

}
