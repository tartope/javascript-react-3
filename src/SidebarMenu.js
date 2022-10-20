import React from 'react'
import './SidebarMenu.scss'

export const SidebarMenu = ({onHandleLink}) => {
    return (
        <div className='SidebarMenu'>
            <div className='SidebarMenu_NavItem' onClick={() => onHandleLink("Home")}>
                <div>Home</div>
                <div><img width="20px" src="home-icon.png" alt="food" /></div>
            </div>
            <div className='SidebarMenu_NavItem' onClick={() => onHandleLink("Drink")}>
                <div>Drinks</div>
                <div><img width="20px" src="coffee-icon.png" alt="food" /></div>
            </div>
            <div className='SidebarMenu_NavItem' onClick={() => onHandleLink("Food")}>
                <div>Food</div>
                <div><img width="20px" src="food-icon.png" alt="food" /></div>
            </div>
            <div className='SidebarMenu_NavItem' onClick={() => onHandleLink("Dessert")}>
                <div>Dessert</div>
                <div><img width="20px" src="cake-icon.png" alt="food" /></div>
            </div>
            <hr />
            <div className='SidebarMenu_NavItem' onClick={() => onHandleLink("Order History")}>
                <div>Order History</div>
                <div>$$$</div>
            </div>
        </div>
    )
}
