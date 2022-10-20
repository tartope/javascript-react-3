import { useRecoilValue } from 'recoil'
import { formatUSD } from './Util/Money'
import { drinkData } from './Util/Atoms'
import { buildOrder } from './Util/Order'
import { OrderTable } from './OrderTable'
import Button from 'react-bootstrap/Button'
import { SidebarMenu } from './SidebarMenu'
import './SidebarContent.scss'

export const SidebarContent = ({onHandleLink, onHandleCheckout}) => {
    let {order, total} = buildOrder(useRecoilValue(drinkData))

    return (
        <div className='SidebarContent'>
            <SidebarMenu onHandleLink={(page) => onHandleLink(page)}/>
            <hr />
            <div className='SidebarContent_Title'>
                Your Order
            </div>
            {
                total > 0 && 
                <>
                    <strong>Drinks</strong>
                    <OrderTable completeOrder={order}/>
                </>
            }
            {
                total === 0 && <> Your cart is empty. </>
            }
            <hr />
            <div className='SidebarContent_Total'>
                Total:<span>{ formatUSD(total)}</span>
            </div>
            <hr />
            <div className='SidebarContent_Checkout'>
                <Button disabled={(total > 0) ? false : true} variant="primary" onClick={() => onHandleCheckout(total, order)}>Checkout</Button>
            </div>
        </div>
    )
}
