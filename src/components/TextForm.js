import React,{useState} from 'react'

export default function TextForm(props) {


  const [text, setText] = useState('')
  const convertUpperCase=()=>{
    // console.log('UpperCase')
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert('CONVERTED TO UPPERCASE','success')
  }

  const convertLowerCase=()=>{
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert('converted to lowercase','success')
  }

  const clearText=()=>{
    let newText = '';
    setText(newText)
    props.showAlert('Text cleared','success')

  }

  const copyText=()=>{
    // let text= document.getElementById('myBox')
    // text.select()
    navigator.clipboard.writeText(text) 
    document.getSelection().removeAllRanges()
    props.showAlert('Copied to Clipboard','success')

  }

  const extraSpaces=()=>{
    let newText = text.split(/[ ]+/) 
    setText(newText.join(" "))
    props.showAlert('Removed extra spaces','success')
  }

  const onChange=(event)=>{
    // console.log('OnChange')
    setText(event.target.value)
  }
  return (
    <>
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2><b>{props.heading}</b></h2>
          <textarea className="form-control" value={text} onChange={onChange} style={{backgroundColor: props.mode=== 'dark'?'rgb(32 38 38)': 'white', color: props.mode === 'dark'?'white':'#0e0f0f'}} id="myBox" rows="8" placeholder='Enter Text'></textarea>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={convertUpperCase}>UPPERCASE</button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={convertLowerCase}>lowercase</button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-2 " onClick={clearText}>ClearText</button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={copyText}>CopyText</button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={extraSpaces}>RemoveSpace</button>
      </div>
      <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Text Summary</h2>
        <h6>{text.split(/\s/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</h6>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Nothing to preview'}</p>
      </div>
    </>
  )
}
