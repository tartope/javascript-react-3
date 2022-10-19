import React from 'react'
import { Footer } from '../Footer'
import { CoffeeCarousel } from '../CoffeeCarousel'

import './HomePage.scss'

export const HomePage = () => {
  return (
    <div className='HomePage'>
        <div className='HomePage_Header'>
            Welcome
        </div>
        <CoffeeCarousel />
        <br />
        <div className='HomePage_Header'>
            Live Music Every Friday Night
        </div>
        
        <Footer />
    </div>
  )
}
