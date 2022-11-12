import React from "react";
import Navbar from "../Home/Navbar";
import BeerList from "../Beer/BeerList";
import { useParams } from "react-router";
import { useState } from "react";
import BreweryData from "./BreweryData";

export default function BreweryDetails(props) {
    //trying to recieve the brewery ID# from the clicked on breweryCard
    //fetch: get brewery by id, get beer list by breweryID, get average of all beer ratings combined
    const [breweryData, setBreweryData]= useState()

    // let incomingId =useParams()
    // console.log(incomingId)

    // React.useEffect(()=>{ //calls brewery info from ID# passed from breweryCard
    //     fetch('http://localhost:8081/breweries/'+4)
    //     .then(res => res.json())
    //     .then(setBreweryData(item => <BreweryData breweryId={item.breweryId}
    //         breweryName={item.breweryName}
    //         breweryImg={item.breweryImg}
    //         breweryHours={item.breweryHours}
    //         breweryHistory={item.breweryHistory}
    //         breweryEmail={item.breweryEmail}
    //         breweryPhone={item.breweryPhone}
    //         breweryWebsite={item.breweryWebsite}
    //         breweryAddress={item.breweryAddress}
    //         />))
    // },[])

    

        return( //hardcoded placeholder data to maintain formatting
            <div>
                {/* <BreweryData /> */}
           
            <div className="breweryHeader">
            <img src="./Images/MoesTavern.jpg" className="breweryBanner" />
            <h1 className="breweryName"> recieved brewery Id: {}</h1>
            </div>
            <div className="breweryDetails">
                <div className="breweryInfo">
                    <ul>
                    <li>Average Beer Score: &#127866; &#127866; &#127866;</li>
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
                <h4>(fetch beerlist by brewery id)</h4>
                    <BeerList />
                </div>

            </div>

            </div>
        )

}
