import React, {useState} from 'react';
import jsPDF from 'jspdf';


export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked + text");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase!", "success");
  }

  const handleLowClick = () => {
    console.log("Lowercase was clicked + text");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase!", "success");
  }

  const handleClear = () => {
    console.log("Clear");
    let newText = '';
    setText(newText);
    props.showAlert("All text cleared!", "success");
  }

  const exportButton = () => {
    const doc = new jsPDF();
    doc.text(text, 10, 10);
    doc.save('exported-text.pdf');
    props.showAlert("Text is exported to pdf file! Please download it", "success");
  }

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  }

  const handleCopy = () => {
    console.log("I am Copy");
    var text = document.getElementById("myBox");
    navigator.clipboard.writeText(text);
    alert("Text copied to clipboard!");
    navigator.clipboard.writeText(text);
    props.showAlert("Text is copied to clipboard", "success");
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces are removed!", "success");
  }
  const [text, setText] = useState('');
  // text = "new text"; //wrong way to change the state
  // setText("new text"); //correct way to change the state
  return (

    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
   <h1>{props.heading}</h1>
  <div className="mb-3">
    <label htmlFor="myBox" className="form-label">textarea</label>
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="9" style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'#042743'}}></textarea>
  </div>

  <button type="button" class="btn btn-primary btn-lg mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
  <button type="button" class="btn btn-primary btn-lg mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
  <button type="button" class="btn btn-primary btn-lg mx-1" onClick={handleClear}>Clear text</button>
  <button type="button" class="btn btn-primary btn-lg mx-1" onClick={exportButton}>Export to PDF</button>
  <button type="button" class="btn btn-primary btn-lg mx-1" onClick={handleCopy}>Copy Text</button>
  <button type="button" class="btn btn-primary btn-lg mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

    </div>

    <div className="container my-3 " style={{color: props.mode==='dark'?'white':'#042743' }}>
       <h2>Your text summary</h2>
       <p>{text.split(" ").length} words and {text.length} characters</p>
       <p>{0.0076923077 * text.split(" ").length} Minutes read</p>
       <h1>Preview</h1>
       <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </>

    
  )
}
