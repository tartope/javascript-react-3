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
                <h2>Sales</h2>
            </div>
            Lemonade: { formatter.format(AppConfig.lemonadePrice)} * {theDrinkData.lemonade} = { formatter.format(totalLemonade) }<br />
            Tea: { formatter.format(AppConfig.lemonadePrice)} * {theDrinkData.tea} = { formatter.format(totalTea) }<br />
            Coffee: { formatter.format(AppConfig.lemonadePrice)} * {theDrinkData.coffee} = { formatter.format(totalCoffee) }<br />
            <br />
            Total: { formatter.format(grandTotal)}
        </div>
    )
}
