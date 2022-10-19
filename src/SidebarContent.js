import Button from 'react-bootstrap/Button'
import './SidebarContent.scss'

export const SidebarContent = ({onHandleLink, onHandleCheckout}) => {
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
            <div className='SidebarContent_NavItem' onClick={() => onHandleLink("Order History")}>
                <div>Order History</div>
                <div>icon</div>
            </div>
            <hr />
            Your Order <br/>
            Your cart is empty<br/>
            - Item 1 <br/>
            - Item 2 <br/>
            - Item 3 <br/>
            <hr />
            Your Total: $0.00
            <hr />
            <Button variant="primary" onClick={() => onHandleCheckout()}>Checkout</Button>
        </div>
    )
}
