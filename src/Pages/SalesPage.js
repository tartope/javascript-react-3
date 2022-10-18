import React from 'react'
import { useRecoilValue } from 'recoil'
import { drinkData } from '../Util/Atoms'
import * as AppConfig from '../Util/App.Config'
import './SalesPage.scss'

export const SalesPage = () => {
    let theDrinkData = useRecoilValue(drinkData)
    const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
    const totalLemonade = AppConfig.lemonadePrice * theDrinkData.lemonade
    const totalTea = AppConfig.teaPrice * theDrinkData.tea
    const totalCoffee = AppConfig.coffeePrice * theDrinkData.coffee
    const grandTotal = totalLemonade + totalTea + totalCoffee

    return (
        <div className = "SalesPage">
            <div className = "SalesPage_Header">
                Sales
            </div>
            Lemonade: { formatter.format(AppConfig.lemonadePrice)} x {theDrinkData.lemonade} = { formatter.format(totalLemonade) }<br />
            Tea: { formatter.format(AppConfig.teaPrice)} x {theDrinkData.tea} = { formatter.format(totalTea) }<br />
            Coffee: { formatter.format(AppConfig.coffeePrice)} x {theDrinkData.coffee} = { formatter.format(totalCoffee) }<br />
            <br />
            Total: { formatter.format(grandTotal)}
        </div>
    )
}
