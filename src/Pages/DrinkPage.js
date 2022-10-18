import React from 'react'
import { useRecoilState } from 'recoil'
import Button from 'react-bootstrap/Button'
import { lemonadeCounter } from '../Util/Atoms'
import './DrinkPage.scss'

export const DrinkPage = () => {
    let [theLemondeCounter, setTheLemondeCounter] = useRecoilState(lemonadeCounter)

    const onHandleClick = () => {
        setTheLemondeCounter(++theLemondeCounter) 
    }

    return (
        <div>
            <Button variant="primary" onClick={() => onHandleClick()}>Increment</Button>
            <br />
            Counter: {theLemondeCounter}
        </div>
    )
}
