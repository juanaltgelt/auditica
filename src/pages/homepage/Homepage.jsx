import React from 'react'
import "./homepage.css";
import { ReactComponent as Card } from "../../assets/cards/card.svg";
import {Link} from "react-router-dom"

function Homepage({currentUser}) {
  return (
    <div className='home-bg d-flex align-items-center'>
       <div className="container-fluid container-md d-flex align-items-center h-100 px-2 px-lg-4">
        <div className='home-container row align-items-center'>
            <div className='home-header col-12 col-md-6  ps-xl-5'>
                <h1 >Listening is <span className='home-span'>everything</span></h1>
                <p >A streaming service for all music fans.</p>

                {currentUser
                   ? 
                   <Link to="/dashboard" ><button className='home-btn mt-3'>Go to Dashboard</button></Link>
                    :
                    <Link to="/signup" ><button className='home-btn mt-3'>Start Free Trial</button></Link>
              }

                
            </div>
            <div className='col-12 col-md-6 d-flex justify-content-center '>
                <Card className='img-fluid mb-2'/>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Homepage