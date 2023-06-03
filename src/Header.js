import { useRecoilState } from 'recoil'
import { useRecoilValue } from 'recoil'
import { orderedDesserts, orderedDrinks, orderedFoods } from './Util/Atoms' 
import { showSideDrawer } from './Util/Atoms'
import { getTotalNumberDrinks, getTotalNumberFoods, getTotalNumberDesserts } from './Util/Order'
import './Header.scss'

export const Header = () => {
    const drinks = useRecoilValue(orderedDrinks) 
    const foods = useRecoilValue(orderedFoods)
    const desserts = useRecoilValue(orderedDesserts)
    const [, setShowSideDrawer] = useRecoilState(showSideDrawer)

    const getQuantity = () => {
        return getTotalNumberDrinks(drinks) + getTotalNumberFoods(foods) + getTotalNumberDesserts(desserts)
    }

    const getClassName = () => {
        return (getQuantity() < 10) ? 'Header_Qty_Small' : 'Header_Qty_Large' 
    }

    return (
        <div className='Header'>
            <div className='Header_Hamburger'>
                <img 
                    onClick={() => setShowSideDrawer(true)} 
                    height='40px' 
                    width='40px' 
                    src='hamburger.png' 
                    alt='menu'>
                </img>
            </div>
            <div className='Header_Logo_Area'>
                <div className='Header_Logo Product_Font'>
                    The Coffee Place
                </div>
                <div className='Header_Cart' onClick={() => setShowSideDrawer(true)}>
                    <img width='40px' src='shopping-cart.png' alt='shopping cart'/>
                    <div className={ getClassName() }>{ getQuantity() }</div>
                </div>
            </div>
        </div>
    )
}
