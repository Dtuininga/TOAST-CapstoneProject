import BreweryList from "../Brewery/BreweryList"
import BreweryData from "../Brewery/BreweryData"

export default function AdminHome(props){
    const {userName} = props
    return(
        <div>
            Welcome Admin {userName}
            <h4>List of breweries with "pending" status to approve:</h4>
            <BreweryList />
            <h4>Other functions - list of reviews, user profiles to be able to delete?</h4>
        </div>
    )
}