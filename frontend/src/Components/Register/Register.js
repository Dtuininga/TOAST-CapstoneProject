import axios from 'axios' 
import {Component} from 'react'
import {Link} from 'react-router-dom'
import { baseUrl } from '../../Shared/baseUrl'
import Navbar from '../Home/Navbar'


class Register extends Component{
    //TODO: capture userID at brewery creation so the brewery is linked to one specific login
    //-brewery can currently be created without a new userID & password? 



    constructor(props){
        super(props);
        this.state = {
            over21: false,
            username: '',
            password: '',
            confirmPassword: '',
            brewer: false,
            role: 'USER',
            breweryname:'',
            brewerywebsite:'',
            breweryphone:'',
            breweryemail:'',
            breweryaddress:'',
            avatarColor: ''
        }
        
    }
    is21 = () => { //for legal protections
        this.setState((state)=>({over21:!state.over21}))
    }

    isBrewer = () => {  //when checked, add form lines for brewery info
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
        const data = {over21: this.state.over21, username: this.state.username, password: this.state.password, confirmPassword: this.state.confirmPassword, role: this.state.role, avatar: this.state.avatarColor}
        const breweryData = {breweryName: this.state.breweryname, 
        breweryWebsite: this.state.brewerywebsite,
        breweryPhone: this.state.breweryphone,
        breweryEmail: this.state.breweryemail,
        breweryAddress: this.state.breweryaddress}
        if(this.state.password === this.state.confirmPassword){
            axios.post(baseUrl + "/register", data)
            if (this.state.brewer) {
            axios.post(baseUrl + "/addbrewery", breweryData)
            }
            alert("Account created successfully, please log in.")
            window.location.href = '/login'
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
                <span> Are you a beer brewer? </span>
                    <input type="checkbox" onChange={this.isBrewer}/>
                </div>
                {this.state.brewer  &&
                    <div className="brewer-form">
                        <input
                            type="text"
                            id="breweryname"
                            name="breweryname"
                            class="form-control"
                            placeholder="Brewery Name"
                            v-model="brewery.breweryname"
                            onChange={this.handleInputChange}
                            required
                        />
                        <input
                            type="text"
                            id="brewerywebsite"
                            name="brewerywebsite"
                            class="form-control"
                            placeholder="Brewery website URL"
                            v-model="brewery.brewerywebsite"
                            onChange={this.handleInputChange}
                            required
                        />
                        <input
                            type="text"
                            id="breweryphone"
                            name="breweryphone"
                            class="form-control"
                            placeholder="Contact phone number"
                            v-model="brewery.breweryphone"
                            onChange={this.handleInputChange}
                            required
                        />
                        <input
                            type="text"
                            id="breweryemail"
                            name="breweryemail"
                            class="form-control"
                            placeholder="Contact E-mail"
                            v-model="brewery.breweryemail"
                            onChange={this.handleInputChange}
                            required
                        />
                        <input
                            type="text"
                            id="breweryaddress"
                            name="breweryaddress"
                            class="form-control"
                            placeholder="Mailing Address"
                            v-model="brewery.breweryimg"
                            onChange={this.handleInputChange}
                            required
                        />
                    
                        <p>Once submitted, brewery information will be verified and a pending account created. Further details may be updated after account approval.</p>
                    </div>
    }
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
                <div className="avatarContainer">
                Choose an Avatar color:   
                        <select onChange={this.handleInputChange} id="avatarColor" name="avatarColor" className='avatarSelect'>
                        <option value="./Images/beeravatars/pinkavatar.png">Pink</option>
                        <option value="./Images/beeravatars/redavatar.png">Red</option>
                        <option value="./Images/beeravatars/orangeavatar.png">Orange</option>
                        <option value="./Images/beeravatars/yellowavatar.png">Yellow</option>
                        <option value="./Images/beeravatars/greenavatar.png">Green</option>
                        <option value="./Images/beeravatars/blueavatar.png">Blue</option>
                        <option value="./Images/beeravatars/purpleavatar.png">Purple</option>
                        <option value="./Images/beeravatars/blackavatar.png">Black</option>
                        <option value="./Images/beeravatars/whiteavatar.png">White</option>
                        </select>
                </div>
                <div><button type="submit" className="registerButton" onClick={this.handleSubmit} disabled={!this.state.over21}>Let's make a TOAST!</button></div>
                <sp/>
                <div className='alreadyReg'>
                <Link className="alreadyReg" to="/login">I already have an account!</Link>
                </div>
            </div>
            </div>
        )
    }
}

export default Register;