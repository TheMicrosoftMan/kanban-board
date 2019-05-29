import React from "react";
import { connect } from "react-redux";
import { Droppable } from "react-beautiful-dnd";
import moment from "moment";
import { Card } from "../Card";
import TransparentButton from "../../components/TransparentButton";
import DeleteModal from "../Modals/delete.modal";
import EditModal from "../Modals/edit.modal";
import { ReactComponent as Add } from "../../images/add.svg";
import { ReactComponent as Edit } from "../../images/edit.svg";
import { ReactComponent as Delete } from "../../images/delete.svg";
import * as boardActions from "../../_actions/board.actions";

class Coloumn extends React.Component {
  constructor(props) {
    super(props);

    this.showDeleteModalHandler = this.showDeleteModalHandler.bind(this);
    this.closeDeleteModalHandler = this.closeDeleteModalHandler.bind(this);
    this.showEditModalHandler = this.showEditModalHandler.bind(this);
    this.closeEditModalHandler = this.closeEditModalHandler.bind(this);
    this.showAddCardModalHandler = this.showAddCardModalHandler.bind(this);
    this.closeAddCardModalHandler = this.closeAddCardModalHandler.bind(this);

    this.state = {
      showDeleteModal: false,
      showEditModal: false,
      showAddCardModal: false
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

  editColumn = ({ id, name }) => {
    this.props.editColumn(this.props.user.login, id, name);
    this.closeEditModalHandler();
  };

  deleteColumn = columnID => {
    this.props.deleteColumn(this.props.user.login, columnID);
    this.closeDeleteModalHandler();
  };

  closeAddCardModalHandler() {
    this.setState({ showAddCardModal: false });
  }

  showAddCardModalHandler() {
    this.setState({ showAddCardModal: true });
  }

  addCard = card => {
    card.dateCreate = moment().format("lll");
    this.props.addCard(this.props.user.login, this.props.id, card);
    this.closeAddCardModalHandler();
  };

  render() {
    return (
      <div className="coloumn">
        <div className="coloumn_title">
          <span className="coloumn_name">{this.props.name}</span>
          <div className="coloumn_title_actions">
            <Add
              className="coloumn_actions_icon"
              onClick={this.showAddCardModalHandler}
            />
            <Edit
              className="coloumn_actions_icon"
              onClick={this.showEditModalHandler}
            />
            <Delete
              className="coloumn_actions_icon"
              onClick={this.showDeleteModalHandler}
            />
          </div>
        </div>
        <Droppable droppableId={this.props.id}>
          {provided => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <div className="cards-place">
                {this.props.cards.length === 0 && (
                  <span className="cards-place-text">
                    Ця колонка порожня. Поки що :)
                  </span>
                )}
                {this.props.cards.map((card, index) => {
                  return (
                    <Card
                      index={index}
                      key={card.id}
                      id={card.id}
                      cardName={card.name}
                      executant={card.author}
                      dateCreate={card.dateCreate}
                      dateEdit={card.dateEdit ? card.dateEdit : null}
                      label={card.label}
                      checkList={card.checkList}
                      comment={card.comment}
                      image={card.image}
                      parrentColumnID={this.props.id}
                    />
                  );
                })}
                {provided.placeholder}
              </div>
            </div>
          )}
        </Droppable>
        <TransparentButton
          value="+ Додати картку"
          clickHandler={this.showAddCardModalHandler}
          className="add-card-btn"
        />
        <DeleteModal
          show={this.state.showDeleteModal}
          name={this.props.name}
          id={this.props.id}
          handleClose={this.closeDeleteModalHandler}
          handleSave={this.deleteColumn}
        />
        <EditModal
          show={this.state.showEditModal}
          name={this.props.name}
          id={this.props.id}
          card={false}
          handleClose={this.closeEditModalHandler}
          handleSave={this.editColumn}
        />
        <EditModal
          show={this.state.showAddCardModal}
          id={Math.random() * (1000 - 1) + 1}
          card={true}
          handleClose={this.closeAddCardModalHandler}
          handleSave={this.addCard}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state;
  return { user };
}

const mapDispatchToProps = {
  editColumn: boardActions.editColumn,
  deleteColumn: boardActions.deleteColumn,
  addCard: boardActions.addCard
};

const connectedColoumn = connect(
  mapStateToProps,
  mapDispatchToProps
)(Coloumn);
export { connectedColoumn as Coloumn };
