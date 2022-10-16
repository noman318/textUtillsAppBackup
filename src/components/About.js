// import { useState } from "react"
import React from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color:'#272323',
    //     backgroundColor: 'white'
    // })

    let myStyle={
        color: props.mode === 'dark'?'white':'#0e0f0f',
        backgroundColor: props.mode=== 'dark'?'#0e0f0f': 'white'
    }

  return (
    <div className='container' style={myStyle}>
        <h2 className='my-3'>About Us</h2>
        <div className="accordion" id="accordionExample" style={myStyle}>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne" style={{backgroundColor: props.mode=== 'dark'?'rgb(32 38 38)': 'white'}}>
                <button className="accordion-button" style={{backgroundColor: props.mode=== 'dark'?'rgb(32 38 38)': 'white', color: props.mode === 'dark'?'white':'#0e0f0f',}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Analyze your Text</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={{backgroundColor: props.mode=== 'dark'?'rgb(32 38 38)': 'white', color: props.mode === 'dark'?'white':'#0e0f0f',}}>
                    <h6>Textutils gives you a way to analyze your text quickly and efficiently. Be it a word count, character and many more.</h6>
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" style={{backgroundColor: props.mode=== 'dark'?'rgb(32 38 38)': 'white', color: props.mode === 'dark'?'white':'#0e0f0f',}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free to Use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={{backgroundColor: props.mode=== 'dark'?'rgb(32 38 38)': 'white', color: props.mode === 'dark'?'white':'#0e0f0f',}}>
                    <h6>TextUtills is a free charcter counter tool that provides instant character count & word count statistics for a given text. Textutills reports the number of words and characters. Thus it is siutable for writing text with word/ character limit</h6>
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" style={{backgroundColor: props.mode=== 'dark'?'rgb(32 38 38)': 'white', color: props.mode === 'dark'?'white':'#0e0f0f',}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser Compatible</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={{backgroundColor: props.mode=== 'dark'?'rgb(32 38 38)': 'white', color: props.mode === 'dark'?'white':'#0e0f0f',}}>
                    <h6>This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count charactres in facebook, blog, books, excel sheets, word documents, PDF documents, essays, etc </h6>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
