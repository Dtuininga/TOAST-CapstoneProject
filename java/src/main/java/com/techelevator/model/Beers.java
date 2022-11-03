package com.techelevator.model;

public class Beers {
    //properties / fields
    private int beer_id;
    private int brewery_id;
    private char beer_img;
    private char beer_name;
    private double beer_abv;
    private char beer_type;
    private char beer_description;

    //constructor

    public Beers(int beer_id,
                 int brewery_id,
                 char beer_img,
                 char beer_name,
                 double beer_abv,
                 char beer_type,
                 char beer_description) {
        this.beer_id = beer_id;
        this.brewery_id = brewery_id;
        this.beer_img = beer_img;
        this.beer_name = beer_name;
        this.beer_abv = beer_abv;
        this.beer_type = beer_type;
        this.beer_description = beer_description;
    }

    //getters

    public int getBeer_id() {
        return beer_id;
    }

    public int getBrewery_id() {
        return brewery_id;
    }

    public char getBeer_img() {
        return beer_img;
    }

    public char getBeer_name() {
        return beer_name;
    }

    public double getBeer_abv() {
        return beer_abv;
    }

    public char getBeer_type() {
        return beer_type;
    }

    public char getBeer_description() {
        return beer_description;
    }

    //setters


    public void setBeer_id(int beer_id) {
        this.beer_id = beer_id;
    }

    public void setBrewery_id(int brewery_id) {
        this.brewery_id = brewery_id;
    }

    public void setBeer_img(char beer_img) {
        this.beer_img = beer_img;
    }

    public void setBeer_name(char beer_name) {
        this.beer_name = beer_name;
    }

    public void setBeer_abv(double beer_abv) {
        this.beer_abv = beer_abv;
    }

    public void setBeer_type(char beer_type) {
        this.beer_type = beer_type;
    }

    public void setBeer_description(char beer_description) {
        this.beer_description = beer_description;
    }
}
