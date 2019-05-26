import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import DeleteModal from "../Modals/delete.modal";
import EditModal from "../Modals/edit.modal";
import { ReactComponent as Edit } from "../../images/edit.svg";
import { ReactComponent as Delete } from "../../images/delete.svg";
import * as boardActions from "../../_actions/board.actions";

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

  editCard = card => {
    card.dateEdit = moment().format("lll");
    this.props.editCard(
      this.props.user.login,
      this.props.parrentColumnID,
      card
    );
    this.closeEditModalHandler();
  };

  deleteCard = cardID => {
    this.props.deleteCard(
      this.props.user.login,
      this.props.parrentColumnID,
      cardID
    );
    this.closeDeleteModalHandler();
  };

  render() {
    let labelColor = `card_${this.props.label}`;
    return (
      <React.Fragment>
        <div className={`card ${labelColor}`}>
          <div className="card_title">
            <span className="card_name">{this.props.cardName}</span>
            <img
              src={`https://ui-avatars.com/api/?rounded=true&background=${Math.floor(
                Math.random() * 16777215
              ).toString(16)}&color=fff&name=${this.props.executant}`}
              alt={this.props.executant}
            />
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
          id={this.props.id}
          show={this.state.showDeleteModal}
          name={this.props.cardName}
          handleClose={this.closeDeleteModalHandler}
          handleSave={this.deleteCard}
        />
        <EditModal
          show={this.state.showEditModal}
          card={true}
          id={this.props.id}
          name={this.props.cardName}
          executant={this.props.executant}
          label={this.props.label}
          checkList={this.props.checkList}
          comment={this.props.comment}
          dateCreate={this.props.dateCreate}
          handleClose={this.closeEditModalHandler}
          handleSave={this.editCard}
        />
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state;
  return { user };
}

const mapDispatchToProps = {
  editCard: boardActions.editCard,
  deleteCard: boardActions.deleteCard
};

const connectedCard = connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);
export { connectedCard as Card };
