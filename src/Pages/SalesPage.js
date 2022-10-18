import React from 'react'
import { useRecoilValue } from 'recoil'
import { lemonadeCounter } from '../Util/Atoms'

export const SalesPage = () => {
    let lemonadeCount = useRecoilValue(lemonadeCounter)
        
    return (
        <div>
            SalesPage 
            <br />
            { lemonadeCount}
        </div>
    )
}
