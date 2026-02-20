import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked :");
        setText(text.toUpperCase());
    }
    const handleLoClick=()=>{
        console.log("Lowercase was clicked :");
        setText(text.toLowerCase());
    }
      const handleOnChange = (event)=>{
           console.log("On Change" );
              setText(event.target.value);
      }
      const handleClear = ()=>{
        console.log("Text Cleared was clicked :" + text);
        setText("");
    }
  const [text, setText] = useState("");
return (
    <>
    <div>
            <h1>{props.heading} </h1>
                    <div className="mb-3">
                            {/* <label htmlFor="myBox" className="form-label">Example textarea</label> */}
                            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="7"></textarea>
    </div>
         <button className="btn btn-primary me-2" onClick={handleUpClick}>Convert to Uppercase</button>
         <button className="btn btn-primary me-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-danger me-2" onClick={handleClear}>Clear Text</button>
   
    </div>
    <div className="container">
            <h2>Your text summary   
            </h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
                    <p>{0.008 * text.split(" ").length} Minutes read</p>
                    <h2>Preview</h2>
                    <p>{text}</p>
    </div>

    </>
)
}
