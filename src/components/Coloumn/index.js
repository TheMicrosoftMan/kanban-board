import React from "react";
import { connect } from "react-redux";
import Card from "../Card";
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

  editColumn = ({id, name}) => {
    this.props.editColumn(this.props.user.login, id, name);
    this.closeEditModalHandler();
  };

  deleteColumn = columnID => {
    this.props.deleteColumn(this.props.user.login, columnID);
    this.closeDeleteModalHandler();
  };

  render() {
    return (
      <div className="coloumn">
        <div className="coloumn_title">
          <span className="coloumn_name">{this.props.name}</span>
          <div className="coloumn_title_actions">
            <Add
              className="coloumn_actions_icon"
              onClick={this.showEditModalHandler}
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
        {this.props.cards.map(card => {
          return (
            <Card
              key={card.id}
              cardName={card.cardName}
              executant={card.executant}
              dateCreate={card.dateCreate}
              dateEdit={card.dateEdit}
              label={card.label}
            />
          );
        })}
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
          handleClose={this.closeEditModalHandler}
          handleSave={this.editColumn}
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
  deleteColumn: boardActions.deleteColumn
};

const connectedColoumn = connect(
  mapStateToProps,
  mapDispatchToProps
)(Coloumn);
export { connectedColoumn as Coloumn };
