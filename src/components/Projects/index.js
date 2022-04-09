import React from "react";
import PhotoList from "../PhotoList";
import { capitalizeFirstLetter } from "../../utils/helpers";
import image0 from "../../assets/small/projects/0.png";
import image1 from "../../assets/small/projects/1.gif";
import image2 from "../../assets/small/projects/2.gif";
import image3 from "../../assets/small/projects/3.gif";
import image4 from "../../assets/small/projects/4.gif";

function Projects(props) {
  const { currentCategory } = props;
  return (
    <>
      <>
        <>
          <section class="card">
            <h1>Fast n Furious Garage</h1>
            <a href="https://fast-n-furious.herokuapp.com/">
              {" "}
              <img
                src={image0}
                alt="fastnfurious"
                className="projectImg"
              />{" "}
            </a>
            <p>
              <a href="https://fast-n-furious.herokuapp.com/">
                Fast n Furious Garage
              </a>
            </p>
          </section>
          <section class="runBuddySection card">
            <h1>Travel Optimizer</h1>
            <a href="https://maryjezek.github.io/travel-optimizer/">
              {" "}
              <img src={image1} alt="optimizer" class="runBuddy" />{" "}
            </a>
            <p>
              <a href="https://maryjezek.github.io/travel-optimizer/">
                Travel Optimizer
              </a>
            </p>
          </section>
        </>
        <section class="card">
          <h1>Weather Dashboard</h1>
          <a href="https://maryjezek.github.io/weather_dashboard/">
            {" "}
            <img src={image2} alt="Weather" class="projectImg" />{" "}
          </a>
          <p>
            <a href="https://maryjezek.github.io/weather_dashboard/">
              Weather Dashboard
            </a>
          </p>
        </section>
      </>
      <section class="card">
        <h1>Password Generator</h1>
        <a href="https://maryjezek.github.io/password_generator/">
          {" "}
          <img src={image3} alt="Password generator" class="projectImg" />{" "}
        </a>
        <p>
          <a href="https://maryjezek.github.io/password_generator/">
            Password Generator
          </a>
        </p>
      </section>
      <section class="card">
        <h1>JavaScript Coding Quiz</h1>
        <a href="https://maryjezek.github.io/Code_Quiz/">
          {" "}
          <img src={image4} alt="JavaScript Quiz" class="projectImg" />{" "}
        </a>
        <p>
          <a href="https://maryjezek.github.io/Code_Quiz/">
            JavaScript Coding Quiz
          </a>
        </p>
      </section>
    </>
  );
}
export default Projects;
