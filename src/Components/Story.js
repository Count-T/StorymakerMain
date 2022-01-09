import React from "react";
import { useState } from "react";
function Story() {
  const [story, setStory] = useState("");
  const [word, setWord] = useState("");
  const handleChange = (e) => {
    setWord(() => e.target.value);
  };
  const updateStory = (e) => {
    setStory(() => story + word + " ");
    setWord("");
    e.target.reset();
    e.preventDefault();
  };
  const playTTS = () => {
    const utterance = new SpeechSynthesisUtterance(story);
    speechSynthesis.speak(utterance);
  };
  return (
    <div>
      <div className="d-flex justify-content-center bg-dark ">
      
        <h1 className="text-light bg-dark">Story Maker</h1>
     </div>
     
      <div className="mx-auto px-5 d-flex justify-content-center bg-dark py-5">
        <form onSubmit={updateStory}>
          <input className="text-light bg-dark mx-auto px-3" type="text" onChange={handleChange} />
          <button className="text-light bg-dark ">Enter Word</button>
        </form>
      </div>

        <div className="d-flex justify-content-center bg-dark my-auto py-3">
          <button className="text-light bg-dark my-auto py-3" onClick={playTTS}>Text to Speech</button>
          
        </div>

        <p className="text-light bg-dark mx-auto px-3">{story}</p>
        
      
      
    </div>

    
  );
}

export default Story;
