import React, { useRef } from 'react'
import { useRecoilState } from 'recoil'
import { drinkData } from '../Util/Atoms'
import * as AppConfig from '../Util/App.Config'
import Image from 'react-bootstrap/Image'
import './DrinkPage.scss'

export const DrinkPage = () => {
    const inputRef = useRef(null)
    let [theDrinkData, setTheDrinkData] = useRecoilState(drinkData)
    const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

    const onHandleLemonadeChange = (qty) => {
        let drinkData = {...theDrinkData}
        drinkData.lemonade = qty  
        if (qty) {
            setTheDrinkData(drinkData)
        } else {
            drinkData.lemonade.qty = 0 
            setTheDrinkData(drinkData)
        }
    }

    const onHandleTeaChange = (qty) => {
        let drinkData = {...theDrinkData}
        drinkData.tea = qty  
        if (qty) {
            setTheDrinkData(drinkData)
        } else {
            drinkData.tea = 0
            setTheDrinkData(drinkData)
        }
    }

    const onHandleCoffeeChange = (qty) => {
        let drinkData = {...theDrinkData}
        drinkData.coffee = qty  
        if (qty) {
            setTheDrinkData(drinkData)
        } else {
            drinkData.coffee = 0
            setTheDrinkData(drinkData)
        }
    }

    return (
        <div className = "DrinkPage">
            <div className = "DrinkPage_Header">
                Drinks 
            </div>
            <div className = "DrinkPage_Content">
                <table className = "DrinkPage_Table">
                    <tbody>
                        <tr>
                            <td>Lemonade</td>
                            <td>{ formatter.format(AppConfig.lemonadePrice) }</td>
                            <td>x</td>
                            <td><input value={theDrinkData.lemonade} ref={inputRef} onChange={(e) => onHandleLemonadeChange(parseInt(e.target.value))} className = "DrinkPage_Input"></input></td>
                        </tr>
                        <tr>
                            <td>Tea</td>
                            <td>{ formatter.format(AppConfig.teaPrice) }</td>
                            <td>x</td>
                            <td><input value={theDrinkData.tea} ref={inputRef} onChange={(e) => onHandleTeaChange(parseInt(e.target.value))} className = "DrinkPage_Input"></input></td>
                        </tr>
                        <tr>
                            <td>Coffee</td>
                            <td>{ formatter.format(AppConfig.coffeePrice) }</td>
                            <td>x</td>
                            <td><input value={theDrinkData.coffee} ref={inputRef} onChange={(e) => onHandleCoffeeChange(parseInt(e.target.value))} className = "DrinkPage_Input"></input></td>
                        </tr>
                    </tbody>
                </table>
               
            </div>
            <div className = "DrinkPage_Content">
                <div className = "DrinkPage_Pix">
                    <Image width="800px" rounded={true} fluid={true} src="coffee.jpg" alt="coffee" />
                </div>
            </div>
        </div>
    )
}
