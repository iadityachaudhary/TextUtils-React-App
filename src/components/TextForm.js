import React , {useState} from 'react'

export default function TextForm(props) {
    const handleUPclick= ()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");
    }
    const handleLOclick= ()=>{
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to LowerCase","success");
  }
    const handleOnChange= (event)=>{
        setText(event.target.value);
    }
    const handleClear= ()=>{
      let newText='';
      setText(newText);
      props.showAlert("Text Cleared","success");
    }
    const handleTitleCase = () => {
      let newText = text.toLowerCase().split(' ');
      for (let i = 0; i < newText.length; i++) {
          newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1);
      }
      newText = newText.join(' ');
      setText(newText);
      props.showAlert("Converted to TitleCase","success");
  };  
    const [text , setText] = useState('Enter Text Here');
  return (
    <div>
        <h1 style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange}  style={{ backgroundColor:props.mode==='dark'?'grey':'white' , color:props.mode==='dark'?'white':'black'}}  id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUPclick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLOclick}>Convert to lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleTitleCase}>Convert to Title Case</button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>Clear Text</button>
        <div className="continer my-3" style={{color:props.mode==='dark'?'white':'black'}}>
          <h3>Your Text Summary</h3>
          <p>{text.split("").length} Words & {text.length} Characters</p>
        </div>
    </div>
  )
}
