import React from "react";
import { Form, Col, Modal, Button } from "react-bootstrap";
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
      checkList: props.checkList || []
    };
  }

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
                  {this.state.checkList.map((checkItem, index) => {
                    return (
                      <div key={index} className="check-item">
                        <div
                          className={checkItem.isCheck ? "check" : "no-check"}
                        />
                        <div className="check-item_text">{checkItem.text}</div>
                      </div>
                    );
                  })}
                  <div className="new-check-item">
                    <div className="no-check" />
                    <input type="text" />
                  </div>
                </div>
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
