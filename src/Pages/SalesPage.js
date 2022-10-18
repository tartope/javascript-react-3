import React from 'react'
import { useRecoilValue } from 'recoil'
import { drinkData } from '../Util/Atoms'
import './SalesPage.scss'

export const SalesPage = () => {
    let lemonadeCount = useRecoilValue(drinkData)
        
    return (
        <div className = "SalesPage">
            SalesPage 
            <br />
            Lemonade: {lemonadeCount.lemonade }<br />
            Tea: {lemonadeCount.tea }<br />
            Coffee: {lemonadeCount.coffee }<br />
        </div>
    )
}
