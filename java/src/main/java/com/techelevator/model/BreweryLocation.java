package com.techelevator.model;

public class BreweryLocation {
    //properties/fields
    private int brewery_location;
    private int  brewery_id;
    private char brewery_street;
    private char brewery_city;
    private char brewery_state;
    private int brewery_zipcode;

    //constructor

    public BreweryLocation(
            int brewery_location,
            int brewery_id,
            char brewery_street,
            char brewery_city,
            char brewery_state,
            int brewery_zipcode) {
        this.brewery_location = brewery_location;
        this.brewery_id = brewery_id;
        this.brewery_street = brewery_street;
        this.brewery_city = brewery_city;
        this.brewery_state = brewery_state;
        this.brewery_zipcode = brewery_zipcode;
    }

    //methods

    @Override
    public String toString() {
        return "BreweryLocation{" +
                "brewery_location=" + brewery_location +
                ", brewery_id=" + brewery_id +
                ", brewery_street=" + brewery_street +
                ", brewery_city=" + brewery_city +
                ", brewery_state=" + brewery_state +
                ", brewery_zipcode=" + brewery_zipcode +
                '}';
    }


    //getters

    public int getBrewery_location() {
        return brewery_location;
    }

    public int getBrewery_id() {
        return brewery_id;
    }


    public char getBrewery_street() {
        return brewery_street;
    }

    public char getBrewery_city() {
        return brewery_city;
    }

    public char getBrewery_state() {
        return brewery_state;
    }

    public int getBrewery_zipcode() {
        return brewery_zipcode;
    }

    //setters

    public void setBrewery_location(int brewery_location) {
        this.brewery_location = brewery_location;
    }

    public void setBrewery_id(int brewery_id) {
        this.brewery_id = brewery_id;
    }

    public void setBrewery_street(char brewery_street) {
        this.brewery_street = brewery_street;
    }

    public void setBrewery_city(char brewery_city) {
        this.brewery_city = brewery_city;
    }

    public void setBrewery_state(char brewery_state) {
        this.brewery_state = brewery_state;
    }

    public void setBrewery_zipcode(int brewery_zipcode) {
        this.brewery_zipcode = brewery_zipcode;
    }
}
