import './App.css';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

function App() {
  const [show, setShow] = useState(false);
  let [counter, setCounter] = useState(0);
  let [showMenu, setShowMenu] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onHandleClick = () => {
     setCounter(++counter)
  }

  const onHandleLink = () => {
    setShowMenu(!showMenu)
    setShow(false)
  }

  return (
    <div className="App">
        <Button variant="primary" onClick={handleShow}>Sidebar</Button>
        <br />
        <br />
        <Button variant="primary" onClick={() => onHandleClick()}>Inc Counter</Button>
        <br />
        {counter}

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Options</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Button variant="primary" onClick={() => onHandleClick()}>Inc Counter</Button>
            <br />
            <Button variant="link" onClick={() => onHandleLink()}>Menu</Button>
          </Offcanvas.Body>
        </Offcanvas>
        {
          showMenu &&
          <div>
            Menu
          </div>
        }
      
    </div>
  );
}

export default App;
