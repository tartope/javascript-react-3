import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

export const ModalCheckout = ({showModal, setShowModal}) => {
  return (
    <div>
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>The Coffee Place</Modal.Title>
          </Modal.Header>
          <Modal.Body>Thank you for your order!</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={() => setShowModal(false)}>Close</Button>
          </Modal.Footer>
        </Modal>
    </div>
  )
}
