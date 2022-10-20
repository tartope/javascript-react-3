import { Header } from './Header'
import { Content } from './Content'
import { drinkData } from './Util/Atoms'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { showSideDrawer } from './Util/Atoms'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { SidebarContent } from './SidebarContent'
import React, { useEffect, useState } from 'react'
import { useRecoilState, useResetRecoilState } from 'recoil'
import * as localStorageProxy from './Util/LocalStorageProxy'
import './App.scss'

function App() {
  let [showHome, setShowHome] = useState(true)
  let [showFood, setShowFood] = useState(false)
  let [showDrink, setShowDrink] = useState(false)
  let [showSales, setShowSales] = useState(false)
  let [showModal, setShowModal] = useState(false)
  let [showDessert, setShowDessert] = useState(false)
  const resetDrinkState = useResetRecoilState(drinkData)
  let [showTheSideDrawer, setShowSideDrawer] = useRecoilState(showSideDrawer);

  useEffect(() => {
    localStorageProxy.initLocalStorageProxy()
  }, [])

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

  const onHandleCheckout = (total, completedOrder) => {
    const orders = localStorageProxy.getOrders()
    orders.push({
      id: orders.length + 1,
      items: completedOrder,
      total: total,
      date: new Date().toLocaleDateString()
    })
    localStorageProxy.setOrders(orders)
    setShowModal(true)
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
            <SidebarContent 
              onHandleLink={(page) => onHandleLink(page)}
              onHandleCheckout={(totalPrice, order) => onHandleCheckout(totalPrice, order)}
            />
          </Offcanvas.Body>
        </Offcanvas>
        <Content 
          showHome={showHome} 
          showFood={showFood} 
          showDrink={showDrink}
          showDessert={showDessert} 
          showSales={showSales} 
        />
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>The Coffee Shop</Modal.Title>
          </Modal.Header>
          <Modal.Body>Thank you for your order!</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={() => setShowModal(false)}>Close</Button>
          </Modal.Footer>
        </Modal>
    </div>
  );
}

export default App;
