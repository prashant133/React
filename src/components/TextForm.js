import React, { useState } from "react";

export default function TextForm(props) {
  // initial state for text
  const [text, setText] = useState("Enter text here");

  //   function to change to the upper case
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text is converted to upper case", "success")
  };

  //   function to change to the lower case
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text is converted to lower case", "success");
  };

//   function to clear the textarea
const handleClearClick = ()=> {
    setText("");
    props.showAlert("Text is Cleard", "success");
}

  // funcation on handle the changes
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear the text
        </button>
      </div>

      <div className="container my-3">
        <h1>your text summary</h1>
        <p>
          {text.split(" ").length} words {text.length} characters
        </p>
        <p> {0.008 * text.split(" ").length} minute</p>
      </div>

      <div className="container">
        <h2> Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
