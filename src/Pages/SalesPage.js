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
            {lemonadeCount.lemonade }
        </div>
    )
}
