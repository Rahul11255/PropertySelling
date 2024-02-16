import React from "react";
import "./neighborhood.css";

const Neighborhood = () => {
  return (
    <div className="neighborhood">
      <div className="neighborhood_caontianer">
        <div className="neighborhood_forms">
          <div>
          <h1 className="neighborhood_h1">NEIGHBORHOOD IN YOUR AREA IS WONDERFUL</h1>
          <p className="neighborhood_p" >TOUCH OF PERFECTION</p>
           <hr />
            <details>
              <summary>resturants</summary>
               <p className="summary_p">
                Epcot is a theme park at Walt Disney World Resort featuring
                exciting attractions, international pavilions, award-winning
                fireworks and seasonal special events.
              </p>
            </details>
          <hr />
            <details>
              <summary>school</summary>
               <p className="summary_p">
                Epcot is a theme park at Walt Disney World Resort featuring
                exciting attractions, international pavilions, award-winning
                fireworks and seasonal special events.
              </p>
            </details>
          <hr />
            <details>
              <summary>shopping mall</summary>
               <p className="summary_p">
                Epcot is a theme park at Walt Disney World Resort featuring
                exciting attractions, international pavilions, award-winning
                fireworks and seasonal special events.
              </p>
            </details>
            <hr />
            <details>
              <summary>hospital</summary>
               <p className="summary_p">
                Epcot is a theme park at Walt Disney World Resort featuring
                exciting attractions, international pavilions, award-winning
                fireworks and seasonal special events.
              </p>
            </details>
            <hr />
          </div>
        </div>
        <div className="neighborhood_images"></div>
      </div>
    </div>
  );
};

export default Neighborhood;
