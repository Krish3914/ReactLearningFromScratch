import React from 'react';
import imageVite from "../public/vite.svg";

function Card() {
  return (
    <div className='card'>
        <img src={imageVite} alt="ViteImage" className='card-img' />
        <h2 className='card-title'>Krish Agrawal</h2>
        <p className='card-content'>Software Engineer</p>
    </div>
  )
}

export default Card;