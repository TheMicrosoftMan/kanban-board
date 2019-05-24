import React from "react";
import DeleteModal from "../Modals/delete.modal";
import EditModal from "../Modals/edit.modal";
import { ReactComponent as Edit } from "../../images/edit.svg";
import { ReactComponent as Delete } from "../../images/delete.svg";

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.showDeleteModalHandler = this.showDeleteModalHandler.bind(this);
    this.closeDeleteModalHandler = this.closeDeleteModalHandler.bind(this);
    this.showEditModalHandler = this.showEditModalHandler.bind(this);
    this.closeEditModalHandler = this.closeEditModalHandler.bind(this);

    this.state = {
      showDeleteModal: false,
      showEditModal: false
    };
  }

  closeDeleteModalHandler() {
    this.setState({ showDeleteModal: false });
  }

  showDeleteModalHandler() {
    this.setState({ showDeleteModal: true });
  }

  closeEditModalHandler() {
    this.setState({ showEditModal: false });
  }

  showEditModalHandler() {
    this.setState({ showEditModal: true });
  }

  render() {
    let labelColor = `card_${this.props.label}`;
    return (
      <React.Fragment>
        <div className={`card ${labelColor}`}>
          <div className="card_title">
            <span className="card_name">{this.props.cardName}</span>
            <div className="d-flex">
              <Edit
                className="card_actions_icon"
                onClick={this.showEditModalHandler}
              />
              <Delete
                className="card_actions_icon"
                onClick={this.showDeleteModalHandler}
              />
            </div>
          </div>
          <span className="card_executant">{this.props.executant}</span>
          <span className="card_date-creat">
            Created: {this.props.dateCreate}
          </span>
          {this.props.dateEdit && (
            <span className="card_date-edit">
              Edited: {this.props.dateEdit}
            </span>
          )}
        </div>
        <DeleteModal
          show={this.state.showDeleteModal}
          name={this.props.cardName}
          handleClose={this.closeDeleteModalHandler}
          handleSave={this.closeDeleteModalHandler}
        />
        <EditModal
          show={this.state.showEditModal}
          card={{
            name: this.props.cardName,
            executant: this.props.executant,
            label: this.props.label
          }}
          handleClose={this.closeEditModalHandler}
          handleSave={this.closeEditModalHandler}
        />
      </React.Fragment>
    );
  }
}

export default Card;
