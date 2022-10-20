import { useRecoilState } from 'recoil'
import { useRecoilValue } from 'recoil'
import { drinkData } from './Util/Atoms' 
import { showSideDrawer } from './Util/Atoms'
import './Header.scss'

export const Header = () => {
    const [, setShowSideDrawer] = useRecoilState(showSideDrawer)
    const drinks = useRecoilValue(drinkData) 

    const getQuantity = () => {
        let totalDrinks = (drinks.tea + drinks.coffee + drinks.lemonade)
        return totalDrinks
    }

    const getClassName = () => {
        if (getQuantity() < 9) {
          return "Header_qty_1"
        } else {
          return "Header_qty_2" 
        }
    }

    return (
        <div className="Header">
            <div className="Header_Hamburger">
                <img onClick={() => setShowSideDrawer(true)} height="40px" width="40px" src="hamburger.png" alt="menu"></img>
            </div>
            <div className="Header_Logo_Area">
                <div className="Header_Logo">The Coffee Place</div>
                <div className="Header_Cart" onClick={() => setShowSideDrawer(true)}>
                    <img width="40px" src="shopping-cart.png" alt="shopping cart"/>
                    <div className={getClassName()}>{getQuantity()}</div>
                </div>
            </div>
        </div>
    )
}
