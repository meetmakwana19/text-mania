import React from 'react'
// import React, { useState } from 'react'

export default function About(props) {

    // making an object for styling(CSS) and then pass it in elements.
    let myStyle = {
        // if props mode is dark mode then make color=white otherwise at light mode it black
        color: props.mode === 'dark' ? 'white' : 'black',
        // getting props.mode over here, so also add a mode property mode={mode} in the <About/> component in App.js
        backgroundColor: props.mode === 'dark' ? "#346393" : "white",
        // border: "2px solid",
        // borderColor: props.mode === 'dark'?'white':'black',
        // borderRadius: "10px"
    }

    // DONT NEED THE FOLLOWING SO COMMENTED IT

    // let myStyle={
    //     color: "white",
    //     backgroundColor: "black"
    // }
    // const [myStyle, setmyStyle] = useState({
    //     color: "black",
    //     backgroundColor: "white"
    // })

    // const [btnText, setbtnText] = useState("Enable Dark Mode")

    // const toggleStyle = ()=>{
    //     // if it is light mode
    //     if(myStyle.color === "black"){
    //         // then make it dark
    //         setmyStyle({
    //             color: "white",
    //             backgroundColor: "black",
    //             border: "1px solid white"
    //         })
    //         setbtnText("Enable Light Mode")
    //     }
    //     else{
    //         setmyStyle({
    //             color: "black",
    //             backgroundColor: "white"
    //         })
    //         setbtnText("Enable Dark Mode")
    //     }
    // }

    return (
        <div className="container">
            <h1 className="my-2" style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >About Us</h1>
            <div className="accordion" id="accordionExample" width="100%">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyze your text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong></strong> Text-Mania gives you a way to analyze your text quickly and efficiently. Be it a word count, character count, upper/lower case conversions, removal of extra spaces for free !
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            Text-Mania is a free character counter tool that provides instant character count & word count statistics for a given text. TextMania reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
                        </div>
                    </div>
                </div>
            </div>
            {/* <button type="button" className="btn btn-primary my-3" onClick={toggleStyle}>{btnText}</button> */}
        </div>
    )
}
