import React, { useState } from 'react'

// useState is a HOOK !
// import { useState } from "react";


export default function Textform(props) {
    
    // Declare a new state variable, which we'll call "text" which  will be the updated using the funtion setText
    const [text, setText] = useState("");
    // so wherever text is used and updated it'll work without page reloading
    // const [text, setText] = useState();
    
    // text = "new text"; /* wrong way to change state */
    // setText = {"new text"}; /* correct way */
    
    const handleUpperCaseClick = ()=>{
        // console.log("Uppercase" + text); //using text will also print what is typed in Textform
        let newText = text.toUpperCase();
        // setText("You've clicked on handleUpperCaseClick") /* this is to change the state */
        setText(newText)
        props.showAlert("Converted to Uppercase", "success")
    }
    const handleLowerCaseClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase", "success")
    }
    const handleClearTextClick = ()=>{
        let newText = "";
        setText(newText)
    }
    
    const handleOnChange = (event)=>{
        // console.log("Onchange");
        setText(event.target.value); //helps for typing input, also onChange funt will be fired for every character entry
        //means making the the value={text} to whatever is typed 
        //setting the default text value to the new setText.
    }
    
    const handleCopy = ()=>{
        var text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value) 
        props.showAlert("Copied to clipboard", "success")
    }
    
    const handleExtraSpace = ()=>{
        // using regex
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Handed extra spaces", "success")
    }

    return (
        <>
        <div className="container" style={{color:props.mode === "dark" ? "white":"black"}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === "dark" ? "#203c59":"white", color: props.mode === "dark" ? "white":"black"}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpperCaseClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowerCaseClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearTextClick}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove extra spaces</button>
        </div>
        
        <div className="container my-3" style={{color: props.mode === "dark" ? "white":"black"}}>

            <h2>Your text summary</h2>

            <p> {text.split(" ").length} words and {text.length} characters.</p>
            {/* text.split(" ").length will return an array of words by splitting by identifying space inbetween them and return the length of that array */}

            <p> {0.008 * text.split(" ").length} Minutes read.</p>
            {/* means 1 word on average takes 0.008 mins(found data from google) so how much willl be taken so total no. of typed words */}

            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
