import React from "react";
import { image } from "../data/data";

function About() {
  return <div><h2>About Me</h2>
  <p>
    I am passionate about building user-friendly, accessible, and
    performant web applications. I love learning new technologies and
    solving complex problems.
  </p>
  <img src={image} alt="I made this" /></div>;
}

export default About;
