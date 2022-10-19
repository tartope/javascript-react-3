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
  const [show, setShow] = useState(false);
  let [showHome, setShowHome] = useState(false);
  let [showFood, setShowFood] = useState(false);
  let [showDrink, setShowDrink] = useState(true);
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
    setShow(false) // Close the sidebar.
  }

  const onHandleCheckout = () => {
    console.log("Checkout")
  }

  return (
    <div className="App">
        <div className="App_header">
          <div>
            <img className="App_hamburger" onClick={() => setShow(true)} src="hamburger.png" alt="menu"></img>
          </div>
          <div className="App_logo_area">
            <div className="App_logo">The Coffee Place</div>
            <div>
                <img width="40px" src="shopping-cart.png" alt="shopping cart"/>
                <div className="App_qty">1</div>
            </div>
          </div>
        </div>
        <Offcanvas show={show} onHide={() => setShow(false)}>
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
