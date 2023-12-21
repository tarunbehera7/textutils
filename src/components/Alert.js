import React from 'react'

// ======  rfce  ======  
function Alert(props) {

    // There  is no capitalize fn in JS..
    const capitalize = (word) => {
        // there is no capitalize fn in JS..so, do these instead.
        const lower = word.toLowerCase();
        // return str.charAt(0) - 
        //      string at 0 position..
        //
        // lower.charAt(0).toUpperCase() - 
        //     Convert 1st char to UpperCase..
        // 
        // lower.slice(1) - 
        //  It'll take all char Except 1st char.. 
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }


    return (

        // <div className="alert alert-warning alert-dismissible fade show" role="alert">
        //  bcoz alert was initially set as 'Null'

        
        // props.alert - NUll     , then we won't get anything
        // props.alert - Not Null , then we will  get WHOLE div value..

        // props.alert && <div className="alert alert-warning alert-dismissible fade show"  role="alert">
        //
        // whenver u use "&&" in JS...then first n foremost
        //     this "props.alert" will evaluate
        //     and if that becomes FALSE or Null, 
        //     then thing ahead of it, won't evaluate..
        // AND if it becomes TRUE, then other thing will also
        //     be evaluated..
        
        // This happens bcoz all the JSX
        //      will be converted to JS Calls..
        // This  " {`alert alert-${props.alert.type`} "  
        //    will show the alert msg in green ( Success )..  
        
        props.alert && <div className ={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}


            {/* Bcoz anyways we are dis-missing Alert after every 2 sec
            so, no need to give user a way to dismiss this */}
    
            {/* <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button> */}
        </div>
    )
}

export default Alert
