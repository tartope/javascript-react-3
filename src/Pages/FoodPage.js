import React from 'react'
import { Footer } from '../Footer'
import './FoodPage.scss'

export const FoodPage = () => {
  return (
    <div className = "FoodPage">
        <div className = "FoodPage_Header">
            Food 
        </div>
        <div>
            Food 1 <br/>
            Food 2 <br/>
            Food 3 <br/>
        </div>
        <Footer />
    </div>
  )
}
