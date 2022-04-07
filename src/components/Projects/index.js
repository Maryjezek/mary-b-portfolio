import React from "react";
import PhotoList from "../PhotoList";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Projects(props) {
  const { currentCategory } = props;
  return (
    <><><section class="card">
      <h1>Fast n Furious Garage</h1>
      <a href="https://fast-n-furious.herokuapp.com/">
        {" "}
        <img
          src="./assets/small/projects/0.png"
          alt="fastnfurious"
          class="projectImg" />{" "}
      </a>
      <p>
        <a href="https://fast-n-furious.herokuapp.com/">
          Fast n Furious Garage
        </a>
      </p>
    </section><section class="runBuddySection card">
        <h1>Travel Optimizer</h1>
        <a href="https://maryjezek.github.io/travel-optimizer/"> <img src="./assets/small/projects/4.gif" alt="optimizer" class="runBuddy" /> </a>
        <p>
          <a href="https://maryjezek.github.io/travel-optimizer/">Travel Optimizer</a>
        </p>
      </section></><section class="card">
        <h1>Weather Dashboard</h1>
        <a href="https://maryjezek.github.io/weather_dashboard/"> <img src="./assets/small/projects/3.gif" alt="Weather" class="projectImg" /> </a>
        <p>
          <a href="https://maryjezek.github.io/weather_dashboard/">Weather Dashboard</a>
        </p>
      </section></>



      

  );
}
export default Projects;
