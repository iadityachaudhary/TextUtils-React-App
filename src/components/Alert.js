import React from 'react'

export default function Alert(props) {
    const capitalise=(str)=>{
        const lower=str.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    <div>
    {props.alert && (<div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalise(props.alert.type)}</strong> : {props.alert.msg}
    </div>
    )}
    </div>
  )
}
