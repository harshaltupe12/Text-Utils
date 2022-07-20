// import  from "react";
import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Upper Case", "success")
    }
    const handleOnChange = (event) => {  
        setText(event.target.value)
    }

    const handleloClick = () => {
        let newText = text.toLocaleLowerCase();
        setText(newText)
        props.showAlert("Converted to Lower Case", "success")

    }

    const ClearText = () =>{
        let newText = " ";
        setText(newText) 
        props.showAlert("Text has been Clear", "success")

    }

    const handleCopy = () =>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copy to Clipboard", "success")

    }

    
    const [text, setText] = useState("");
  return (

    <>
    <div className="mb-3 ">
        <h1 className={`my-3 d-flex justify-content-between text-${props.mode === 'light' ? 'dark' : 'light'}`}>{props.heading}</h1>
      
        <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="10" style={{backgroundColor : props.mode === 'light' ? 'white' : '#8794a1', color : props.mode === 'light' ? 'black' : 'white'}}></textarea>
       
    </div>
    <div className="btn btn-primary" onClick={handleUpClick} >Click to Conver Upprer Case</div>
    <br />
    <div className="btn btn-primary mt-3" onClick={handleloClick} style={{border:'solid 1px orange'}}>Click to Conver Lower Case</div>
    <br />
    <div className="btn btn-primary mt-3" onClick={ClearText} style={{border:'solid 1px orange'}}>Click to Clear</div>
    <br />
    <div className="btn btn-primary mt-3" onClick={handleCopy}>Clcik To Copy</div>

    


    <div className="container">
        <h1 className={`mt-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>Text Summary</h1>
        <hr className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}/>
        <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>String Contain {text.split(" ").length} word's and {text.length} characters</p>
        <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{0.008 * text.split(" ").length} Minutes to read</p>
        <hr className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}/>
        <h1 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>Preview</h1>
        <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            {text.length>0?text : "Enter Some Text To Preview it"}</p>
    </div>
     </>
  );
}
