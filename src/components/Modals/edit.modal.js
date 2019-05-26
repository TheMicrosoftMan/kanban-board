import React from "react";
import { Form, Col, Modal, Button } from "react-bootstrap";
import CheckItem from "../CheckItem";
import { labelConstants } from "../../_constants";

let enabledLabels = [
  labelConstants.RED,
  labelConstants.GREEN,
  labelConstants.BLUE
];

class EditModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.id || null,
      name: props.name || "",
      author: props.executant || "",
      timeCreation: null,
      timeEdition: null,
      label: props.label || labelConstants.BLUE,
      comment: props.comment || "",
      checkList: props.checkList || [],
      image: props.image || null
    };

    this.newCheckItemInputRef = React.createRef();
  }

  addCheckItem = () => {
    const currentCheckList = this.state.checkList;
    currentCheckList.push({
      id: Math.random() * (1000 - 1) + 1,
      isCheck: false,
      text: this.newCheckItemInputRef.current.value
    });
    this.newCheckItemInputRef.current.value = "";
    this.setState({ checkList: currentCheckList });
  };

  checkItem = id => {
    const currentCheckList = this.state.checkList;
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
    return (
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit {this.props.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Col} controlId="validationFormik01">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={this.state.name}
              onChange={e => {
                this.setState({ name: e.target.value });
              }}
            />
          </Form.Group>
          {this.props.card && (
            <React.Fragment>
              <Form.Group as={Col} controlId="validationFormik02">
                <Form.Label>Автор</Form.Label>
                <Form.Control
                  type="text"
                  name="author"
                  value={this.state.author}
                  onChange={e => {
                    this.setState({ author: e.target.value });
                  }}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="validationFormik02">
                <Form.Label>Мітка</Form.Label>
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
              <Form.Group as={Col} controlId="validationFormik02">
                <Form.Label>Коментарій</Form.Label>
                <Form.Control
                  type="text"
                  name="comment"
                  value={this.state.comment}
                  onChange={e => {
                    this.setState({ comment: e.target.value });
                  }}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="validationFormik02">
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
                  ) : (
                    <span>Чек - ліст пустий</span>
                  )}
                  <div className="new-check-item">
                    <input type="text" ref={this.newCheckItemInputRef} />
                    <button type="button" onClick={this.addCheckItem}>
                      Add checkItem
                    </button>
                  </div>
                </div>
              </Form.Group>
              <Form.Group as={Col} controlId="validationFormik02">
                <Form.Label>Зображення</Form.Label>
                {this.state.image && (
                  <img src={this.state.image} alt="CardImg" />
                )}
                <input type="file" onChange={e => this.imageUpload(e)} />
              </Form.Group>
            </React.Fragment>
          )}
          <Button
            variant="secondary"
            type="submit"
            onClick={() => {
              if (this.props.card) {
                this.props.handleSave({
                  id: this.props.id,
                  name: this.state.name,
                  author: this.state.author,
                  label: this.state.label,
                  comment: this.state.comment,
                  checkList: this.state.checkList,
                  image: this.state.image,
                  dateCreate: this.props.dateCreate
                });
              } else {
                this.props.handleSave({
                  id: this.props.id,
                  name: this.state.name,
                  author: this.state.author
                });
              }
            }}
          >
            Save
          </Button>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Close
          </Button>
        </Modal.Body>
      </Modal>
    );
  }
}

export default EditModal;
