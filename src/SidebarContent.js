import { useRecoilValue } from 'recoil'
import { buildOrder, buildFoodOrder, buildDessertOrder } from './Util/Order'
import Button from 'react-bootstrap/Button'
import { SidebarMenu } from './SidebarMenu'
import { orderedDrinks, orderedFoods, orderedDesserts } from './Util/Atoms'
import { OrderSection } from './OrderSection'
import './SidebarContent.scss'

export const SidebarContent = ({onHandleLink, onHandleCheckout}) => {
    const {drinksOrder, drinksTotal} = buildOrder(useRecoilValue(orderedDrinks)) 
    const { foodsOrder, foodsTotal } = buildFoodOrder(useRecoilValue(orderedFoods))
    const { dessertsOrder, dessertsTotal } = buildDessertOrder(useRecoilValue(orderedDesserts))

    return (
        <div className='SidebarContent'>
            <SidebarMenu onHandleLink={(page) => onHandleLink(page)}/>
            <hr />
            <OrderSection drinksTotal={drinksTotal} drinksOrder={drinksOrder} foodsOrder={foodsOrder} foodsTotal={foodsTotal} dessertsOrder={dessertsOrder} dessertsTotal={dessertsTotal}/>
            <hr />
            <div className='SidebarContent_Checkout'>
                <Button 
                    variant="primary" 
                    disabled={(drinksTotal > 0 || foodsTotal > 0 || dessertsTotal > 0) ? false : true} 
                    onClick={() => onHandleCheckout(drinksTotal, drinksOrder, foodsTotal, foodsOrder, dessertsTotal, dessertsOrder)}>Checkout
                </Button>
            </div>
        </div>
    )
}
