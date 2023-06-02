import { useRecoilValue } from 'recoil'
import { buildOrder } from './Util/Order'
import { buildFoodOrder } from './Util/Order'
import Button from 'react-bootstrap/Button'
import { SidebarMenu } from './SidebarMenu'
import { orderedDrinks } from './Util/Atoms'
import { orderedFoods } from './Util/Atoms'
import { OrderSection } from './OrderSection'
import './SidebarContent.scss'

export const SidebarContent = ({onHandleLink, onHandleCheckout}) => {
    const {drinksOrder, drinksTotal} = buildOrder(useRecoilValue(orderedDrinks)) 
    const { foodsOrder, foodsTotal } = buildFoodOrder(useRecoilValue(orderedFoods))

    return (
        <div className='SidebarContent'>
            <SidebarMenu onHandleLink={(page) => onHandleLink(page)}/>
            <hr />
            <OrderSection drinksTotal={drinksTotal} drinksOrder={drinksOrder} foodsOrder={foodsOrder} foodsTotal={foodsTotal}/>
            <hr />
            <div className='SidebarContent_Checkout'>
                <Button 
                    variant="primary" 
                    disabled={(drinksTotal > 0) ? false : true} 
                    onClick={() => onHandleCheckout(drinksTotal, drinksOrder)}>Checkout
                </Button>
            </div>
        </div>
    )
}
