import React from 'react'

export default function About({mode='light'}) {

    let myStyle={
      color:mode==='dark'? 'white':'#3A6D8C',
      backgroundColor:mode==='dark'? '#3A6D8C':'white',
    }

  return (
    <div className="container " style={{color:mode==='dark'? 'white':'#3A6D8C'}}>
        <h1 className="my-2">About Us</h1>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        About TextUtils
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>TextUtils is a versatile text utility app</strong>
        designed to analyze and transform text quickly. 
        Whether you need to count words, characters, or perform case conversions, TextUtils provides 
        easy-to-use tools to simplify your text manipulation tasks.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Free to Use
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        TextUtils is completely free to use,with no hidden fees or sign-ups required. 
        Get instant access to all features, ensuring you can enhance your text anytime, anywhere.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Browser Compatible
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle} >
      TextUtils is fully compatible with all modern web browsers, including Chrome, Firefox, Safari, and Edge, 
      ensuring a seamless experience across devices and platforms.
      </div>
    </div>
  </div>
</div>
    
    </div>
  )
}
