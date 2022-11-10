import React from 'react'
import {Component} from 'react'
import {Switch, Route, Redirect, Link} from 'react-router-dom'
import Login from '../Login/Login'
import Register from '../Register/Register'
import Home from '../Home/Home'
import {addToken, deleteUser} from '../../Redux/actionCreators'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import Navbar from '../Home/Navbar'
import BreweryList from '../Brewery/BreweryList'
import BeerList from '../Beer/BeerList'
import BreweryDetails from '../Brewery/BreweryDetails'
import BeerDetails from '../Beer/BeerDetails'
import Sidebar from '../../Sidebar/Sidebar'

//Need a way to get our users info from the backend so that we can pass them into props.

const mapStateToProps = state => {
    return {
        token: state.token,
        user: state.user,
    }
}

const mapDispatchToProps = (dispatch) => ({
    addToken: () => { dispatch(addToken()) },
    deleteUser: () => { dispatch(deleteUser())}
});

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn: false
        }
    }

    handleLogout = () => {
        this.props.addToken("")
        this.props.deleteUser()
    }
    


    render(){
        return(
            <div className='mainPage'>
                <Navbar loggedIn={this.state.isLoggedIn} handleChange={this.handlePush} />
                
                {this.props.token.token !== undefined ?
                        <div className='homeLink'>
                            <Link to='/home'>Home |</Link>
                            <Link to='/login' onClick={this.handleLogout}>| logout</Link> 
                            <Redirect to='/home'/>

                        </div>  
                    : 
                        <Link className='homeLink' to='/login'>Home</Link>
                }
                <Sidebar currentUser={this.props.user.username} />
                <div className='content'>
                <Switch>
                    <Route path='/login' component={() => <Login/>}/>
                    <Route path='/register'component={() => <Register/>}/>
                    <Route path='/BreweryList' component={() => <BreweryList />} />
                    <Route path='/BreweryDetails' component={() => <BreweryDetails />} />
                    <Route path='/BeerList' component={() => <BeerList />} />
                    <Route path='/BeerDetails' component={() => <BeerDetails />} />
                    <Route path='/home' component={this.props.token.token !== undefined ? () => <Home/> : null}/>
                    <Redirect to='/login'/>
                </Switch>
                </div>
            </div>
        )
    }
} 

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));