import BreweryUpdate from "../Brewery/BreweryUpdate"

export default function BrewerHome(props){
    return(
        <div>
        <h1>Welcome Brewer {props.userName}!</h1>
        <BreweryUpdate />
        </div>
        
        
    )
}