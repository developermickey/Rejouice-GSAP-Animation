import React from 'react'
import "../components/Button.css"

const Button = ({text}) => {
  return (
    <div>
        <div className='cursor-pointer' id='animatedBtn'>
            {text}
        </div>
    </div>
  )
}

export default Button