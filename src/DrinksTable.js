import React from 'react'
import { useRecoilState } from 'recoil'
import { formatUSD } from './Util/Money'
import { orderedDrinks } from './Util/Atoms'
import * as AppConfig from './Util/App.Config'
import './DrinksTable.scss'

export const DrinksTable = () => {
    let [theOrderedDrinks, setOrderedDrinks] = useRecoilState(orderedDrinks)

    const onHandleClick = (item, value) => {
        let drinks = {...theOrderedDrinks}
        if (value === -1 && drinks[item] === 0) {
            return;
        }
        drinks[item] += value
        setOrderedDrinks(drinks)
    }

    return (
        <div className='DrinksTable'>
            <table className='DrinkTable_Table'>
                <tbody>
                    <tr>
                        <td>Lemonade</td>
                        <td>{ formatUSD(AppConfig.getPriceForDrink('lemonade')) }</td>
                        <td>x</td>
                        <td><input value={theOrderedDrinks.lemonade} readOnly={true} className='DrinkTable_Input'></input></td>
                        <td>
                            <button className='DrinkTable_Button' onClick={() => onHandleClick('lemonade', 1)}>+</button>
                            <button className='DrinkTable_Button' onClick={() => onHandleClick('lemonade', -1)}>-</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Tea</td>
                        <td>{ formatUSD(AppConfig.getPriceForDrink('tea')) }</td>
                        <td>x</td>
                        <td><input value={theOrderedDrinks.tea} readOnly={true} className='DrinkTable_Input'></input></td>
                        <td>
                            <button className='DrinkTable_Button' onClick={() => onHandleClick('tea', 1)}>+</button>
                            <button className='DrinkTable_Button' onClick={() => onHandleClick('tea', -1)}>-</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Coffee</td>
                        <td>{ formatUSD(AppConfig.getPriceForDrink('coffee')) }</td>
                        <td>x</td>
                        <td><input value={theOrderedDrinks.coffee} readOnly={true} className='DrinkTable_Input'></input></td>
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
