import React from 'react'
import loading from "./Loading.gif"
function Spinnner() {
  return (
    <div className='d-flex justify-content-center my-2'>
    <img src={loading} alt="" style={{height:"40px"}} />
    </div>
  )
}

export default Spinnner
