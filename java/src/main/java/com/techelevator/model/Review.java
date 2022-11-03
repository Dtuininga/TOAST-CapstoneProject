package com.techelevator.model;

public class Review {
    //properties/fields
    private int review_id;
    private int beer_id;
    private char review;
    private int rating;

    //constructors

    public Review(int review_id,
                  int beer_id,
                  char review,
                  int rating) {
        this.review_id = review_id;
        this.beer_id = beer_id;
        this.review = review;
        this.rating = rating;
    }

    //methods


    @Override
    public String toString() {
        return "Review{" +
                "review_id=" + review_id +
                ", beer_id=" + beer_id +
                ", review=" + review +
                ", rating=" + rating +
                '}';
    }

    //getters

    public int getReview_id() {
        return review_id;
    }

    public int getBeer_id() {
        return beer_id;
    }

    public char getReview() {
        return review;
    }

    public int getRating() {
        return rating;
    }

    //setters

    public void setReview_id(int review_id) {
        this.review_id = review_id;
    }

    public void setBeer_id(int beer_id) {
        this.beer_id = beer_id;
    }

    public void setReview(char review) {
        this.review = review;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }
}
