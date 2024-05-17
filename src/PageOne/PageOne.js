import React from 'react'
import { useNavigate } from 'react-router-dom'

function PageOne() {
    const navigate = useNavigate()
  return (
    <div>
        <div>PageOne</div>
        <button onClick={()=>navigate('/home')}>GO to PageOne</button>
    </div>
  )
}

export default PageOne