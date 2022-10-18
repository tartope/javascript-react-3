import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import { FoodPage } from './Pages/FoodPage'
import { DrinkPage } from './Pages/DrinkPage'
import { SalesPage } from './Pages/SalesPage'
import { DessertPage } from './Pages/DessertPage'
import Offcanvas from 'react-bootstrap/Offcanvas'
import './App.scss'

function App() {
  const [show, setShow] = useState(false);
  let [showFood, setShowFood] = useState(false);
  let [showDrink, setShowDrink] = useState(true);
  let [showDessert, setShowDessert] = useState(false);
  let [showSales, setShowSales] = useState(false);

  const onHandleLink = (page) => {
    setShowFood(false)
    setShowDrink(false)
    setShowDessert(false)
    setShowSales(false)
    switch (page){
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

  return (
    <div className = "App">
        <div className = "App_header">
          <Button variant="primary" onClick={() => setShow(true)}>Menu</Button>
        </div>
        <Offcanvas show={show} onHide={() => setShow(false)}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Button variant="link" onClick={() => onHandleLink("Food")}>Food</Button><br />
            <Button variant="link" onClick={() => onHandleLink("Drink")}>Drink</Button><br />
            <Button variant="link" onClick={() => onHandleLink("Dessert")}>Dessert</Button><br />
            <Button variant="link" onClick={() => onHandleLink("Sales")}>Sales</Button><br />
          </Offcanvas.Body>
        </Offcanvas>
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
