import React from 'react';
import img from './error.png'
import './errorMasage.css'
const ErrorMasage = () => {
    return (
        <>
            <img src={img} className="error_img" alt="error"/>
        </>
    )
}
export default ErrorMasage;