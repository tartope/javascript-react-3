import React from 'react'
import { formatUSD } from './Util/Money'
import './DessertTableRow.scss'

//getPrice
//MenuItemTableRow component (make it work for desserts)
export const DessertTableRow = ({displayName, item, theOrderedDesserts, onHandleClick, getPrices}) => {
  return (
    <tr className='DessertTableRow'>
        <td>{ displayName }</td>
        <td>{ formatUSD(getPrices(item)) }</td>
        <td>x</td>
        <td>
            <div className='DessertTableRow_OrderAmount'>{ theOrderedDesserts[item] }</div>
        </td>
        <td>
            <button className='DessertTableRow_Button' onClick={ () => onHandleClick(item, 1) }>+</button>
        </td>
        <td>
            <button className='DessertTableRow_Button' onClick={ () => onHandleClick(item, -1) }>-</button>
        </td>
    </tr>
  )
}
