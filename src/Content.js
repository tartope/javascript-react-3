import React from 'react'
import { FoodPage } from './Pages/FoodPage'
import { HomePage } from './Pages/HomePage'
import { DrinkPage } from './Pages/DrinkPage'
import { SalesPage } from './Pages/SalesPage'
import { DessertPage } from './Pages/DessertPage'
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
