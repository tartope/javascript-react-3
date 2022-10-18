import './App.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function App() {
  const [show, setShow] = useState(false);
  let [showFood, setShowFood] = useState(true);
  let [showDrink, setShowDrink] = useState(false);
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
    <div className="App">
        <Button variant="primary" onClick={() => setShow(true)}>Show Sidebar</Button>
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
          showFood &&
          <div>
            Food
          </div>
        }
        {
          showDrink &&
          <div>
            Drink
          </div>
        }
        {
          showDessert &&
          <div>
            Dessert
          </div>
        }
    </div>
  );
}

export default App;
