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
            isActive: false
        }
    }

    handleLogout = () => {
        this.props.addToken("")
        this.props.deleteUser()
    }

    handlePush = () => {
        this.setState((state) => ({isActive: !state.isActive}))
    }
    


    render(){
        return(
            <div className='mainPage'>
                <Navbar handleChange={this.handlePush} />
                
                {this.props.token.token !== undefined ?
                        <div>
                            <Link to='/home'>Home |</Link>
                            <Link to='/login' onClick={this.handleLogout}> logout</Link> 
                            <Redirect to='/home'/>

                        </div>  
                    : 
                        <Link to='/login'>Home</Link>
                }
                {this.state.isActive && <Sidebar />}
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
        )
    }
} 

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));