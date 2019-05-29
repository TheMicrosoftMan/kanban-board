import React from "react";
import { Form, Col, Modal, Button } from "react-bootstrap";

const DeleteModal = props => {
  return (
    <Modal show={props.show} onHide={props.handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Видалення {props.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group as={Col} controlId="validationFormik01">
          Видалити {props.name}?
        </Form.Group>
        <Form.Group as={Col} controlId="validationFormik02">
          <div className="buttons-group">
            <Button
              className="accept-btn"
              onClick={() => props.handleSave(props.id)}
            >
              Видалити
            </Button>
            <Button className="reject-btn" onClick={props.handleClose}>
              Закрити
            </Button>
          </div>
        </Form.Group>
      </Modal.Body>
    </Modal>
  );
};

export default DeleteModal;
