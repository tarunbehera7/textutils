//=====  useState is a Hook  =====
// Hooks - Let u use state and other React features
//         without writing a class.
import React, { useState } from 'react';

    // function  Example() {
    //   // Declare a new state variable,
    //   //    which we'll call "count"
    //   const [count, setCount] = useState(0);
    
    // return (
    //   <div> <p> You clicked {count} times </p>
    //     <button onClick= { () => setCount(count + 1)} >
    //       Click me
    //     </button>
    //   </div>
    // );
    // }s



export default function TextForm(props) {


    const handleUpClick = () => {
        console.log("Uppercase was clicked" + text);
        // setText("You have clicked on handleUpClick")
        let newText = text.toUpperCase();
        setText(newText);
        // setText("new Text"); // To change text.. 
        props.showAlert("Converted to Uppercase", "success");
    }

    const handleLoClick = () => {
        console.log(" Lowercase was clicked" + text);
        // setText("You have clicked on handleUpClick")
        let newText = text.toLowerCase();
        setText(newText);
        // setText("new Text"); // To change text.. 
        props.showAlert("Converted to Lowercase", "success");
    }

    // Whenever you're listening sum for any Event 
    //    like we are listening on onChange event..
    // At that time, Fn will run as when i make some changes
    //    and  We will get  1 "free Event Obj"..
    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
        // setInput(e.target.value); 
        //
        //// Suppose, user writes "T", then 
        ////   at the moment the value will be, 
        ////  the "text we had" +  "T"  
        //// then, we will be able to type in textArea now..
    }


    // const handleTitle = () => {
    //     console.log(" Lowercase was clicked" + text);
    //     // setText("You have clicked on handleUpClick")
    //     let newText = text.toLowerCase();
    //     setText(newText);
    //     // setText("new Text"); // To change text.. 
    // }


    // const toTitleCase = ( ) => {
    //     return text.replace( /\w\S*/g,
    //         function(text) {
    //           return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
    //         }
    //     );
    // }

    const handleReverse = () => {
        /* Convert string to array*/
        let strArr = text.split("");
        /* Reverse array*/
        strArr = strArr.reverse();
        /* Convert array to string*/
        let newText = strArr.join("");
        setText(newText);
        props.showAlert("Converted to Reverse", "success");
    };


    // =====  Vowels  =====
    const handleVoClick = () => {
        for( count = 0; count <= text.length; count++ ) {
            if(text.charAt(count).match(/[aeiouAEIOU]/) ) 
            // '/[aeiouAEIOU]/': 
            // This is the regular expression pattern.
            // It checks if any char in the string(text 
            // in your case) matches any char in the 
            // set of vowels.
            {
                countChar++;
                setCount(countChar);
            }
        }
        // console.log("No of Vowels are: " + countChar);
        props.showAlert("Vowels are counted", "success");
    };



    const handleFind = (event) => {
        console.log("change hua");
        findWord(event.target.value)
    }

    const handledelete = () => {
        let newText = text.replaceAll(fword, "");
        setText(newText);
    }

    // Program to count the no of vowels in a Str.

    // CORRECT, But not able to complete it with 
    //        all code in this js file..
    
    // function countVowel() {
    //   let counter = 0;
    //   const vowels = ["a", "e", "i", "o", "u"];

    //   for (let letter of text.toLowerCase()) {
    //     if (vowels.includes(letter)) {
    //       counter++;
    //     }
    //   }
    //// console.log(`The text contains ${counter} vowel(s)`);
    //   return counter;
    // }
   




    // Always add this inside Fn component.
    // Destructing Array/ Obj / Params..concept is used 
    //      here  to make varibles..    
    // 
    const [text, setText] = useState('');
    // const [text, setText] = useState(''); 
    // defaut val is "blank".
    //
    // Inside text variable "enter text here2" value
    //    shld come and whenever 
    //    we update this text, we will 
    //    do it through "setText" Fn
    //
    // text = "new text";   // Wrong   way to chg state
    // setText("new text"); // Correct way to chg state..



    // =====  Only for Counting Vowels  =====
    let [count, setCount] = useState(0);
    let countChar = 0;



    // IMP-ortant..
    // Use this, whenever we use "onChange Fn" in textArea..
    const [fword, findWord] = useState("");
    // default value of fword is blank.






    return (
        <>

            <div className= 'container' 
                //  want to make the textColor as 'White'
                style= { { 
                color: props.mode === 'dark'? 'white': 'black' 
                } }
            >
                <h1> {props.heading} </h1>
                <div className="mb-2 ">
                 {/* Textarea ki jo val hai, 
                    wo whi hojayegi jo text ki hai 
                    & default val of text is "enter text here2" */}

                 {/* Whenever we listen to an Event in React
                    then that fn will run, whenever we change sthg..
                    And also, we will get 1 "free Event Obj" */}

                    <textarea className="form-control" id="myBox"
                        value = {text}  onChange = {handleOnChange}                     
                        // style{{}}
                        // 1st {} - JS
                        // 2nd {} - To write an Obj in JS
                        //
                        // textArea bg will be grey color and 
                        // text inside it will be white color..
                      style={ { 
                    backgroundColor:props.mode === 'dark'? 'grey': 'white' ,
                      // color is for text color 
                    color: props.mode === 'dark'? 'white': 'black'}} 
                        rows="6">

                        {/* we are using "Val"  as State variable and 
                          it is necessary to update that State whenever 
                          someone type's inside that State area..    */}

                        {/* if we hadn't done "OnChange" fn, 
                            we won't be able to type in form..
                            So, it is necessary to do it..      */}
                    </textarea>
                </div>

                <button className="btn btn-info mx-2" id="btn"
                   onClick={handleUpClick}> 
                   Convert to Uppercase
                </button>

                <button className="btn btn-info mx-2"  id="btn"
                   onClick={handleLoClick} >
                    Convert to Lowercase
                </button>
                {/* <button className="btn btn-info mx-2" 
                    onClick={toTitleCase} >
                    Title Case 
                </button>   */}


                <button className="btn btn-info mx-2"  id="btn"
                    onClick={handleReverse} >
                    Handle Reverse
                </button>

                {/* <button className="btn btn-info mx-2" 
                    onClick={countVowel} >
                    Count Vowel 
                </button>    */}


                <button className="btn btn-info mx-2 my-2" id="btn" 
                    onClick = {handleVoClick}> Count Vowels 
                </button>


                <div className=" mt-2 mb-2">
                    <textarea className="form-control" 
                        value = {fword} id="myBox" 
                        onChange = {handleFind}  
                        rows="1"> 
                    </textarea>  
                </div>  
                <button className="btn btn-info mx-2" id="btn"
                onClick = {handledelete}> delete specific word </button>   
            </div>





            {/*======  PlayList 7 starts from here  ======  */}
            
            {/* ====== making a Word Counter ====== */}

            <div className="container my-2" 
               style = { { 
                color: props.mode=== 'dark'? 'white': 'black'}}>
                
                <h2>Your text Summary</h2>

                {/* <p> 3432 words, 4577789 characters</p> */} 

                {/* <p> 3432 words, {text.length} characters</p> */}
                {/* ENTER THE TEXT = 14 CHAR's */}
                


                {/*   */}
                {/*<p> {text.split(" ") } , {text.length} characters </p>
                 { text.split(" ")  } --> will give an array
                    and which will hv words */}

                {/* <p>{text.split(" ").length} words, {text.length} characters</p> */}
                {/* and length of it will be "no. of words" */}

                {/* <p>{ text.split(/\s+/)
                .filter(word => word.trim() !== '').length} words, 
                {text.length} characters
                </p> */}

                <p>{text.split(" ").length > 1 ? text.split(" ").length - 1 : 0} words, {text.length} characters</p>




                {/* ==== Time to read 1 word in internet ==== */}
                {/* 125 words - 1 min....1 word = 1/125 = 0.008 */}
                {/* so, If I multiply 0.008 with no of words */}
                {/* then In How many minutes one can read it, will come */}
                <p> {0.008 * text.split(" ").length} Minutes read </p>
                {/* we can tell user, How much time it'll take to read it */}
                <h2> Preview </h2>
                {/* <p> {this.text} </p> */}
                {/* Cannot do this since it is NOT a class-based cmpnt.. */}
                {/* <p> {text} </p> */}
                {/* If text is empty, then preview- 
                    Enter sthg to preview it here */}
                
                <p>{text.length > 0 ? text : "Enter sthg to preview it here"} </p>

                <p> {count} no. of vowels</p>


            </div>
        </>
        
    )
}
