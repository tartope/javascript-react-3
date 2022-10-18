import './App.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function App() {
  const [show, setShow] = useState(false);
  let [counter, setCounter] = useState(0);
  let [showFood, setShowFood] = useState(false);
  let [showDrink, setShowDrink] = useState(false);
  let [showDessert, setShowDessert] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onHandleClick = () => {
     setCounter(++counter)
  }

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
        <Button variant="primary" onClick={handleShow}>Show Sidebar</Button>
        <br />
        <br />
        <Button variant="primary" onClick={() => onHandleClick()}>Inc Counter</Button>
        <br />
        {counter}
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Sidebar</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Button variant="primary" onClick={() => onHandleClick()}>Inc Counter</Button><br />
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
