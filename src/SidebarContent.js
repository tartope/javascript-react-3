import { useRecoilValue } from 'recoil'
import { drinkData } from './Util/Atoms'
import * as AppConfig from './Util/App.Config'
import Button from 'react-bootstrap/Button'
import './SidebarContent.scss'

export const SidebarContent = ({onHandleLink, onHandleCheckout}) => {
    let grandTotal = 0
    const drinks = useRecoilValue(drinkData)
    const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
 
    const getPriceForDrink = (type) => {
        return AppConfig.prices.filter(p=>p.type === type)[0].price
    }

    // Convert drink object to array for display.
    let d = Object.keys(drinks)
    let array = d.map(i => {
        return {
            type: i,
            qty: drinks[i]
        }
    })

    // Calculate total.
    let priceArray = array.map(i => {
        return i.qty * getPriceForDrink(i.type)
    })
    grandTotal = priceArray.reduce((a,b) => a + b, 0)

    return (
        <div className='SidebarContent'>
            <div className='SidebarContent_NavItem' onClick={() => onHandleLink("Home")}>
                <div>Home</div>
                <div>icon</div>
            </div>
            <div className='SidebarContent_NavItem' onClick={() => onHandleLink("Food")}>
                <div>Food</div>
                <div>icon</div>
            </div>
            <div className='SidebarContent_NavItem' onClick={() => onHandleLink("Drink")}>
                <div>Drink</div>
                <div>icon</div>
            </div>
            <div className='SidebarContent_NavItem' onClick={() => onHandleLink("Dessert")}>
                <div>Dessert</div>
                <div>icon</div>
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
                <strong>Drinks</strong>
            }
            { 
                array.map(i => {
                    if (i.qty > 0) {
                        return <div key={i.type}>{i.type}: {i.qty} x { formatter.format(getPriceForDrink(i.type)) }</div>
                    } else
                        return null
                })
            }
            {
                grandTotal === 0 &&
                <div>Your cart is empty.</div>
            }
            <hr />
            Your Total: { formatter.format(grandTotal)}
            <hr />
            <Button variant="primary" onClick={() => onHandleCheckout(grandTotal)}>Checkout</Button>
        </div>
    )
}
