import React from "react";
import { Form, Col, Modal, Button } from "react-bootstrap";

class EditModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.name || "",
      executant: ""
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
            <Form.Group as={Col} controlId="validationFormik02">
              <Form.Label>Executant</Form.Label>
              <Form.Control
                type="text"
                name="executant"
                value={this.state.executant}
                onChange={e => {
                  this.setState({ executant: e.target.value });
                }}
              />
            </Form.Group>
          )}
          <Button
            variant="secondary"
            type="submit"
            onClick={() =>
              this.props.handleSave({
                id: this.props.id,
                name: this.state.name,
                executant: this.state.executant
              })
            }
          >
            Save
          </Button>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Close
          </Button>
          {/* </Form> */}
        </Modal.Body>
      </Modal>
    );
  }
}

export default EditModal;
