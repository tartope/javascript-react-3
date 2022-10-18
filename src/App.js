import './App.scss'
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { FoodPage } from './Pages/FoodPage';
import { DrinkPage } from './Pages/DrinkPage';
import { DessertPage } from './Pages/DessertPage';

function App() {
  const [show, setShow] = useState(false);
  let [showFood, setShowFood] = useState(false);
  let [showDrink, setShowDrink] = useState(true);
  let [showDessert, setShowDessert] = useState(false);

  const onHandleLink = (page) => {
    setShowFood(false)
    setShowDrink(false)
    setShowDessert(false)
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
      default:
    }
    setShow(false) // Close the sidebar.
  }

  return (
    <div className = "App">
        <div className = "header">
          <Button variant="primary" onClick={() => setShow(true)}>Menu</Button>
        </div>
        <br />
        <Offcanvas show={show} onHide={() => setShow(false)}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Button variant="link" onClick={() => onHandleLink("Food")}>Food</Button><br />
            <Button variant="link" onClick={() => onHandleLink("Drink")}>Drink</Button><br />
            <Button variant="link" onClick={() => onHandleLink("Dessert")}>Dessert</Button><br />
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
    </div>
  );
}

export default App;
