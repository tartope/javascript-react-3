import React from 'react'
import { formatUSD } from './Util/Money'
import { getPriceForFood } from './Util/App.Config'
import './FoodTableRow.scss'


export const FoodTableRow = ({ displayName, item, theOrderedFoods, onHandleClick}) => {
  return (
    <tr className='FoodTableRow'>
      <td>{ displayName }</td>
      <td>{ formatUSD(getPriceForFood(item)) }</td>
      <td>x</td>
      <td>
        <div className='FoodTableRow_OrderAmount'>{ theOrderedFoods[item]}</div>
      </td>
      <td>
        <button className='FoodTableRow_Button' onClick={()=> onHandleClick(item, 1)}>+</button>
      </td>
      <td>
        <button className='FoodTableRow_Button' onClick={()=> onHandleClick(item, -1)}>-</button>
      </td>
    </tr>
  )
}
