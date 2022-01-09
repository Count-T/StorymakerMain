import React from "react";
import imagee from "./storymakerlogo.png";
import "../App.css";
function Home() {
  return (
    <div>
      <h2 className="homecomponent">
        <div className="truck">
          Use StoryMaker to make an awesome story with your friends!😂
          <br />
          Click on "Story Maker" on the top left corner to begin your story!
        </div>
      </h2>
      <img className="imagee" src={imagee} alt="" />
    </div>
  );
}

export default Home;
