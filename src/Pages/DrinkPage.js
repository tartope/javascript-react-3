import { Footer } from '../Footer'
import React, { useRef } from 'react'
import { useRecoilState } from 'recoil'
import Image from 'react-bootstrap/Image'
import { formatUSD } from '../Util/Money'
import { orderedDrinks } from '../Util/Atoms'
import * as AppConfig from '../Util/App.Config'
import './DrinkPage.scss'

export const DrinkPage = () => {
    const inputRef = useRef(null)
    let [theDrinks, setTheDrinks] = useRecoilState(orderedDrinks)

    const onHandleLemonadeClick = (value) => {
        let drinkData = {...theDrinks}
        if (value === -1 && drinkData.lemonade === 0) {
            return;
        }
        drinkData.lemonade = drinkData.lemonade + value  
        setTheDrinks(drinkData)
    }

    const onHandleTeaClick = (value) => {
        let drinkData = {...theDrinks}
        if (value === -1 && drinkData.tea === 0) {
            return;
        }
        drinkData.tea = drinkData.tea + value  
        setTheDrinks(drinkData)
    }

    const onHandleCoffeeClick = (value) => {
        let drinkData = {...theDrinks}
        if (value === -1 && drinkData.coffee === 0) {
            return;
        }
        drinkData.coffee = drinkData.coffee + value  
        setTheDrinks(drinkData)
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
                            <td>{ formatUSD(AppConfig.prices.filter(i=>i.type === "lemonade")[0].price) }</td>
                            <td>x</td>
                            <td><input value={theDrinks.lemonade} readOnly={true} ref={inputRef} className = "DrinkPage_Input"></input></td>
                            <td>
                                <button className="DrinkPage_Button" onClick={() => onHandleLemonadeClick(1)}>+</button>
                                <button className="DrinkPage_Button" onClick={() => onHandleLemonadeClick(-1)}>-</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Tea</td>
                            <td>{ formatUSD(AppConfig.prices.filter(i=>i.type === "tea")[0].price) }</td>
                            <td>x</td>
                            <td><input value={theDrinks.tea} readOnly={true} ref={inputRef} className = "DrinkPage_Input"></input></td>
                            <td>
                                <button className="DrinkPage_Button" onClick={() => onHandleTeaClick(1)}>+</button>
                                <button className="DrinkPage_Button" onClick={() => onHandleTeaClick(-1)}>-</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Coffee</td>
                            <td>{ formatUSD(AppConfig.prices.filter(i=>i.type === "coffee")[0].price) }</td>
                            <td>x</td>
                            <td><input value={theDrinks.coffee} readOnly={true} ref={inputRef} className = "DrinkPage_Input"></input></td>
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
