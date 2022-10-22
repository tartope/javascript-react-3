import React from 'react'
import Image from 'react-bootstrap/Image'
import './Footer.scss'

export const Footer = () => {
  return (
    <div className='Footer'>
        <div className='Footer_Menu'>
            About Us<br/>
        </div>
        <div className='Footer_Center'>
        </div>
        <div className='Footer_Social'>
            <a href='https://www.instagram.com' target="_blank" rel="noreferrer">
              <Image className='icon' width="35px" rounded={true} fluid={true} src="insta-icon.png" alt="insta" />
            </a>
            <a href='https://www.facebook.com' target="_blank" rel="noreferrer">
              <Image className='icon' width="35px" rounded={true} fluid={true} src="facebook-icon.png" alt="facebook" />
            </a>
            <a href='https://www.twitter.com' target="_blank" rel="noreferrer">
              <Image className='icon' width="35px" rounded={true} fluid={true} src="twitter-icon.png" alt="twitter" />
            </a>
        </div>
    </div>
  )
}
