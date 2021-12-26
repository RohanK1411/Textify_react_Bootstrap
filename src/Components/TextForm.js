import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');    
    // text = "sdfjl" // Wrong way to set the text to the state
    // setText = ("sdkfs") // Correct way to set the text to state
    const handleUpClick = () =>{
        // console.log("UpperClick Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleDownClick = () =>{
        let lowercase = text.toLowerCase();
        setText(lowercase);
    }

    const handleOnChange = (event) =>{
        // console.log("Uppercase was clicked");
        setText(event.target.value);
    }

    const handleclearClick = () => {
        setText("");
    }
    
    
    return (
        <>
        <div className="mt-5">
            <h1>{props.header}</h1>
            <div className="mb-3">
           <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <div className="w-100 d-flex justify-content-center">
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-3" onClick={handleDownClick}>Convert to LowerCase</button>
            <button className="btn btn-primary" onClick={handleclearClick}>Reset</button>
            </div>
        </div>
        <div className="container my-3">
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} Words {text.length} Character</p>
            <p>{0.008 * text.split(" ").length} Minutes Time</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
        </>
    )
}
