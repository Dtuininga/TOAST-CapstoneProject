import {Link} from 'react-router-dom'
import BreweryUpdate from '../Brewery/BreweryUpdate';
import UserDetails from '../Users/UserDetails';

function Home(props) {

    return(
        <div className='homePage'>
            <h2>Welcome {props.currentUser}!</h2>
            
            <p>conditional rendering based on user role. no profile defaults to login screen</p>
            <p>user/beer lover:</p>
                <UserDetails />
            <p>brewer should land on brewery info page and see "pending" or "approved" status, and be able to edit brewery info and add beers</p>
                <BreweryUpdate />
            <p>Admin landing page should see a list of pending brewery requests to approve</p>
            <p>("select * from brewery where status = pending"?)</p>
        </div>
    )
}

export default Home;