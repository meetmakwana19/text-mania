import React from 'react'

function Alert(props) {

    // the first alphabet of `success` is not capital so will make a function for it 
    const capitalize = (word) =>{ //this arrow func will take the word 
        // no func in js to directly achieve what we want so will first make the word lowercase  
        const lower = word.toLowerCase(); 
        // will return by making the 0th index capital + returning from next 1st index. 
        return lower.charAt(0).toUpperCase() + lower.slice(1); 
    }

    return (
        // this syntax of `props.alert &&` in javascript is used meaning when `&&` operator is used that time the next part will only evaluate if it is true and if it becomes false then the next whole part wont be executed.
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            {/* <strong>Holy guacamole!</strong> You should check in on some of those fields below. */}
            <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
            {/* <button type="button" className="btn-close" data-bs-dismiss="alert" ></button> */}
        </div>
    )
}

export default Alert
