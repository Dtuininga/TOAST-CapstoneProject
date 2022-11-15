import {Link} from 'react-router-dom'
import BreweryUpdate from '../Brewery/BreweryUpdate';
import UserDetails from '../Users/UserDetails';
import {useStore} from "react-redux"

function Home(props) {
    //TODO: get rest of user info passed in with current user (avatar, ROLE, and attached brewery info if a Brewer) New GET?
    const store = useStore()

    console.log(store.getState())

    return(
        <div className='homePage'>
            <h2>Welcome {props.currentUser}!</h2>
            
            <p>conditional rendering based on user role. no profile defaults to login screen</p>
            <p>user/beer lover:</p>
                {/*this.state.userRole=== ROLE_USER &&*/}<UserDetails username={props.currentUser} userpic={props.avatar}/>
            <p>brewer should land on brewery info page and see "pending" or "approved" status, and be able to edit brewery info and add beers</p>
                {/*this.state.userRole=== ROLE_BREWER &&*/} <BreweryUpdate />
            <p>Admin landing page should see a list of pending brewery requests to approve</p>
            <p>("select * from brewery where status = pending"?)</p>
        </div>
    )
}

export default Home;