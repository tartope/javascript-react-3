import { useRecoilValue } from 'recoil'
import { drinkData } from './Util/Atoms'
import * as AppConfig from './Util/App.Config'
import Button from 'react-bootstrap/Button'
import './SidebarContent.scss'
import { SidebarOrderTable } from './SidebarOrderTable'

export const SidebarContent = ({onHandleLink, onHandleCheckout}) => {
    let grandTotal = 0
    const drinks = useRecoilValue(drinkData)

    const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
 
    const getPriceForDrink = (type) => {
        return AppConfig.prices.filter(p=>p.type === type)[0].price
    }

    // Convert drink object to array.
    let d = Object.keys(drinks)
    let purchasedItems = d.map(i => {
        return {
            type: i,
            qty: drinks[i]
        }
    })

    // Calculate total.
    let priceArray = purchasedItems.map(i => {
        return i.qty * getPriceForDrink(i.type)
    })
    grandTotal = priceArray.reduce((a,b) => a + b, 0)

    return (
        <div className='SidebarContent'>
            <div className='SidebarContent_NavItem' onClick={() => onHandleLink("Home")}>
                <div>Home</div>
                <div><img width="20px" src="home-icon.png" alt="food" /></div>
            </div>
            <div className='SidebarContent_NavItem' onClick={() => onHandleLink("Drink")}>
                <div>Drink</div>
                <div><img width="20px" src="coffee-icon.jpg" alt="food" /></div>
            </div>
            <div className='SidebarContent_NavItem' onClick={() => onHandleLink("Food")}>
                <div>Food</div>
                <div><img width="20px" src="food-icon.png" alt="food" /></div>
            </div>
            <div className='SidebarContent_NavItem' onClick={() => onHandleLink("Dessert")}>
                <div>Dessert</div>
                <div><img width="30px" src="cake-icon.png" alt="food" /></div>
            </div>
            <hr />
            <div className='SidebarContent_NavItem' onClick={() => onHandleLink("Order History")}>
                <div>Order History</div>
                <div>$$$</div>
            </div>
            <hr />
            <div className='SidebarContent_Title'>
                Your Order
            </div>
            {
                grandTotal > 0 && 
                <>
                    <strong>Drinks</strong>
                    <SidebarOrderTable purchasedItems={purchasedItems}/>
                </>
            }
            {
                grandTotal === 0 && <> Your cart is empty. </>
            }
            <hr />
            <div className='SidebarContent_Total'>
                Total:<span>{ formatter.format(grandTotal)}</span>
            </div>
            <hr />
            <div className='SidebarContent_Checkout'>
                <Button variant="primary" onClick={() => onHandleCheckout(grandTotal)}>Checkout</Button>
            </div>
        </div>
    )
}
