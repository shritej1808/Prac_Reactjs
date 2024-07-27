import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

export default function Textform(props) {
  const [text, SetText] = useState("Enter the text");
  const [frequency, setFrequency] = useState({});
  const HandleOnChange = (event) => {
    SetText(event.target.value);
    console.log("Changed to:" + event.target.value);
    props.showAlert("Changed text", "success");
  };
  const OnClickHandle = () => {
    SetText(text.toUpperCase());
    console.log("Text " + text.toUpperCase());
    props.showAlert("Text Converted to Uppercase", "success");
  };
  const OnClickLoHandle = () => {
    SetText(text.toLowerCase());
    console.log("Text is:" + text.toLowerCase());
    props.showAlert("Text Converted to Lowercase", "success");
  };
  const OnClickFrequency = () => {
    const charArray = text.split("");
    const frequencyarray = charArray.reduce((acc, char) => {
      acc[char] = (acc[char] || 0) + 1;
      return acc;
    }, {});
    setFrequency(frequencyarray);
    props.showAlert("Frequency Calculated", "success");
  };

  return (
    <div
      className="container my-5 mx-5 "
      style={{ color: props.mode === "light" ? "black" : "white" }}
    >
      <h1>{props.heading}</h1>
      <div className="container my-2">
        <textarea
          type="text"
          className="mybox "
          id="mybox"
          value={text}
          onChange={HandleOnChange}
          rows={5}
          cols={100}
          style={{
            backgroundColor: props.mode === "dark" ? "black" : "white",
            color: props.mode === "light" ? "black" : "white",
          }}
        />
      </div>{" "}
      <button className="btn btn-outline-primary mx-3" onClick={OnClickHandle}>
        Convert to upper case
      </button>
      <button
        className="btn btn-outline-primary mx-3"
        onClick={OnClickLoHandle}
      >
        Convert to Lower case
      </button>
      <button className="btn btn-outline-primary" onClick={OnClickFrequency}>
        Find Frequeny of words
      </button>
      <div className="container my-3">
        <h1>Text Summary</h1>
        <p>
          <b>{text.split(/\s+/).filter(Boolean).length}</b> words {text.length}{" "}
          characters
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
        <div className="container my-3">
          <h2>Frequency</h2>
          <ul>
            {Object.entries(frequency).map(([char, count]) => (
              <li key={char}>
                {char}:{count}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

Textform.propTypes = {
  heading: PropTypes.string.isRequired,
};
