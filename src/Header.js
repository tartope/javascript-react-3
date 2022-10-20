import { useRecoilState } from 'recoil'
import { useRecoilValue } from 'recoil'
import { drinkData } from './Util/Atoms' 
import { showSideDrawer } from './Util/Atoms'
import './Header.scss'

export const Header = () => {
    const [, setShowSideDrawer] = useRecoilState(showSideDrawer)
    let theDrinkData = useRecoilValue(drinkData) 

    const getQuantity = () => {
        return parseInt(theDrinkData.tea) + parseInt(theDrinkData.coffee) + parseInt(theDrinkData.lemonade)
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
            <div>
                <img className="Header_hamburger" onClick={() => setShowSideDrawer(true)} src="hamburger.png" alt="menu"></img>
                </div>
                <div className="Header_logo_area">
                <div className="Header_logo">The Coffee Place</div>
                <div className="Header_cart" onClick={() => setShowSideDrawer(true)}>
                    <img width="40px" src="shopping-cart.png" alt="shopping cart"/>
                    <div className={getClassName()}>{getQuantity()}</div>
                </div>
            </div>
        </div>
    )
}
