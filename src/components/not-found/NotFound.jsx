import React from 'react'
import "./notfound.css"

function NotFound() {
  return (
    <div className='notfound-bg d-flex align-items-center'>
        <div className="container d-flex flex-column justify-content-center align-items-center text-light h-100">
            <h1>404</h1>
            <h5>You might want to check that URL again or head over to our homepage.</h5>
        </div>
    </div>
  )
}

export default NotFound