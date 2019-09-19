import React from "react";
import { connect } from "react-redux";
import { Draggable } from "react-beautiful-dnd";
import moment from "moment";
import DeleteModal from "../Modals/delete.modal";
import EditModal from "../Modals/edit.modal";
import CardModal from "../Modals/card.modal";
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
    this.showCardModalHandler = this.showCardModalHandler.bind(this);
    this.closeCardModalHandler = this.closeCardModalHandler.bind(this);

    this.state = {
      showDeleteModal: false,
      showEditModal: false,
      showCardModal: false
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

  closeCardModalHandler() {
    this.setState({ showCardModal: false });
  }

  showCardModalHandler() {
    this.setState({ showCardModal: true });
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
      <Draggable draggableId={this.props.id} index={this.props.index}>
        {provided => (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <React.Fragment>
              <div className={`card ${labelColor}`}>
                <div className="card__title">
                  <div
                    className="card__title_name"
                    onClick={this.showCardModalHandler}
                  >
                    <img
                      className="card__title_name_executant-img"
                      src={`https://ui-avatars.com/api/?rounded=true&background=65aadd&color=fff&name=${this.props.executant}`}
                      alt={this.props.executant}
                    />
                    {this.props.cardName}
                  </div>
                  <div className="card__title_actions">
                    <Edit
                      className="card__title_actions_icon"
                      onClick={this.showEditModalHandler}
                    />
                    <Delete
                      className="card__title_actions_icon"
                      onClick={this.showDeleteModalHandler}
                    />
                  </div>
                </div>
                <div className="card__body" onClick={this.showCardModalHandler}>
                  {this.props.image && (
                    <img
                      className="card__body_image"
                      src={this.props.image}
                      alt="CardImg"
                    />
                  )}
                  <span className="card__body_create-date">
                    Створено: {this.props.dateCreate}
                  </span>
                  {this.props.dateEdit && (
                    <span className="card__body_edit-date">
                      Відредаговано: {this.props.dateEdit}
                    </span>
                  )}
                </div>
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
                image={this.props.image}
                handleClose={this.closeEditModalHandler}
                handleSave={this.editCard}
              />
              <CardModal
                show={this.state.showCardModal}
                name={this.props.cardName}
                executant={this.props.executant}
                label={this.props.label}
                checkList={this.props.checkList}
                comment={this.props.comment}
                dateCreate={this.props.dateCreate}
                dateEdit={this.props.dateEdit}
                image={this.props.image}
                handleClose={this.closeCardModalHandler}
              />
            </React.Fragment>
          </div>
        )}
      </Draggable>
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
