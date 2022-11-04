import React from "react";
import Navbar from "../Home/Navbar";
import BeerList from "../Beer/BeerList"

export default function BreweryDetails() {

        return(
            <div>
            <Navbar />
            <div className="breweryHeader">
            <img src="./Images/MoesTavern.jpg" className="breweryBanner" />
            <h1 className="breweryName">Moe's Tavern</h1>
            </div>
            <div className="breweryDetails">
                <div className="breweryInfo">
                    <ul>
                    <li>breweryOwner: Moe Szyslak</li>
                    <li>address: Main st, Springfield MA</li>
                    <li>hours: 4pm-2am weekdays, sunday 12pm-10pm</li>
                    <li>contactPhone: *disconnected*</li>
                    <li>contactEmail: StopPrankCallingMe@Compuserve.com</li>
                    <li>about: Where the elite meet to fete. We had an Aerosmith concert one time. Could happen again, I ain't saying for sure.</li>
                    <li>Website: www.moestavern.myspace.com</li>
                    </ul>
                </div>
                <div className="breweryBeers">
                    <BeerList />
                </div>

            </div>

            </div>
        )

}