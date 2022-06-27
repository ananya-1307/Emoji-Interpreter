import React, { useState } from "react";
import "./styles.css";

var emojiDict = {
  "😘": "Kissing",
  "😒": "Annoyance",
  "😊": "Blusing",
  "😂": "Laughing",
  "😎": "Smarty",
  "😭": "Crying",
  "🙂": "Smiling"
};
var emojiesWeKnow = Object.keys(emojiDict);
export default function App() {
  var [mean, setmean] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDict[userInput];
    if (meaning === undefined) {
      meaning = "Opps!! we don't have this in our database";
    }
    setmean(meaning);
    console.log(meaning);
  }
  function clickHandler(emoji) {
    var meaning = emojiDict[emoji];
    setmean(meaning);
    console.log(emoji);
  }

  return (
    <div className="App">
      <h1>welcome </h1>
      <input onChange={emojiInputHandler}></input>
      <h2>It means {mean}</h2>
      <h3> Emojis we know</h3>
      {emojiesWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => clickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem" }}
            key={emoji}
          >
            {" "}
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
