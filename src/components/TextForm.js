import React, {useState} from 'react';
import jsPDF from 'jspdf';


export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked + text");
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLowClick = () => {
    console.log("Lowercase was clicked + text");
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleClear = () => {
    console.log("Clear");
    let newText = '';
    setText(newText);
  }

  const exportButton = () => {
    const doc = new jsPDF();
    doc.text(text, 10, 10);
    doc.save('exported-text.pdf');
  }

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  }
  const [text, setText] = useState('');
  // text = "new text"; //wrong way to change the state
  // setText("new text"); //correct way to change the state
  return (

    <>
    <div className='container'>
   <h1>{props.heading}</h1>
  <div className="mb-3">
    <label for="myBox" class="form-label">textarea</label>
    <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="9"></textarea>
  </div>

  <button type="button" class="btn btn-primary btn-lg mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
  <button type="button" class="btn btn-primary btn-lg mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
  <button type="button" class="btn btn-primary btn-lg mx-1" onClick={handleClear}>Clear text</button>
  <button type="button" class="btn btn-primary btn-lg mx-1" onClick={exportButton}>Export to PDF</button>

    </div>

    <div className="container my-3 my-3">
       <h2>Your text summary</h2>
       <p>{text.split(" ").length} words and {text.length} characters</p>
       <p>{0.0076923077 * text.split(" ").length} Minutes read</p>
       <h1>Preview</h1>
       <p>{text}</p>
    </div>
    </>

    
  )
}
