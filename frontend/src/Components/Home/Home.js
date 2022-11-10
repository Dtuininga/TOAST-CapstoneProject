import {Link} from 'react-router-dom'

function Home(props) {
    return(
        <div className='homePage'>
            <h2>Welcome {props.currentUser}!</h2>
            <h3>To add:</h3>
            <p>conditional rendering based on user role</p>
            <p>user/beer lover should see profile info, "reviews I've written"</p>
            <p>brewer should land on brewery info page and see "pending" or "approved" status, and be able to edit brewery info and add beers</p>
            <p>Admin landing page should see a list of pending brewery requests to approve</p>
        </div>
    )
}

export default Home;