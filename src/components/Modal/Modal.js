import React from "react";
import {Modal, Button} from "react-bootstrap"
import { useState } from "react";

const ModalPopUp = () => {
    const [isOpen ,setIsOpen] = useState(false);

    return (
        <div>
            <div className="d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
                <Button variant="primary" onClick={() => setIsOpen(true)}>
                    Launch demo modal
                </Button>
             </div>
            <Modal show={isOpen} onHide={() => setIsOpen(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Woohoo, you're reading this text in a modal!
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setIsOpen(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModalPopUp