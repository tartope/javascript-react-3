import React from 'react'
import { useRecoilState } from 'recoil'
import { capitalize } from './Util/Strings'
import { orderedDrinks } from './Util/Atoms'
import { DrinkTableRow } from './DrinkTableRow'
import { drinkPrices } from './Util/App.Config'
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
                    {
                        drinkPrices.map(i => {
                            return <DrinkTableRow 
                                key={i.type}
                                item={i.type}
                                displayName={capitalize(i.type)}
                                theOrderedDrinks={theOrderedDrinks} 
                                onHandleClick={(item, value) => onHandleClick(item, value)}
                            />
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
