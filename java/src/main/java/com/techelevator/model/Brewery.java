package com.techelevator.model;

public class Brewery {
    //properties/fields
    private int brewery_id;
    private int beer_id;
    private char brewery_name;
    private char brewery_img;
    private char brewery_hours;
    private char brewery_history;
    private char brewery_email;
    private  int brewery_phone;
    private char brewery_website;
    private boolean brewery_active;

    //constructor


    public Brewery(int brewery_id,
                   int beer_id,
                   char brewery_name,
                   char brewery_img,
                   char brewery_hours,
                   char brewery_history,
                   char brewery_email,
                   int brewery_phone,
                   char brewery_website,
                   boolean brewery_active) {
        this.brewery_id = brewery_id;
        this.beer_id = beer_id;
        this.brewery_name = brewery_name;
        this.brewery_img = brewery_img;
        this.brewery_hours = brewery_hours;
        this.brewery_history = brewery_history;
        this.brewery_email = brewery_email;
        this.brewery_phone = brewery_phone;
        this.brewery_website = brewery_website;
        this.brewery_active = brewery_active;
    }

    //methods

    @Override
    public String toString() {
        return "Brewery{" +
                "brewery_id=" + brewery_id +
                ", beer_id=" + beer_id +
                ", brewery_name=" + brewery_name +
                ", brewery_img=" + brewery_img +
                ", brewery_hours=" + brewery_hours +
                ", brewery_history=" + brewery_history +
                ", brewery_email=" + brewery_email +
                ", brewery_phone=" + brewery_phone +
                ", brewery_website=" + brewery_website +
                ", brewery_active=" + brewery_active +
                '}';
    }

    //getters


    public int getBrewery_id() {
        return brewery_id;
    }

    public int getBeer_id() {
        return beer_id;
    }

    public char getBrewery_name() {
        return brewery_name;
    }

    public char getBrewery_img() {
        return brewery_img;
    }

    public char getBrewery_hours() {
        return brewery_hours;
    }

    public char getBrewery_history() {
        return brewery_history;
    }

    public char getBrewery_email() {
        return brewery_email;
    }

    public int getBrewery_phone() {
        return brewery_phone;
    }

    public char getBrewery_website() {
        return brewery_website;
    }

    public boolean isBrewery_active() {
        return brewery_active;
    }

    //setter


    public void setBrewery_id(int brewery_id) {
        this.brewery_id = brewery_id;
    }

    public void setBeer_id(int beer_id) {
        this.beer_id = beer_id;
    }

    public void setBrewery_name(char brewery_name) {
        this.brewery_name = brewery_name;
    }

    public void setBrewery_img(char brewery_img) {
        this.brewery_img = brewery_img;
    }

    public void setBrewery_hours(char brewery_hours) {
        this.brewery_hours = brewery_hours;
    }

    public void setBrewery_history(char brewery_history) {
        this.brewery_history = brewery_history;
    }

    public void setBrewery_email(char brewery_email) {
        this.brewery_email = brewery_email;
    }

    public void setBrewery_phone(int brewery_phone) {
        this.brewery_phone = brewery_phone;
    }

    public void setBrewery_website(char brewery_website) {
        this.brewery_website = brewery_website;
    }

    public void setBrewery_active(boolean brewery_active) {
        this.brewery_active = brewery_active;
    }
}
