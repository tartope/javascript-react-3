import { Header } from './Header'
import { Content } from './Content'
import React, { useState } from 'react'
import { drinkData } from './Util/Atoms'
import { showSideDrawer } from './Util/Atoms'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { SidebarContent } from './SidebarContent'
import { useRecoilState, useRecoilValue } from 'recoil'
import './App.scss'

function App() {
  let [showHome, setShowHome] = useState(false);
  let [showFood, setShowFood] = useState(false);
  let [showDrink, setShowDrink] = useState(true);
  let [showSales, setShowSales] = useState(false);
  let [showDessert, setShowDessert] = useState(false);
  let [showTheSideDrawer, setShowSideDrawer] = useRecoilState(showSideDrawer);
  const drinks = useRecoilValue(drinkData)

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
    console.log(drinks)
  }

  return (
    <div className="App">
        <Header />
        <Offcanvas show={showTheSideDrawer} onHide={() => setShowSideDrawer(false)}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>The Coffee Place</Offcanvas.Title>
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
