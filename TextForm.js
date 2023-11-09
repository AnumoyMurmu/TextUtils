import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const removeSpace = () => {
    console.log("Space removed" + text);
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const handleLoClick = () => {
    console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  const reverseClick = () => {
    console.log("Clicked on reverse" + text);
    let newText = text.split("").reverse().join("");
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("OnChange");
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter text here bro");
  //   setText("Enter the text");

  const [myStyle, setmyStyle] = useState({
    color: "white",
    backgroundColor: "black",
  });

  const [btntext, setbtentext] = useState("Enable Light Mode");

  const toggleStyle = () => {
    if (myStyle.color == "white") {
      setmyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setbtentext("Enable Dark Mode");
    } else {
      setmyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setbtentext("Enable Light Mode");
    }
  };

  return (
    <>
      <div className="container" style={{backgroundColor: props.mode === 'dark'?'white':'black'}}>
        <div className="mb-3" style={myStyle}>
          <label htmlFor="exampleFormControlTextarea1" style={myStyle}>
            {props.title}
          </label>
          <textarea
          style={{backgroundColor: props.mode === 'dark'?'grey':'white'}}
            className="form-control"
            value={text}
            id="exampleFormControlTextarea1"
            rows="8"
            onChange={handleOnChange}
            // style={myStyle}
          ></textarea>
        </div>

        <div style={{ display: "flex", justifyContent: "center", myStyle }}>
          <button
            className="btn btn-primary mx-1"
            onClick={handleUpClick}
            style={myStyle}
          >
            Convert to Uppercase
          </button>
          <button
            className="btn btn-primary mx-1"
            onClick={handleLoClick}
            style={myStyle}
          >
            Convert to Lowercase
          </button>
          <button
            className="btn btn-primary mx-1"
            onClick={reverseClick}
            style={myStyle}
          >
            Reverse
          </button>
          <button
            className="btn btn-primary mx-1"
            onClick={removeSpace}
            style={myStyle}
          >
            Remove Space
          </button>
        </div>
      </div>

      <div className="container" style={myStyle}>
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} Words and {text.length} Chacraters
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>

      <div className="container my-3">
        <button
          onClick={toggleStyle}
          type="button"
          className="btn btn-primary"
          style={myStyle}
        >
          {btntext}
        </button>
      </div>

    </>
  );
}
