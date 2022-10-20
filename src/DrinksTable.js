import React, { useRef } from 'react'
import { useRecoilState } from 'recoil'
import { formatUSD } from './Util/Money'
import { orderedDrinks } from './Util/Atoms'
import * as AppConfig from './Util/App.Config'
import './DrinksTable.scss'

export const DrinksTable = () => {
    const inputRef = useRef(null)
    let [theDrinks, setTheDrinks] = useRecoilState(orderedDrinks)

    const onHandleLemonadeClick = (value) => {
        let drinkData = {...theDrinks}
        if (value === -1 && drinkData.lemonade === 0) {
            return;
        }
        drinkData.lemonade += value  
        setTheDrinks(drinkData)
    }

    const onHandleTeaClick = (value) => {
        let drinkData = {...theDrinks}
        if (value === -1 && drinkData.tea === 0) {
            return;
        }
        drinkData.tea += value  
        setTheDrinks(drinkData)
    }

    const onHandleCoffeeClick = (value) => {
        let drinkData = {...theDrinks}
        if (value === -1 && drinkData.coffee === 0) {
            return;
        }
        drinkData.coffee += value  
        setTheDrinks(drinkData)
    }

    return (
        <div className='DrinksTable'>
            <table className='DrinkTable_Table'>
                <tbody>
                    <tr>
                        <td>Lemonade</td>
                        <td>{ formatUSD(AppConfig.prices.filter(i=>i.type === 'lemonade')[0].price) }</td>
                        <td>x</td>
                        <td><input value={theDrinks.lemonade} readOnly={true} ref={inputRef} className='DrinkTable_Input'></input></td>
                        <td>
                            <button className='DrinkTable_Button' onClick={() => onHandleLemonadeClick(1)}>+</button>
                            <button className='DrinkTable_Button' onClick={() => onHandleLemonadeClick(-1)}>-</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Tea</td>
                        <td>{ formatUSD(AppConfig.prices.filter(i=>i.type === 'tea')[0].price) }</td>
                        <td>x</td>
                        <td><input value={theDrinks.tea} readOnly={true} ref={inputRef} className='DrinkTable_Input'></input></td>
                        <td>
                            <button className='DrinkTable_Button' onClick={() => onHandleTeaClick(1)}>+</button>
                            <button className='DrinkTable_Button' onClick={() => onHandleTeaClick(-1)}>-</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Coffee</td>
                        <td>{ formatUSD(AppConfig.prices.filter(i=>i.type === 'coffee')[0].price) }</td>
                        <td>x</td>
                        <td><input value={theDrinks.coffee} readOnly={true} ref={inputRef} className='DrinkTable_Input'></input></td>
                        <td>
                            <button className='DrinkTable_Button' onClick={() => onHandleCoffeeClick(1)}>+</button>
                            <button className='DrinkTable_Button' onClick={() => onHandleCoffeeClick(-1)}>-</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
  )
}
