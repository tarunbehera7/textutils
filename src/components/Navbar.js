// ===== React's  Fn-based cmpnt  =====
import React from 'react'  // rfc
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';

// ===== Function and Class Components :- =====

// The simplest way to define a component is 
//     to write a  JS fn :-
//
//   function Welcome(props) {
//       return <h1> Hi, {props.name} </h1> ;
//   } 
//
// This function is a valid React component because 
// it accepts a single “props” (which stands for properties) 
// object arg with data and returns a React element. 
// We call such components “function components” because 
// they are literally JS fn's.


export default function Navbar(props) {
    // returning whole "nav" tag (from- App.js)  to Navbar.js


    return (

        <nav className=
            {`navbar navbar-expand-lg navbar-${props.mode} 
            bg-${props.mode} `}>
            <div className="container-fluid" >
                {/* <li className="navbar-brand" href="/">
                    {props.title} */}
                    {/* Since it is a JS file..
                        write inside Curly Bracketts */}
                {/* </li> */}
                <a className="navbar-brand" href="#">
                    {props.title}
                    {/* Since it is a JS file..
                        write inside Curly Bracketts */}
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/about">
                                {props.abtText}
                            </Link>
                        </li> */}
                    </ul>



                    {/* <div class={`form-check form-switch text-light`} >
                        <input className="form-check-input"  type="checkbox" role="switch" id="flexSwitchCheckDefault" />

                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                                Enable DarkMode </label>
                        </div> 
                    */}

                    {/* When will "toggleMode" Fn will run ??????
                        when any user clicks on this switch */}

                    {/* <div class={`form-check form-switch text-light`} >
                        <input className="form-check-input" 
                        onClick= {props.toggleMode} 

                        type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                            Enable DarkMode
                        </label>
                    </div> */}


                    {/* I won't let this class to be as text-light
                        as it will be dependent on 'Mode'   */}
                    {/* make it a temp literal first like this `{}`   */}

                    {/* mode= dark, text= light and vice versa */}

                    {/* Didn't worked, So use ternary operator */}
                    {/* <div class= {` form-check form-switch 
                            text - ${props.mode} `} >
                        <input className="form-check-input" 
                        onClick= {props.toggleMode} 

                        type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                            Enable DarkMode</label>
                        </div> 
                    */}


                    {/* Used curly braces - JS
                        then use template literal - ``..so it became a "str"
                        Whenever i use back tick, then only
                    I   can use "dollar"" to call any var 
                        by using '$' or 'curly braces'..
                        
                        and 'Ternary Operator' inside this var 
                        which says if mode === light, 
                        then text shld become dark  
                        and vice versa..  */}
                    <div className={`form-check form-switch 
                    text-${props.mode === 'light' ? 'dark' : 'light'} `} >
                        <input className="form-check-input"
                            onClick={props.toggleMode}
                            type="checkbox" role="switch" id="flexSwitchCheckDefault"
                        />

                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                            Enable DarkMode
                        </label>
                    </div>
                    <br />


                    <div className="dropdown ms-3" id="liveAlertPlaceholder">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown button
                        </button>
                        <ul className="dropdown-menu">

                            {/* <li><a className="dropdown-item"
                                id="liveAlertBtn" href="/" onClick={props.changegreen} >changeGreen</a></li>
                            <li><a className="dropdown-item"
                                id="liveAlertBtn" href="/" onClick={props.changered}>changeRed</a></li>
                            <li><a className="dropdown-item"
                                id="liveAlertBtn" href="/" onClick={props.changeyellow} >changeYellow</a></li> */}



                            {/*                             
                            <li><a className="dropdown-item" onClick={() => handleChangeColor('green')}>changeGreen</a></li>
                            <li><a className="dropdown-item" onClick={() => handleChangeColor('red')}>changeRed</a></li>
                            <li><a className="dropdown-item" onClick={() => handleChangeColor('yellow')}>changeYellow</a></li>  */}



                            {/* 
                            <li><a className="dropdown-item" href="/"
                                onClick={() => props.handleChangeColor('#3cb541')} >changeGreen</a></li>
                            <li><a className="dropdown-item" href="/"
                                onClick={() => props.handleChangeColor('#ac242f')} >changeRed</a></li>
                            <li><a className="dropdown-item" href="/"
                                onClick={() => props.handleChangeColor('#CAB911')} >changeYellow</a></li> */}



                            {/* ==== Correct Code below - 1  ==== */}


                            <li>
                                {/* I see that you have updated the Navbar.js code to include 
                            the href="/", which caused the links to reload the page 
                                when you click on them, making the alerts 
                                disappear quickly. 
                            To fix this, you can prevent the default behavior 
                                of the links by using the preventDefault method 
                                on the event(e) obj in the onClick handlers. */}
                                <a className="dropdown-item" href='/'
                                    onClick={(e) => {
                                        e.preventDefault();
                                        props.handleChangeColor('#3cb541')
                                        props.changeButtonColor('#008B8B')
                                    }} >
                                    changeGreen
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href='/'
                                    onClick={(e) => {
                                        e.preventDefault();
                                        props.handleChangeColor('#ac242f')
                                        props.changeButtonColor('#fd5c69')
                                    }} >
                                    changeRed
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href='/'
                                    onClick={(e) => {
                                        e.preventDefault();
                                        props.handleChangeColor('#999900')
                                        props.changeButtonColor('#FEBE10')
                                    }} >
                                    changeYellow
                                </a>
                            </li>


                        </ul>
                    </div>

                </div>
            </div>
        </nav>
    )
}

// Props -  It accepts a single “props” (which stands for 
//          properties) object argument with data 
//          and returns a React element..
//   We call such components “Fn components” 
//      bcoz they are literally JS Fn's..
//
// In simple terms, Props is a type of object where the 
//     value of attributes  of a tag is stored..
// The word “props” implies “properties”, and it's 
///    working functionality is quite similar to HTML attributes..




// Navbar.propTypes = {
//     title: PropTypes.string, 
//     abtText: PropTypes.string
// }


// Don't send props after doing this.
//     means- when we said "isRequired" and
//     we didn't send props inside <Navabar/> 
//     then we get an error..
// Also, remove "defaultprops" to see Error..
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    abtText: PropTypes.string.isRequired
}
//// O/P:- Failed prop type: The prop `title` is marked
////       required in `Navbar`, but it's val is `undefined`.
////       at Navbar..


// If props are not passed, then use these values..
Navbar.defaultProps = {
    title: 'Set title here',
    abtText: 'About'
};
