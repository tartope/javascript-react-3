import React, { useRef } from 'react'
import { useRecoilState } from 'recoil'
import { drinkData } from '../Util/Atoms'
import './DrinkPage.scss'

export const DrinkPage = () => {
    const inputRef = useRef(null)
    let [theDrinkData, setTheDrinkData] = useRecoilState(drinkData)

    const onHandleLemonadeChange = (qty) => {
        if (qty) {
            let d = {
                lemonade: qty,
                tea: 0,
                coffee: 0
            }
            setTheDrinkData(d)
        } else {
            setTheDrinkData(0)
        }
    }

    return (
        <div className = "DrinkPage">
            <div className = "DrinkPage_Header">
                <h2>Drinks</h2>
            </div>
            <table className = "DrinkPage_Table">
                <tbody>
                    <tr>
                        <td>Lemonade</td>
                        <td>$1.00</td>
                        <td>x</td>
                        <td><input value={theDrinkData.lemonade} ref={inputRef} onChange={(e) => onHandleLemonadeChange(parseInt(e.target.value))} className = "DrinkPage_Input"></input></td>
                    </tr>
                    <tr>
                        <td>Tea</td>
                        <td>$2.00</td>
                        <td>x</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>Coffee</td>
                        <td>$3.00</td>
                        <td>x</td>
                        <td>0</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
