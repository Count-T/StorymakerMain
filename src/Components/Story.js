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
      <h1>Story Maker</h1>
      <form onSubmit={updateStory}>
        <input type="text" onChange={handleChange} />
        <button>Enter Word</button>
      </form>
      <h2>{story}</h2>
      <button onClick={playTTS}>Text to Speech</button>
      <button>Text to Speech Download</button>
    </div>
  );
}

export default Story;
