import React from 'react'
import { formatUSD } from './Util/Money'
import { getPriceForDrink } from './Util/App.Config'
import './DrinkTableRow.scss'

export const DrinkTableRow = ({displayName, item, theOrderedDrinks, onHandleClick}) => {
  return (
    <tr className='DrinkTableRow'>
        <td>{ displayName }</td>
        <td>{ formatUSD(getPriceForDrink(item)) }</td>
        <td>x</td>
        <td>
            <div className='DrinkTableRow_OrderAmount'>{ theOrderedDrinks[item] }</div>
        </td>
        <td>
            <button className='DrinkTableRow_Button' onClick={ () => onHandleClick(item, 1) }>+</button>
            <button className='DrinkTableRow_Button' onClick={ () => onHandleClick(item, -1) }>-</button>
        </td>
    </tr>
  )
}
