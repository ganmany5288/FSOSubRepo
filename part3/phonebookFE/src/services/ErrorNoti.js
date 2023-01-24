import React from 'react'
import '../App.css'

const ErrorNoti = ({message}) => {
    if (message === null){
        return null
    }
    return (
        <div className='error'>
            {message}
        </div>
    )
}




export default ErrorNoti