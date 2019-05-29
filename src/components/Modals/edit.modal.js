import React from "react";
import { Form, Col, Modal, Button } from "react-bootstrap";
import CheckItem from "../CheckItem";
import { labelConstants } from "../../_constants";

let enabledLabels = [
  labelConstants.RED,
  labelConstants.GREEN,
  labelConstants.BLUE,
  labelConstants.PURPLE,
  labelConstants.DARKEN,
  labelConstants.TEAL,
  labelConstants.YELLOW,
  labelConstants.MAGENTA
];

let initialState = {};

class EditModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.id || null,
      name: props.name || "",
      author: props.executant || "",
      timeCreation: null,
      timeEdition: null,
      label: props.label || "",
      comment: props.comment || "",
      checkList: props.checkList || [],
      image: props.image || null
    };

    this.newCheckItemInputRef = React.createRef();
  }

  setInitialState = () => {
    initialState = {
      id: this.props.id || null,
      name: this.props.name || "",
      executant: this.props.executant || "",
      label: this.props.label || labelConstants.BLUE,
      comment: this.props.comment || "",
      checkList: this.props.checkList || [],
      image: this.props.image || null
    };
  };

  clearState = () => {
    this.setState({
      id: null,
      name: "",
      author: "",
      timeCreation: null,
      timeEdition: null,
      label: labelConstants.BLUE,
      comment: "",
      checkList: [],
      image: null
    });
  };

  closeModal = () => {
    this.clearState();
    this.props.handleClose();
  };

  saveAndCloseModal = () => {
    if (this.props.card) {
      this.props.handleSave({
        id: this.props.id,
        name: this.state.name || initialState.name,
        author: this.state.author || initialState.executant,
        label: this.state.label || initialState.label,
        comment: this.state.comment || initialState.comment,
        checkList: this.state.checkList || initialState.checkList,
        image: this.state.image || initialState.image,
        dateCreate: this.props.dateCreate || initialState.dateCreate
      });
    } else {
      this.props.handleSave({
        id: this.props.id,
        name: this.state.name || initialState.name,
        author: this.state.author || initialState.executant
      });
    }
    this.clearState();
  };

  addCheckItem = () => {
    const currentCheckList =
      this.state.checkList.length > 0
        ? this.state.checkList
        : initialState.checkList;
    currentCheckList.push({
      id: Math.random() * (1000 - 1) + 1,
      isCheck: false,
      text: this.newCheckItemInputRef.current.value
    });
    this.newCheckItemInputRef.current.value = "";
    this.setState({ checkList: currentCheckList });
  };

  checkItem = id => {
    const currentCheckList =
      this.state.checkList.length > 0
        ? this.state.checkList
        : initialState.checkList;
    const newCheckList = currentCheckList.map(checkItem => {
      if (checkItem.id === id) {
        checkItem.isCheck = !checkItem.isCheck;
        return checkItem;
      } else {
        return checkItem;
      }
    });
    this.setState({ checkList: newCheckList });
  };

  imageUpload = e => {
    let image = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = () => {
      this.setState({
        image: reader.result
      });
    };
  };

  render() {
    this.setInitialState();
    return (
      <Modal show={this.props.show} onHide={this.closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {initialState.name ? `Редагувати ${initialState.name}` : "Додати"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Col} controlId="validationFormik01">
            <Form.Label>Назва</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={this.state.name || initialState.name}
              onChange={e => {
                this.setState({ name: e.target.value });
              }}
            />
          </Form.Group>
          {this.props.card && (
            <React.Fragment>
              <Form.Group as={Col} controlId="validationFormik02">
                <Form.Label>Виконавець</Form.Label>
                <Form.Control
                  type="text"
                  name="author"
                  value={this.state.author || initialState.executant}
                  onChange={e => {
                    this.setState({ author: e.target.value });
                  }}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="validationFormik03">
                <Form.Label>Мітка</Form.Label>
                <div className="selected-label-block">
                  <span className="selected-label-block_text">
                    Вибрана мітка
                  </span>
                  <div
                    className={`label label_${this.state.label ||
                      initialState.label}`}
                  />
                </div>
                <div className="label-picker">
                  {enabledLabels.map((label, index) => {
                    return (
                      <div
                        key={index}
                        className={`label label_${label}`}
                        onClick={() =>
                          this.setState({
                            label: labelConstants[label]
                          })
                        }
                      />
                    );
                  })}
                </div>
              </Form.Group>
              <Form.Group as={Col} controlId="validationFormik04">
                <Form.Label>Коментарій</Form.Label>
                <textarea
                  className="form-control"
                  value={this.state.comment || initialState.comment}
                  onChange={e => {
                    this.setState({ comment: e.target.value });
                  }}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="validationFormik05">
                <Form.Label>Чек - ліст</Form.Label>
                <div className="check-list">
                  {this.state.checkList.length > 0 ? (
                    this.state.checkList.map((checkItem, index) => {
                      return (
                        <CheckItem
                          key={index}
                          id={checkItem.id}
                          isCheck={checkItem.isCheck}
                          text={checkItem.text}
                          checkClick={this.checkItem}
                        />
                      );
                    })
                  ) : initialState.checkList.length > 0 ? (
                    initialState.checkList.map((checkItem, index) => {
                      return (
                        <CheckItem
                          key={index}
                          id={checkItem.id}
                          isCheck={checkItem.isCheck}
                          text={checkItem.text}
                          checkClick={this.checkItem}
                        />
                      );
                    })
                  ) : (
                    <span>Чек - ліст пустий</span>
                  )}
                  <div className="new-check-item">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Введіть підзадачу"
                      ref={this.newCheckItemInputRef}
                    />
                    <Button className="purple-btn" onClick={this.addCheckItem}>
                      + Додати крок
                    </Button>
                  </div>
                </div>
              </Form.Group>
              <Form.Group as={Col} controlId="validationFormik06">
                <Form.Label>Зображення</Form.Label>
                <div className="image-block">
                  {this.state.image || initialState.image ? (
                    <img
                      src={this.state.image || initialState.image}
                      alt="CardImg"
                    />
                  ) : (
                    <span>Зображення не вибрано</span>
                  )}
                  <input type="file" onChange={e => this.imageUpload(e)} />
                </div>
              </Form.Group>
            </React.Fragment>
          )}
          <Form.Group as={Col} controlId="validationFormik07">
            <div className="buttons-group">
              <Button
                className="accept-btn"
                type="submit"
                onClick={this.saveAndCloseModal}
              >
                Зберегти
              </Button>
              <Button className="reject-btn" onClick={this.closeModal}>
                Закрити
              </Button>
            </div>
          </Form.Group>
        </Modal.Body>
      </Modal>
    );
  }
}

export default EditModal;
