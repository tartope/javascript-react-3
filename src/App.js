import { Header } from './Header'
import { Content } from './Content'
import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import Button from 'react-bootstrap/Button'
import { showSideDrawer } from './Util/Atoms'
import Offcanvas from 'react-bootstrap/Offcanvas'
import './App.scss'

function App() {
  let [showHome, setShowHome] = useState(true);
  let [showFood, setShowFood] = useState(false);
  let [showDrink, setShowDrink] = useState(false);
  let [showSales, setShowSales] = useState(false);
  let [showDessert, setShowDessert] = useState(false);
  const [showTheSideDrawer, setShowSideDrawer] = useRecoilState(showSideDrawer);

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
      case "Sales":
        setShowSales(true)
        break;
      default:
    }
    setShowSideDrawer(false) // Close the sidebar.
  }

  const onHandleCheckout = () => {
    console.log("Checkout")
  }

  return (
    <div className="App">
        <Header />
        <Offcanvas show={showTheSideDrawer} onHide={() => setShowSideDrawer(false)}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>The Coffee Place Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Button variant="link" onClick={() => onHandleLink("Home")}>Home</Button><br />
            <Button variant="link" onClick={() => onHandleLink("Food")}>Food</Button><br />
            <Button variant="link" onClick={() => onHandleLink("Drink")}>Drink</Button><br />
            <Button variant="link" onClick={() => onHandleLink("Dessert")}>Dessert</Button><br />
            <Button variant="link" onClick={() => onHandleLink("Sales")}>Sales</Button><br />
            <hr />
            Your Order <br/>
            Your cart is empty<br/>
            - Item 1 <br/>
            - Item 2 <br/>
            - Item 3 <br/>
            <hr />
            Your Total: $0.00
            <hr />
            <Button variant="primary" onClick={() => onHandleCheckout()}>Checkout</Button>
          </Offcanvas.Body>
        </Offcanvas>
        <Content showHome={showHome} showFood={showFood} showDrink={showDrink} showDessert={showDessert} showSales={showSales} />
    </div>
  );
}

export default App;
