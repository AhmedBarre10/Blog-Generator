import React from "react";
import axios from "axios";
import {
  Link,
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";
import {
  gsap,
  Elastic,
  Bounce,
  TimelineMax,
  TimelineLite,
  Back,
  ScrollTrigger,
  Draggable,
  MotionPathPlugin,
} from "gsap/all";
import { Power3 } from "gsap";
import background from "./img/login-background.png";
class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      credentials: {
        email: "",
        password: "",
      },
    };
  }
  componentDidMount() {
    let tl = new TimelineLite();

    const triangle = document.querySelector(".triangletwo");
    const paro = document.querySelector(".paro");
    tl.from(triangle, 2, { y: 1200, ease: Elastic.easeInOut }, 0.1).fromTo(
      paro,
      { css: { position: "absolute", borderRadius: "15%", opacity: 0 } },
      {
        css: {
          position: "absolute",
          borderRadius: "5%",
          background: "white",
          opacity: "1",
          width: "2px",
          height: "70px",
          left: "28%",
          top: "-20px",
        },
        duration: 3,
        ease: Elastic.easeInOut,
      },
      0.1
    );
  }
  handleChange = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value,
      },
    });
    console.log(this.state.credentials);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ ...this.state, isLoading: true });

    axios
      .post("http://localhost:5000/auth", this.state.credentials)
      .then((res) => {
        // Give localStorage the token
        const token = res.data.payload;
        window.localStorage.setItem("token", res.data.token);
        console.log(window.localStorage.getItem("token"));
        this.setState({ ...this.state, isLoading: false });
        // Send logged in user to protected page
        this.props.history.push("/generator");
      })
      .catch((err) => {
        console.log(err);
        alert("Unable to sign in");
        this.setState({ ...this.state, isLoading: false });
      });
  };

  render() {
    return (
      <div className="LoginPage">
        <div className="LoginCont">
          <div className="login-hero">
            <div className="lightning-conttwo">
              <div className="triangletwo"></div>
              <div className="paro"></div>
            </div>
            <h1> INST NT</h1>
          </div>
          <div className="form">
            <h2>Login Page</h2>
            <form onSubmit={this.handleSubmit}>
              <input
                name="email"
                placeholder="email"
                onChange={this.handleChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.handleChange}
              />
              <button>Login</button>
            </form>
            {this.state.isLoading && (
              <div>
                <h3>Logging in</h3>
              </div>
            )}
            <Link className="signuplink" to="/Signup">
              Dont Have A Account{" "}
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
