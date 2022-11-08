package com.techelevator.model;

public class Review {

    //properties/fields

    private int reviewId;
    private int beerId;
    private String review;
    private int rating;
    private int userId;

    //constructors

    public Review() {

    }

    public Review(int reviewId, int beerId, String review, int rating, int userId) {
        this.reviewId = reviewId;
        this.beerId = beerId;
        this.review = review;
        this.rating = rating;
        this.userId = userId;
    }

    //methods

    @Override
    public String toString() {
        return "Review{" +
                "reviewId=" + reviewId +
                ", beerId=" + beerId +
                ", review='" + review + '\'' +
                ", rating=" + rating +
                ", userId=" + userId +
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

    public int getUserId() {return userId;}

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

    public void setUserId(int userId) {this.userId = userId;}
}
