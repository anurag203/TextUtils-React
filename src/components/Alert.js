import React from 'react'

export default function Alert(props) {
    function capitalize(str)
    {
        let new_s="",s=str.toLowerCase();
        new_s+=s[0].toUpperCase();
        new_s+=s.substr(1);
        return new_s;
    }
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show container my-2`} role="alert">
            <strong>{capitalize(props.alert.type)} </strong> : {props.alert.msg}
            {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        </div>
    )
}
