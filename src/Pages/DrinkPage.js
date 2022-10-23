import React from 'react'
import { Footer } from '../Footer'
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
                        <Image width='800px' rounded={true} fluid={true} src='coffee.jpg' alt='coffee' />
                        <br /><br />
                        <Image width='800px' rounded={true} fluid={true} src='tea.jpg' alt='tea' />
                        <br /><br />
                        <Image width='800px' rounded={true} fluid={true} src='lemonade.jpg' alt='lemonade' />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
