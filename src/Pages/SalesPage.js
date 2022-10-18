import React from 'react'
import { useRecoilValue } from 'recoil'
import { lemonadeCounter } from '../Util/Atoms'
import './SalesPage.scss'

export const SalesPage = () => {
    let lemonadeCount = useRecoilValue(lemonadeCounter)
        
    return (
        <div className = "SalesPage">
            SalesPage 
            <br />
            { lemonadeCount}
        </div>
    )
}
