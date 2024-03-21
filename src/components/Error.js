import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <div className='text-center'>
            <img className='errorImg' src='https://static.vecteezy.com/system/resources/previews/011/946/457/original/error-404-web-page-not-found-on-laptop-computer-concept-flat-illustration-vector.jpg' width="100%" style={{height:"100dvh",marginTop:"-60px"}}/>
            <div style={{marginTop:"-12px"}}><Link to="/" className='rounded p-3' style={{borderRadius:"25px",border:"3px solid",backgroundColor:"orange"}}>Return to HomePage</Link>
        </div>
        </div>
    )
}

export default Error