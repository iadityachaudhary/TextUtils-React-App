import React from 'react'

export default function Alert(props) {
    const capitalise=(str)=>{
        const lower=str.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    <div style={{ position: 'relative', minHeight: '50px' }}> {/* Make container relative */}
            {props.alert && (
                <div 
                    className={`alert alert-${props.alert.type} alert-dismissible fade show`} 
                    role="alert" 
                    style={{ position: 'absolute', top: 0, width: '100%' }} // Position alert absolutely
                >
                    <strong>{capitalise(props.alert.type)}</strong> : {props.alert.msg}
                </div>
            )}
        </div>
  )
}
