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
                 grandTotal > 0 &&
                <table className='SidebarContent_Table'>
                    <thead>
                        <tr>
                            <td>Item</td>
                            <td>Qty</td>
                            <td>Price</td>
                            <td>Subtotal</td>
                        </tr>
                    </thead>
                    <tbody>
                        { 
                            purchasedItems.map(i => {
                                if (i.qty > 0) {
                                    return <tr key={i.type}>
                                                <td >{i.type}</td>
                                                <td>{i.qty}</td>
                                                <td>{ formatter.format(getPriceForDrink(i.type)) } {' '}ea</td>
                                                <td>{formatter.format(getPriceForDrink(i.type) * i.qty)}</td>
                                            </tr>
                                } else {
                                    return null
                                }
                            })
                        }
                    </tbody>
                </table>  
            } 
            {
                grandTotal === 0 &&
                <div>Your cart is empty.</div>
            }
            <hr />
            <div className='SidebarContent_Total'>
                Your Total:<span>{ formatter.format(grandTotal)}</span>
            </div>
            <hr />
            <div className='SidebarContent_Checkout'>
                <Button variant="primary" onClick={() => onHandleCheckout(grandTotal)}>Checkout</Button>
            </div>
        </div>
    )
}
