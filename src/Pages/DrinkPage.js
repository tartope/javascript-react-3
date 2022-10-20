import { Footer } from '../Footer'
import React, { useRef } from 'react'
import { useRecoilState } from 'recoil'
import Image from 'react-bootstrap/Image'
import { drinkData } from '../Util/Atoms'
import * as AppConfig from '../Util/App.Config'
import './DrinkPage.scss'

export const DrinkPage = () => {
    const inputRef = useRef(null)
    let [theDrinkData, setTheDrinkData] = useRecoilState(drinkData)
    const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

    //
    // Input text change...
    //

    const onHandleLemonadeChange = (qty) => {
        let drinkData = {...theDrinkData}
        drinkData.lemonade = qty  
        if (qty) {
            setTheDrinkData(drinkData)
        } else {
            drinkData.lemonade = 0 
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

    //
    // Button Clicks...
    //

    const onHandleLemonadeClick = (value) => {
        let drinkData = {...theDrinkData}
        if (value === -1 && drinkData.lemonade === 0) {
            return;
        }
        drinkData.lemonade = drinkData.lemonade + value  
        setTheDrinkData(drinkData)
    }

    const onHandleTeaClick = (value) => {
        let drinkData = {...theDrinkData}
        if (value === -1 && drinkData.tea === 0) {
            return;
        }
        drinkData.tea = drinkData.tea + value  
        setTheDrinkData(drinkData)
    }

    const onHandleCoffeeClick = (value) => {
        let drinkData = {...theDrinkData}
        if (value === -1 && drinkData.coffee === 0) {
            return;
        }
        drinkData.coffee = drinkData.coffee + value  
        setTheDrinkData(drinkData)
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
                            <td>{ formatter.format(AppConfig.prices.filter(i=>i.type === "lemonade")[0].price) }</td>
                            <td>x</td>
                            <td><input value={theDrinkData.lemonade} ref={inputRef} onChange={(e) => onHandleLemonadeChange(parseInt(e.target.value))} className = "DrinkPage_Input"></input></td>
                            <td>
                                <button className="DrinkPage_Button" onClick={() => onHandleLemonadeClick(1)}>+</button>
                                <button className="DrinkPage_Button" onClick={() => onHandleLemonadeClick(-1)}>-</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Tea</td>
                            <td>{ formatter.format(AppConfig.prices.filter(i=>i.type === "tea")[0].price) }</td>
                            <td>x</td>
                            <td><input value={theDrinkData.tea} ref={inputRef} onChange={(e) => onHandleTeaChange(parseInt(e.target.value))} className = "DrinkPage_Input"></input></td>
                            <td>
                                <button className="DrinkPage_Button" onClick={() => onHandleTeaClick(1)}>+</button>
                                <button className="DrinkPage_Button" onClick={() => onHandleTeaClick(-1)}>-</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Coffee</td>
                            <td>{ formatter.format(AppConfig.prices.filter(i=>i.type === "coffee")[0].price) }</td>
                            <td>x</td>
                            <td><input value={theDrinkData.coffee} ref={inputRef} onChange={(e) => onHandleCoffeeChange(parseInt(e.target.value))} className = "DrinkPage_Input"></input></td>
                            <td>
                                <button className="DrinkPage_Button" onClick={() => onHandleCoffeeClick(1)}>+</button>
                                <button className="DrinkPage_Button" onClick={() => onHandleCoffeeClick(-1)}>-</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
               
            </div>
            <div className = "DrinkPage_Content">
                <div className = "DrinkPage_Pix">
                    <Image width="800px" rounded={true} fluid={true} src="coffee.jpg" alt="coffee" />
                    <br /><br />
                    <Image width="800px" rounded={true} fluid={true} src="tea.jpg" alt="coffee" />
                    <br /><br />
                    <Image width="800px" rounded={true} fluid={true} src="lemonade.jpg" alt="coffee" />
                </div>
            </div>
            <Footer />
        </div>
    )
}
