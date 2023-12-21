import React, { useState } from 'react';


export default function About() { 

    //======  0  ======  
    // In CSS, u write as 'background-color'
    // let myStyle = {
    //     color: 'black',
    //     background: 'white'
    // }

    //======  1 ====== 
    // In react, u write in CamelCase..
    // let myStyle = {
    //     color: 'black',
    //     backgroundColor: 'white'
    // }
    
    //======  2  ====== 
    // const [myStyle, setMyStyle]= useState(intialState)


    //======  3  ====== 
    // Making above style into a 'State var' 
    //     and also, import useState from react..
    //  Initial State..
    const [myStyle, setMyStyle] = useState( {
        color: 'black',
        background: 'white'
    }) 
    
    // ====  Using buttons text as a "State" ====
    const [btntext, setBtnText] = useState("Enable Dark Mode");
    

    //==== Convert light to dark and Vice Versa ====
    const toggleStyle = () => {
        if(myStyle.color === 'black') 
        // Make 1 obj using setMyStyle & 
        // INVERT useState obj..
        {
            setMyStyle({
                color: 'white',
                background: 'black',
                border: '1px solid white'
            })
            setBtnText("Enable Light Mode")
        }
        else{
            setMyStyle({
                color: 'black',
                background: 'white'
            })
            setBtnText("Enable Dark Mode")
        }
    }


    
    return (
        
        <div className="container m-p p-4" style={myStyle}>
            {/*  myStyle acts like an Obj..           */}
            <h2 className='my-2 p-2'>About Us</h2>
            <div className="accordion" id="accordionExample" >

                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button"  type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>This is the first item's accordion body.
                                </strong> I
                                t is shown by default, until the collapse plugin adds the appropriate 
                                classes that we use to style each element.
                                These classes control the overall appearance, as well as the showing 
                                and hiding via CSS transitions. You can modify any of this with custom CSS 
                                or overriding our default variables. It's also worth noting that just about 
                                any HTML can go within the <code>.accordion-body</code>, 
                                though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle} >
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item"  style={myStyle}>
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>This is the third item's accordion body.</strong> 
                            It is hidden by default, until the collapse plugin adds the appropriate classes 
                            that we use to style each element. These classes control the overall appearance, 
                            as well as the showing and hiding via CSS transitions. 
                            You can modify any of this with custom CSS or overriding our default variables. 
                            It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, 
                            though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
             
            <div className="container my-5 " >
            {/* "toggleStyle" - will convert light to dark 
                and Dark to Light */}
                
                <button onClick={toggleStyle} type="button" 
                    className="btn btn-info">
                    {btntext} 
                </button>
            </div>
            
        </div>


    )
}
