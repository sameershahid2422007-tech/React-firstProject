import React, {useState} from 'react';



export default function TextForm(props) {

  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleDownClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleResertClick = ()=>{
    let newText = "";
    setText(newText)
  }
  const handleSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }
  const handleCopyClick = ()=>{
    let text = document.getElementById("myBox")
    text.select();
    navigator.clipboard.writeText(text.value)
  }

  // if we use target use (event)
  const handleOnChange = (event)=>{
    // for to write text in t/a because value is {text}
    setText(event.target.value);
  }

  // text is a variable and first default value useState('Enter text here') in future i update its value by this setText function.
  const [text, setText] = useState('');


  return (
    <>
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="8" onChange={handleOnChange} value={text}></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleDownClick}>Convert Lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handleResertClick}>Reset Text</button>
      <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy Text</button>
      <button className="btn btn-primary mx-1" onClick={handleSpaces}>Remove Spaces</button>
    </div>

    <div className="container my-3">
      <h3>Your text summary</h3>

      {/* use "space" */}
      <p>{text.split(" ").length} words {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}
