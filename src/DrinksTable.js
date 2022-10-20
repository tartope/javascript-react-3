import React, { useRef } from 'react'
import { useRecoilState } from 'recoil'
import { formatUSD } from './Util/Money'
import { orderedDrinks } from './Util/Atoms'
import * as AppConfig from './Util/App.Config'
import './DrinksTable.scss'

export const DrinksTable = () => {
    const inputRef = useRef(null)
    let [theDrinks, setTheDrinks] = useRecoilState(orderedDrinks)

    const onHandleClick = (item, value) => {
        let drinkData = {...theDrinks}
        if (value === -1 && drinkData[item] === 0) {
            return;
        }
        drinkData[item] += value
        setTheDrinks(drinkData)
    }

    return (
        <div className='DrinksTable'>
            <table className='DrinkTable_Table'>
                <tbody>
                    <tr>
                        <td>Lemonade</td>
                        <td>{ formatUSD(AppConfig.getPriceForDrink('lemonade')) }</td>
                        <td>x</td>
                        <td><input value={theDrinks.lemonade} readOnly={true} ref={inputRef} className='DrinkTable_Input'></input></td>
                        <td>
                            <button className='DrinkTable_Button' onClick={() => onHandleClick('lemonade', 1)}>+</button>
                            <button className='DrinkTable_Button' onClick={() => onHandleClick('lemonade', -1)}>-</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Tea</td>
                        <td>{ formatUSD(AppConfig.getPriceForDrink('tea')) }</td>
                        <td>x</td>
                        <td><input value={theDrinks.tea} readOnly={true} ref={inputRef} className='DrinkTable_Input'></input></td>
                        <td>
                            <button className='DrinkTable_Button' onClick={() => onHandleClick('tea', 1)}>+</button>
                            <button className='DrinkTable_Button' onClick={() => onHandleClick('tea', -1)}>-</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Coffee</td>
                        <td>{ formatUSD(AppConfig.getPriceForDrink('coffee')) }</td>
                        <td>x</td>
                        <td><input value={theDrinks.coffee} readOnly={true} ref={inputRef} className='DrinkTable_Input'></input></td>
                        <td>
                            <button className='DrinkTable_Button' onClick={() => onHandleClick('coffee', 1)}>+</button>
                            <button className='DrinkTable_Button' onClick={() => onHandleClick('coffee', -1)}>-</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
  )
}
