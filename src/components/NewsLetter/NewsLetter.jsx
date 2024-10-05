import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers On Your EMail</h1>
      <p>Subscribe to our NewsLetter and stay updated</p>
      <div>
        <input type="email" placeholder='Your EMail Id' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
