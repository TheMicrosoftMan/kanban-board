import React from "react";
import { Form, Col, Modal, Button } from "react-bootstrap";
import CheckItem from "../CheckItem";

const CardModal = props => {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Картка {props.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group as={Col} controlId="validationFormik01">
          <Form.Label>Завдання</Form.Label>
          <p>{props.name}</p>
        </Form.Group>
        {props.executant && (
          <Form.Group as={Col} controlId="validationFormik02">
            <Form.Label>Автор</Form.Label>
            <p>{props.executant}</p>
          </Form.Group>
        )}
        <Form.Group as={Col} controlId="validationFormik03">
          <Form.Label>Мітка</Form.Label>
          <div className="selected-label-block">
            <div className={`label label_${props.label}`} />
          </div>
        </Form.Group>
        {props.comment && (
          <Form.Group as={Col} controlId="validationFormik04">
            <Form.Label>Коментарій</Form.Label>
            <p>{props.comment}</p>
          </Form.Group>
        )}
        {props.checkList.length > 0 && (
          <Form.Group as={Col} controlId="validationFormik05">
            <Form.Label>Чек - ліст</Form.Label>
            <div className="check-list">
              {props.checkList.map((checkItem, index) => {
                return (
                  <CheckItem
                    key={index}
                    id={checkItem.id}
                    isCheck={checkItem.isCheck}
                    text={checkItem.text}
                  />
                );
              })}
            </div>
          </Form.Group>
        )}
        <Form.Group as={Col} controlId="validationFormik06">
          {props.image && (
            <div className="image-block">
              <img src={props.image} alt="CardImg" />
            </div>
          )}
        </Form.Group>
        <Form.Group as={Col} controlId="validationFormik07">
          <Form.Label>Час створення:</Form.Label>
          <p>{props.dateCreate}</p>
          {props.dateEdit && (
            <React.Fragment>
              <Form.Label>Час редагування:</Form.Label>
              <p>{props.dateEdit}</p>
            </React.Fragment>
          )}
        </Form.Group>
        <Button className="accept-btn" onClick={props.handleClose}>
          Закрити
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default CardModal;
