import { useRecoilValue } from 'recoil'
import { buildOrder } from './Util/Order'
import Button from 'react-bootstrap/Button'
import { SidebarMenu } from './SidebarMenu'
import { orderedDrinks } from './Util/Atoms'
import { orderedFoods } from './Util/Atoms'
import { OrderSection } from './OrderSection'
import './SidebarContent.scss'

export const SidebarContent = ({onHandleLink, onHandleCheckout}) => {
    const {order, total} = buildOrder(useRecoilValue(orderedDrinks, orderedFoods)) 

    return (
        <div className='SidebarContent'>
            <SidebarMenu onHandleLink={(page) => onHandleLink(page)}/>
            <hr />
            <OrderSection total={total} order={order} />
            <hr />
            <div className='SidebarContent_Checkout'>
                <Button 
                    variant="primary" 
                    disabled={(total > 0) ? false : true} 
                    onClick={() => onHandleCheckout(total, order)}>Checkout
                </Button>
            </div>
        </div>
    )
}
