package com.techelevator.model;

public class Review {
    //properties/fields
    private int reviewId;
    private int beerId;
    private String review;
    private int rating;

    //constructors



    public Review() {
        this.reviewId = reviewId;
        this.beerId = beerId;
        this.review = review;
        this.rating = rating;
    }

    //methods


    @Override
    public String toString() {
        return "Review{" +
                "review_id=" + reviewId +
                ", beer_id=" + beerId +
                ", review=" + review +
                ", rating=" + rating +
                '}';
    }

    //getters

    public int getReviewId() {
        return reviewId;
    }

    public int getBeerId() {
        return beerId;
    }

    public String getReview() {
        return review;
    }

    public int getRating() {
        return rating;
    }

    //setters

    public void setReviewId(int reviewId) {
        this.reviewId = reviewId;
    }

    public void setBeerId(int beerId) {
        this.beerId = beerId;
    }

    public void setReview(String review) {
        this.review = review;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }
}
