import { useRecoilValue } from 'recoil'
import { drinkData } from './Util/Atoms'
import { buildOrder } from './Util/Order'
import Button from 'react-bootstrap/Button'
import { SidebarMenu } from './SidebarMenu'
import './SidebarContent.scss'
import { OrderSection } from './OrderSection'

export const SidebarContent = ({onHandleLink, onHandleCheckout}) => {
    let {order, total} = buildOrder(useRecoilValue(drinkData))

    return (
        <div className='SidebarContent'>
            <SidebarMenu onHandleLink={(page) => onHandleLink(page)}/>
            <hr />
            <OrderSection total={total} order={order} />
            <hr />
            <div className='SidebarContent_Checkout'>
                <Button disabled={(total > 0) ? false : true} variant="primary" onClick={() => onHandleCheckout(total, order)}>Checkout</Button>
            </div>
        </div>
    )
}
