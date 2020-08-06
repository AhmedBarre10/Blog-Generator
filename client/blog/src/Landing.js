import React, { useEffect, useState, useRef } from "react";
import img from "./img/new.png";
import lightning from "./img/lightning.png";
import untitled from "./Untitled (7).svg";
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
import temlate from "./img/template1.png";
import { set } from "mongoose";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import hero from "./img/kakashi.png";
const Landing = () => {
  let tl = new TimelineLite();

  useEffect(() => {
    const triangle = document.querySelector(".triangle");
    const paro = document.querySelector(".paro");
    const light = document.querySelector(".fas.fa-bolt");
    const App = document.querySelector(".App");
    const body = document.querySelector("body");
    const instant = document.querySelector(".instant");
    const getStarted = document.querySelector(".getStarted");
    const hero = document.querySelector(".heroimage");

    tl.from(instant, 1, {
      css: { opacity: 0, top: "-251%" },
      ease: Elastic.easeInOut,
    })
      .from(hero, 2, { opacity: 0, ease: Power3.easeInOut }, 0.1)
      .from(
        getStarted,
        0.1,
        {
          css: { top: "-281%" },
          ease: Elastic.easeInOut,
        },
        0.1
      )
      .from(triangle, 2, { y: -1200, ease: Elastic.easeInOut }, 0.1)
      .fromTo(
        paro,
        { css: { position: "absolute", borderRadius: "15%", opacity: 0 } },
        {
          css: {
            position: "absolute",
            borderRadius: "5%",
            opacity: "1",
            width: "2px",
            height: "70px",
            left: "28%",
            top: "-20px",
          },
          duration: 4,
          ease: Elastic.easeInOut,
        },
        0.1
      );
  });

  return (
    <div>
      <div className="landing">
        <div className="landing-cont">
          <h1 className="instant">
            INST <span> NT </span>
          </h1>
          <div className="lightning-cont">
            <div className="triangle" />
            <div className="paro" />
          </div>
          <div className="introp">
            <p>
              {" "}
              Instant is a Blog Page Generator. Create a Blog Just Completing a
              Form.
            </p>
          </div>
          <div className="getStartedButton">
            <Link to="/login" className="getStarted">
              {" "}
              Get Started
            </Link>
          </div>
        </div>
        <div />
      </div>

      <img className="heroimage" src={hero} />
    </div>
  );
};

export default Landing;
