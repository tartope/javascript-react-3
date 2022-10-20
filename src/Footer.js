import React from 'react'
import Image from 'react-bootstrap/Image'
import './Footer.scss'

export const Footer = () => {
  return (
    <div className='Footer'>
        <div className='Footer_menu'>
            Careers <br/>
            About Us<br/>
            Privacy <br/>
        </div>
        <div className='Footer_center'>
            Copyright 2022
        </div>
        <div className='Footer_social'>
            <Image className='icon' width="25px" rounded={true} fluid={true} src="insta-icon.png" alt="insta" />
            <Image className='icon' width="25px" rounded={true} fluid={true} src="facebook-icon.png" alt="facebook" />
            <Image className='icon' width="25px" rounded={true} fluid={true} src="twitter-icon.png" alt="twitter" />
        </div>
    </div>
  )
}
