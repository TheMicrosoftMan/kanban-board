import React from "react";
import { Modal, Button } from "react-bootstrap";

const DeleteModal = props => {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Delete {props.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>Delete {props.name}?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={() => props.handleSave(props.id)}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteModal;
