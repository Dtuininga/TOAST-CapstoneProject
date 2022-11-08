import axios from 'axios' 
import {Component} from 'react'
import {Link} from 'react-router-dom'
import { baseUrl } from '../../Shared/baseUrl'
import Navbar from '../Home/Navbar'

class Register extends Component{


    constructor(props){
        super(props);
        this.state = {
            over21: false,
            username: '',
            password: '',
            confirmPassword: '',
            brewer: false,
            role: 'USER'
        }
        
    }
    is21 = () => {
        this.setState((state)=>({over21:!state.over21}))
    }

    isBrewer = () => {
        this.setState((state) => ({brewer: !state.brewer}))
        this.setState((state) => ({role: state.brewer ? 'BREWER' : 'USER'}))
    }


    handleInputChange = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = () => {
        const data = {over21: this.state.over21, username: this.state.username, password: this.state.password, confirmPassword: this.state.confirmPassword, role: this.state.role}
        if(this.state.password === this.state.confirmPassword){
            axios.post(baseUrl + "/register", data)
            
        }else{
            alert("Password and Confirm Password must match!!!")
        }
    }
   

    render(){
        return(
            <div>
                    <div className="registration">
                <h1>Create Account</h1>
                <div>
                    <span> I am over 21 years of age </span>
                    <input type="checkbox" onChange={this.is21}/>
                </div>
                <div>
                <span> Are you a brewer? </span>
                    <input type="checkbox" onChange={this.isBrewer}/>
                </div>
                <label class="sr-only">Username</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    class="form-control"
                    placeholder="Username"
                    v-model="user.username"
                    onChange={this.handleInputChange}
                    required
                />
                <label class="sr-only">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    class="form-control"
                    placeholder="Password"
                    v-model="user.password"
                    onChange={this.handleInputChange}
                    required
                />
                <input
                    type="password"
                    id="password-confirm"
                    name="confirmPassword"
                    class="form-control"
                    placeholder="Confirm Password"
                    v-model="user.password"
                    onChange={this.handleInputChange}
                    required
                />
            
                <button type="submit" className="registerButton" onClick={this.handleSubmit} disabled={!this.state.over21}>Let's make a TOAST!</button>
                <sp/>
                <div>
                <Link to="/login">I already have an account!</Link>
                </div>
            </div>
            </div>
        )
    }
}

export default Register;