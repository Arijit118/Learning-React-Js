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
const handleSenClick = () =>{
  // Split the paragraph into individual sentences using periods as the delimiter.
  let sentences = text.split('. ');

  // Iterate through each sentence and convert it to sentence case.
  for (let i = 0; i < sentences.length; i++) {
    let sentence = sentences[i];
    sentences[i] = sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase();
  }

  // Rejoin the sentences into a paragraph.
  var sentenceCaseParagraph = sentences.join('. ');

  // Set text
  setText(sentenceCaseParagraph);
}
const handleClrClick = () =>{
    //console.log("Upper case clicked");
    let newText = '';
    setText(newText);
}
const handleCapClick = ()=>{
    let Words = text.split(' ');
    for(let i=0; i<Words.length; i++){
        let word = Words[i];
        Words[i] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
    let wordInParagraph = Words.join(' ');
    setText(wordInParagraph);
}
const handleCtcClick = ()=>{
    let text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    alert("Your text is copied successfully. ")
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
        <button className="btn btn-success mx-2" onClick={handleUpClick}>Upper case</button>
        <button className="btn btn-success mx-2" onClick={handleLowClick}>Lower case</button>
        <button className="btn btn-success mx-2" onClick={handleSenClick}>Sentence case</button>
        <button className="btn btn-success mx-2" onClick={handleCapClick}>Capitalized case</button>
        <button className="btn btn-success mx-2" onClick={handleCtcClick}>Copy to Clipboard</button>
        <button className="btn btn-success mx-2" onClick={handleClrClick}>Clear</button>

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
