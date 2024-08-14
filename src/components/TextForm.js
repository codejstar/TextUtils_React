import React, { useState } from 'react'

const TextForm = ({heading,mode,showAlert}) => {
   const [text, setText] = useState("")

   const upperCase = () => {
        setText(text.toUpperCase());
        showAlert("Text Converted into upper Case", "success");
   }

   const lowerCase = () => {
        setText(text.toLowerCase());
        showAlert("Text Converted into Lower Case", "success");
   }

   const handleCleartext = () => {
        setText("");
        showAlert("Text is clear", "success");
   }

   const handleCopy = () => {
     var text = document.getElementById("exampleFormControlTextarea1");
     text.select();
    // text.setSelectionRange(0,9999);
     navigator.clipboard.writeText(text.value)
     showAlert("Copied to  clipboard", "success");
   }

   const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    showAlert("Remove Extra spaces", "success");
   }

  return (
   <>
   <div className="container"   style={{color : mode === 'dark'?'white':'black'}}>
    <h1>{heading}</h1>
  <div className="mb-3">
    <textarea
      className="form-control"
      id="exampleFormControlTextarea1"
      rows={8}
      value={text}
      style={{backgroundColor: mode === 'dark'?'gray':'white', color: mode === 'light'?'black':'white'}}
      placeholder='Enter Text here...'
      onChange={(e) => setText(e.target.value)}
    />
  </div>
  <button className="btn btn-primary mx-2" onClick={() => upperCase()}>Convert to Uppercase</button>
  <button className="btn btn-primary mx-2" onClick={() => lowerCase()}>Convert to Lowercase</button>
  <button className="btn btn-primary mx-2" onClick={() => handleCleartext()}>Clear Text</button>
  <button className="btn btn-primary mx-2" onClick={() => handleCopy()}>Copy Text</button>
  <button className="btn btn-primary mx-2" onClick={() => handleExtraSpaces()}>Remove Extra Spaces</button>
  </div>

  <div className="container my-2" style={{color : mode === 'dark'?'white':'black'}}>
     <h1>Your text summary</h1>
     <p>{text.split(" ").length} words, {text.length} characters</p>
     <p>{0.008 * text.split(" ").length} Minutes read.</p>
     <h2>Preview</h2>
     <p>{text.length>0?text:"Enter something in text area to preview it ....."}</p>
  </div>
</>
  )
}

export default TextForm