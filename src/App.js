import { Header } from './Header'
import { Content } from './Content'
import React, { useState } from 'react'
import { drinkData } from './Util/Atoms'
import { showSideDrawer } from './Util/Atoms'
import * as AppConfig from './Util/App.Config'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { SidebarContent } from './SidebarContent'
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil'
import './App.scss'

function App() {
  const drinks = useRecoilValue(drinkData)
  let [showHome, setShowHome] = useState(false);
  let [showFood, setShowFood] = useState(false);
  let [showDrink, setShowDrink] = useState(true);
  let [showSales, setShowSales] = useState(false);
  let [showDessert, setShowDessert] = useState(false);
  const resetDrinkState = useResetRecoilState(drinkData)
  let [showTheSideDrawer, setShowSideDrawer] = useRecoilState(showSideDrawer);

  const onHandleLink = (page) => {
    setShowHome(false)
    setShowFood(false)
    setShowDrink(false)
    setShowDessert(false)
    setShowSales(false)
    switch (page) {
      case "Home":
        setShowHome(true)
        break;
      case "Food":
        setShowFood(true)
        break;
      case "Drink":
        setShowDrink(true)
        break;
      case "Dessert":
        setShowDessert(true)
        break;
      case "Order History":
        setShowSales(true)
        break;
      default:
    }
    setShowSideDrawer(false) // Close the sidebar.
  }

  const onHandleCheckout = (totalPrice) => {
    console.log("Checkout Total Price: " + totalPrice)
    console.log(AppConfig.prices)
    console.log(drinks)
    resetDrinkState()
  }

  return (
    <div className="App">
        <Header />
        <Offcanvas show={showTheSideDrawer} onHide={() => setShowSideDrawer(false)}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <div className='App_Title'>The Coffee Place</div>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <SidebarContent onHandleLink={(page) => onHandleLink(page)} onHandleCheckout={(totalPrice) => onHandleCheckout(totalPrice)}/>
          </Offcanvas.Body>
        </Offcanvas>
        <Content showHome={showHome} showFood={showFood} showDrink={showDrink} showDessert={showDessert} showSales={showSales} />
    </div>
  );
}

export default App;
