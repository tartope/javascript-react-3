import { Header } from './Header'
import { useRecoilState } from 'recoil'
import { showSideDrawer } from './Util/Atoms'
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import { HomePage } from './Pages/HomePage'
import { FoodPage } from './Pages/FoodPage'
import { DrinkPage } from './Pages/DrinkPage'
import { SalesPage } from './Pages/SalesPage'
import { DessertPage } from './Pages/DessertPage'
import Offcanvas from 'react-bootstrap/Offcanvas'
import './App.scss'

function App() {
  const [show, setShowSideDrawer] = useRecoilState(showSideDrawer);
  let [showHome, setShowHome] = useState(true);
  let [showFood, setShowFood] = useState(false);
  let [showDrink, setShowDrink] = useState(false);
  let [showDessert, setShowDessert] = useState(false);
  let [showSales, setShowSales] = useState(false);

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
        <Offcanvas show={show} onHide={() => setShowSideDrawer(false)}>
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

            Item 1 <br/>
            Item 2 <br/>
            Item 3 <br/>
            <hr />
            Your Total: $0.00
            <hr />
            <Button variant="primary" onClick={() => onHandleCheckout()}>Checkout</Button>
          </Offcanvas.Body>
        </Offcanvas>
        {
          showHome && < HomePage  />
        }
        {
          showFood && < FoodPage />
        }
        {
          showDrink && <DrinkPage />
        }
        {
          showDessert && <DessertPage />
        }
        {
          showSales && <SalesPage />
        }
    </div>
  );
}

export default App;
