import React from 'react'
import { useRecoilState } from 'recoil'
import { orderedDrinks } from './Util/Atoms'
import { DrinkTableRow } from './DrinkTableRow'
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
                    <DrinkTableRow 
                        item='lemonade'
                        displayName='Lemonade'
                        theOrderedDrinks={theOrderedDrinks} 
                        onHandleClick={(item, value) => onHandleClick(item, value)}
                    />
                   <DrinkTableRow 
                        item='tea'
                        displayName='Tea'
                        theOrderedDrinks={theOrderedDrinks} 
                        onHandleClick={(item, value) => onHandleClick(item, value)}
                    />
                    <DrinkTableRow 
                        item='coffee'
                        displayName='Coffee'
                        theOrderedDrinks={theOrderedDrinks} 
                        onHandleClick={(item, value) => onHandleClick(item, value)}
                    />
                </tbody>
            </table>
        </div>
    )
}
