import React from "react";
import { Form, Col, Modal, Button } from "react-bootstrap";
import CheckItem from "../CheckItem";

const CardModal = props => {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Card {props.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group as={Col} controlId="validationFormik01">
          <Form.Label>Завдання</Form.Label>
          <p>{props.name}</p>
        </Form.Group>
        <Form.Group as={Col} controlId="validationFormik02">
          <Form.Label>Автор</Form.Label>
          <p>{props.executant}</p>
        </Form.Group>
        <Form.Group as={Col} controlId="validationFormik02">
          <Form.Label>Мітка</Form.Label>
          <div className="label-picker">
            <div className={`label label_${props.label}`} />
          </div>
        </Form.Group>
        <Form.Group as={Col} controlId="validationFormik02">
          <Form.Label>Коментарій</Form.Label>
          <p>{props.comment}</p>
        </Form.Group>
        <Form.Group as={Col} controlId="validationFormik02">
          <Form.Label>Чек - ліст</Form.Label>
          <div className="check-list">
            {props.checkList.length > 0 ? (
              props.checkList.map((checkItem, index) => {
                return (
                  <CheckItem
                    key={index}
                    id={checkItem.id}
                    isCheck={checkItem.isCheck}
                    text={checkItem.text}
                  />
                );
              })
            ) : (
              <span>Чек - ліст пустий</span>
            )}
          </div>
        </Form.Group>
        <Form.Group as={Col} controlId="validationFormik02">
          <p>Час створення: {props.dateCreate}</p>
          {props.dateEdit && <p>Час редагування: {props.dateEdit}</p>}
        </Form.Group>
        <Form.Group as={Col} controlId="validationFormik02">
          {props.image && <img src={props.image} alt="CardImg" />}
        </Form.Group>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default CardModal;
