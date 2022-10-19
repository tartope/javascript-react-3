import { useRecoilState } from 'recoil'
import { showSideDrawer } from './Util/Atoms'
import './Header.scss'

export const Header = () => {
    const [, setShowSideDrawer] = useRecoilState(showSideDrawer);

    return (
        <div className="Header">
            <div>
                <img className="App_hamburger" onClick={() => setShowSideDrawer(true)} src="hamburger.png" alt="menu"></img>
                </div>
                <div className="App_logo_area">
                <div className="App_logo">The Coffee Place</div>
                <div>
                    <img width="40px" src="shopping-cart.png" alt="shopping cart"/>
                    <div className="App_qty">1</div>
                </div>
            </div>
        </div>
    )
}
