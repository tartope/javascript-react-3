import React from 'react'
import { DessertPage } from './Pages/DessertPage'
import { DrinkPage } from './Pages/DrinkPage'
import { FoodPage } from './Pages/FoodPage'
import { HomePage } from './Pages/HomePage'
import { SalesPage } from './Pages/SalesPage'
import './Content.scss'

export const Content = ({showHome, showFood, showDrink, showDessert, showSales}) => {
  return (
    <div className='Content'>
        {
          showHome && < HomePage />
        }
        {
          showFood && < FoodPage />
        }
        {
          showDrink && <DrinkPage />
        }
        {
          showDessert && <DessertPage />
        }
        {
          showSales && <SalesPage />
        }
    </div>
  )
}
