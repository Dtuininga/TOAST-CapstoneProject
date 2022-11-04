package com.techelevator.model;

public class Brewery {
    //properties/fields
    private int breweryId;
    private int beerId;
    private String breweryName;
    private String breweryImg;
    private String breweryHours;
    private String breweryHistory;
    private String breweryEmail;
    private String breweryPhone;
    private String breweryWebsite;
    private boolean breweryActive;

    //constructor


    public Brewery() {
    }

    public Brewery(int breweryId, int beerId, String breweryName, String breweryImg, String breweryHours, String breweryHistory, String breweryEmail, String breweryPhone, String breweryWebsite, boolean breweryActive) {
        this.breweryId = breweryId;
        this.beerId = beerId;
        this.breweryName = breweryName;
        this.breweryImg = breweryImg;
        this.breweryHours = breweryHours;
        this.breweryHistory = breweryHistory;
        this.breweryEmail = breweryEmail;
        this.breweryPhone = breweryPhone;
        this.breweryWebsite = breweryWebsite;
        this.breweryActive = breweryActive;
    }

    //methods

    @Override
    public String toString() {
        return "Brewery{" +
                "breweryId=" + breweryId +
                ", beerId=" + beerId +
                ", breweryName='" + breweryName + '\'' +
                ", breweryImg='" + breweryImg + '\'' +
                ", breweryHours='" + breweryHours + '\'' +
                ", breweryHistory='" + breweryHistory + '\'' +
                ", breweryEmail='" + breweryEmail + '\'' +
                ", breweryPhone=" + breweryPhone +
                ", breweryWebsite='" + breweryWebsite + '\'' +
                ", breweryActive=" + breweryActive +
                '}';
    }


    //getters


    public int getBreweryId() {
        return breweryId;
    }

    public int getBeerId() {
        return beerId;
    }

    public String getBreweryName() {
        return breweryName;
    }

    public String getBreweryImg() {
        return breweryImg;
    }

    public String getBreweryHours() {
        return breweryHours;
    }

    public String getBreweryHistory() {
        return breweryHistory;
    }

    public String getBreweryEmail() {
        return breweryEmail;
    }

    public String getBreweryPhone() {
        return breweryPhone;
    }

    public String getBreweryWebsite() {
        return breweryWebsite;
    }

    public boolean isBreweryActive() {
        return breweryActive;
    }

    //setter


    public void setBreweryId(int breweryId) {
        this.breweryId = breweryId;
    }

    public void setBeerId(int beerId) {
        this.beerId = beerId;
    }

    public void setBreweryName(String breweryName) {
        this.breweryName = breweryName;
    }

    public void setBreweryImg(String breweryImg) {
        this.breweryImg = breweryImg;
    }

    public void setBreweryHours(String breweryHours) {
        this.breweryHours = breweryHours;
    }

    public void setBreweryHistory(String breweryHistory) {
        this.breweryHistory = breweryHistory;
    }

    public void setBreweryEmail(String breweryEmail) {
        this.breweryEmail = breweryEmail;
    }

    public void setBreweryPhone(String breweryPhone) {
        this.breweryPhone = breweryPhone;
    }

    public void setBreweryWebsite(String breweryWebsite) {
        this.breweryWebsite = breweryWebsite;
    }

    public void setBreweryActive(boolean breweryActive) {
        this.breweryActive = breweryActive;
    }
}
