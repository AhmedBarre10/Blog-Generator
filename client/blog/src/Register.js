import React from "react"
import axios from "axios";
import {Link,BrowserRouter as Router,Route,Redirect} from "react-router-dom"

class Login extends React.Component {

    constructor() {
        super();
        this.state = {
            isLoading: false,
            credentials: {
                email: '',
                password: ''
            }
        }
    }

    handleChange = e => {
   		this.setState({credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value
        }});
        console.log(this.state.credentials);
    }

    handleSubmit = e => {
    	e.preventDefault();
        this.setState({...this.state, isLoading: true});

        axios.post('http://localhost:5000/users', this.state.credentials)
        .then(res => {
            // Give localStorage the token
            const token = res.data.payload
            window.localStorage.setItem('token', res.data.token);
            console.log(window.localStorage.getItem('token'))
            this.setState({...this.state, isLoading: false});
            // Send logged in user to protected page
            this.props.history.push('/generator');
        })
        .catch(err => {
            console.log(err);
            alert("Unable to sign in");
            this.setState({...this.state, isLoading: false});
        })

    }   

    render() {
        return (
            <div className="LoginPage">
                <h2>Login Page</h2>
                <form onSubmit={this.handleSubmit}>
                <input name="name" placeholder="Name" onChange={this.handleChange}/>

                    <input name="email" placeholder="email" onChange={this.handleChange}/>
                    <input type = "password"name="password" placeholder="Password" onChange={this.handleChange}/>
                    <button>Login</button>
                </form>
                {this.state.isLoading && <div><h3>Logging in</h3></div>}
                <Link to = "/Signup">Dont Have A Account </Link>
            </div>
        )
    }
}

export default Login