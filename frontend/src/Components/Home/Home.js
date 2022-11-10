import {Link} from 'react-router-dom'

function Home(props) {
    return(
        <div className='homePage'>
            <h2>Welcome {props.currentUser}!</h2>
        </div>
    )
}

export default Home;