import React from "react";
import Navbar from "../Home/Navbar";

export default function BreweryDetails() {

        return(
            <div>
            <Navbar />
            <img src="./Images/MoesTavern.jpg" className="breweryBanner" />
            <h1 className="breweryName">Moe's Tavern</h1>
            <div className="breweryDetails">
                <div className="breweryInfo">
                    <ul>
                    <li>breweryOwner: Moe Szyslak</li>
                    <li>address: Main st, Springfield MA</li>
                    <li>hours: 4pm-2am weekdays, sunday 12pm-10pm</li>
                    <li>contactEmail: StopPrankCallingMe@Compuserve.com</li>
                    </ul>
                </div>
                <div className="breweryBeers">
                beerList: ["Duff", "Duff Lite", "Duff Gold", "Flaming Moe"]
                </div>

            </div>

            </div>
        )

}
