// import logo from './logo.svg';
// import React, { useEffect, useState } from 'react';
import React, { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import edit from './img/edit.png';
// import { BrowserRouter, Route, Routes } from "react-router-dom";





function App(props) {

  //==== Whether Dark mode is enabled or not  ====
  const [mode, setMode] = useState('light'); 

  const toggleMode = () =>  {
    
    if( mode === 'light') {
      setMode('dark'); // setMode is a Fn...So, call it like this.
      // setMode = 'dark'; // And NOT like this..
      document.body.style.backgroundColor = '#373F51';
      // document.body.style.textColor =
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
    }
    else {
      setMode('light');
      // setMode = 'light';
      document.body.style.backgroundColor = '#dee6ec';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
   
  } 
  


  
  const [alert, setAlert] = useState(null);
  // "alert" is an obj..and It is by default "null"
  // set Alert is there to change 'alert'..
  //
  // 'showAlert' is a Fn which will 
  //    enable us to show alert messages..
  // === Types ====
  // 1. Primary (  Blue    )
  // 2. Success (  Green   ) 
  // 3. Warning (  Yellow  )
  // 4. Danger  (  Blue    )

  const showAlert = (message, type) => {
    setAlert( {
      // both message & msg are same
      // for understanding, we hv made them diff..
      msg: message, 
      type: type
    })
    // Alert banner will vanish after 1.5 sec..
    setTimeout( () => {
        setAlert(null);
    }, 1500 ) ;
  }

  // const [backgroundColor, setBackgroundColor] = useState('light');
  // 
  // const handleChangeColor = (color) => {
  //   setBackgroundColor(color);
  //   window.alert(`Background is changed to ${color}`);
  // };


  // const handleChangeColor = (color) => {
  //   setMode('light'); // Set mode to 'light' to avoid conflicts with dark mode.
  //   showAlert(`Background is changed to ${color}`, 'success');
  //   document.body.style.backgroundColor = color;
  // };


  const handleChangeColor = (color) => {

    document.body.style.backgroundColor = color;
    showAlert(`Background color changed to ${color}`, 'success');

    // Clear the 'alert' after  1.5 s
    setTimeout(() => {
        setAlert(null);
    }, 1500);
  
  };

  
  const changeButtonColor = (clr) => {
    // Assuming your buttons have a common class, 
    //  replace 'your-button-class' with the actual class of your buttons
    const buttons = document.querySelectorAll('.btn'); // replace 'your-button-class' with the actual class of your buttons


    if (buttons.length > 0) {

        buttons.forEach( (button) => {
          button.style.backgroundColor = clr;
        });
        // showAlert(`Button color changed to ${clr}`, 'success');
        setTimeout( () => {
            setAlert(null);
        }, 1500);
    } 
    else {
        console.error('No buttons found with the specified class');
    }
  }



  ////======  Correct code Below  ======
  //
  // const changegreen = () => {
  //   document.body.style.backgroundColor = '#3cb541'
  //   // document.getElementById("button").bgcolor='#3cb541'
  //   // document.getElementById("surmenu").style.backgroundColor='#3cb541';
  //   // setColor(color)
  //   // props.showAlert('"bakcgroun is changed to Green" ,  "success"');
  // }
  // const changered = () => {
  //   document.body.style.backgroundColor = '#ac242f'
  //   // props.showAlert(' "bakcgroun is changed to Red" , "success"');
  // }
  // const changeyellow = () => {
  //   document.body.style.backgroundColor = '#CAB911'
  //   // props.showAlert(' "bakcgroun is changed to Yellow" , "success"');
  // }

  

  // const greenbtn = ( ) => {
  //   // document.getElementById("button").style.background='#3cb541';
  //   document.getElementById("button").bgcolor='';
  // }
  // useEffect( () => {
  //   document.body.style.backgroundColor = color
  // }, [color])
  
  // const changegreenbtn = ( ) => {
  //  document.body.style.button= '#3cb541'
  // }





  return (
    <>
    {/* <BrowserRouter> */}
          {/* only these 2 value can be changed (from Navbar.js) 
        acc to our needs.. */}
      {/* <Navbar title= "Textutils" abtText= "About Us"/>   */}
      
      {/* Importing navbar ->  "<Navbar/>"    */}

      {/* <Navbar title="Textutils" mode={mode} toggleMode={} /> */}


      {/* ===== Correct Code below - 1  ===== */}

      {/* <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} 
        changegreen={changegreen} changered={changered}
        changeyellow={changeyellow}   /> */}
      
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} 
        handleChangeColor={handleChangeColor}  
        changeButtonColor= {changeButtonColor}
      />
        {/* this "changeBackgroundColor={changeBackgroundColor}" means 
        Pass the Fn as a prop to Navbar    */}
     

      {/* <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} 
          handleChangeColor={handleChangeColor} />   */}



      {/* {alert}- This is our alert state */}
      <Alert alert = {alert} />

      {/* <div className="App">
        <div className="menu-container">
          <div className="menu-trigger">
            <img src='' /> <img />
          </div>

          <div className="dropdown-menu">
            <h3>The web</h3>
            <ul>
              <DropdownItem/>
              <DropdownItem/>
              <DropdownItem/>
            </ul>
          </div>

        </div>
      </div> */}
      
      <div className = "container my-3">
        {/* <TextForm  heading="Enter the text to analyze" 
          mode={mode}/> */}
        {/* passing showAlert here for all buttons
        so, whenever they r clicked, alert will Pop Up   */}
        {/* <TextForm showAlert = {showAlert} 
          heading="Enter the text to analyze" 
          mode={mode}/> */}
         <TextForm showAlert = {showAlert} 
                  h eading="Enter the text to analyze" 
                  mode={mode}
          />
          
        {/*   <About/>    */}

      </div>

      <div className="container my-4" mode={mode}>
          
          {/* <Routes>
            <Route */}
            {/*  /users --> Components 1
             /users/home --> Components 2  
             React uses partial matching
             So, use "exact" in path..
              // exact path="/"
              // element = {} */}
                {/* <TextForm showAlert = {showAlert} 
                  h eading="Enter the text to analyze" 
                  mode={mode}
                /> */}
              
            {/* ></Route> */}
            {/* <Route exact path="/about" element={<About/>}></Route> */}
            
          {/* </Routes> */}
        </div>

    {/* </BrowserRouter>       */}
    </>
  );

  // we hv used parenthesis bcoz 
  //    JS can automatically insert ';' and
  //    It can ruin our JSX..
  // create react hv already made us a __?__ 
}

// function DropdownItem() {
//   return(
//
//     <li  className=''>
//       {/* <img> </img > */}
//       <a></a>
//     </li>
//
//   );
// }


// let name = "Tarun";
// {/* <nav>
//   <li>Home</li>
//   <li>About</li>
//   <li>Gallery</li>
// </nav>
// <div className="container">
//   <h1> Hello {name}</h1>
//   <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime dignissimos, sint placeat ipsa, reiciendis cupiditate ut magni laudantium esse soluta libero ex quo natus ad temporibus eaque facere, quos at!</p>
//  </div> */}




export default App;
