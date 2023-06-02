import React from 'react'
import Image from 'react-bootstrap/Image'
import { DrinksTable } from '../DrinksTable'
import './DrinkPage.scss'

export const DrinkPage = () => {
    return (
        <div className='DrinkPage'>
            <div className='Center_Content'>
                <div className='DrinkPage_Header'>
                    Drinks
                </div>
                <div className='DrinkPage_Content'>
                    <DrinksTable />
                </div>
                <div className='DrinkPage_Content'>
                    <div className='DrinkPage_Pix'>
                        <Image width='800px' rounded={true} fluid={true} src='lemonade.jpg' alt='coffee' />
                        <br /><br />
                        <Image width='800px' rounded={true} fluid={true} src='tea.jpg' alt='tea' />
                        <br /><br />
                        <Image width='800px' rounded={true} fluid={true} src='coffee.jpg' alt='lemonade' />
                        <br /><br />
                        <Image width='800px' rounded={true} fluid={true} src='milk.jpg' alt='milk' />
                    </div>
                </div>
            </div>
        </div>
    )
}
