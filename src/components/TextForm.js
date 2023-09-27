import React, {useState} from 'react'

export default function TextForm(props) {
const handleUpClick = () =>{
    //console.log("Upper case clicked");
    let newText = text.toUpperCase();
    setText(newText);
}
const handleLowClick = () =>{
    //console.log("Upper case clicked");
    let newText = text.toLowerCase();
    setText(newText);
}
const handleOnChange = (event) =>{
    //console.log("onchange");
    setText(event.target.value);
}
const [text, setText] = useState('Enter your text');
  return (
    <>
    <div className='container'>
        <h1>{props.headline}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="myBox" onChange={handleOnChange} value={text} rows="8"></textarea>
        </div>
        <button className="btn btn-success mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-success mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
    </div>
    <div className='container mt-5'>
        <h1>Your text summary</h1>
        <p>{(text !== '') ? text.split(' ').length : 0} Words, {text.length} characters.</p>
        <p>Needs {0.008 * text.split(' ').length} minutes to read.</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
