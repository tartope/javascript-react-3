import React from 'react'
import './FoodPage.scss'
import { FoodsTable } from '../FoodsTable'

export const FoodPage = () => {
  return (
    <div className='FoodPage'>
       <div className='Center_Content'>
          <div className='FoodPage_Header'>
                Food 
            </div>
            <div className='FoodPage_Content'>
                <FoodsTable />
            </div>
       </div>
    </div>
  )
}
