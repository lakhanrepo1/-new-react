import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    // console.log("Uppercase was clicked :" + newText);
    props.showAlert("Text has been converted to uppercase", "success");
  };
  const handleLoClick = () => {
    let text1 = text.toLowerCase();
    setText(text1);
    // console.log("Lowercase was clicked :" + text1);
    props.showAlert("Text has been converted to lowercase", "success");
  };
  const handleCopy=()=>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);  
    props.showAlert("Text has been copied to clipboard", "success");
  }
  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces has been removed", "success");
  }
  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };
  const handleClear = () => {
    console.log("Text Cleared was clicked :");
    setText("");
    props.showAlert("Text has been cleared", "success");
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading} </h1>
        <div className="mb-3">
          {/* <label htmlFor="myBox" className="form-label">Example textarea</label> */}
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="7"
            // style={{backgroundColor: props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary me-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary me-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
         <button className="btn btn-primary me-2" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
          <button className="btn btn-primary me-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-danger me-2" onClick={handleClear}>
          Clear Text
        </button>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here"}
        </p>
      </div>
    </>
  );
}
