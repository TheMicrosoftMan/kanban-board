import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import "moment/locale/uk";
import { labelConstants } from "../../_constants/label.constants";
import Header from "../../components/Header";
import { Coloumn } from "../../components/Coloumn";
import EditModal from "../../components/Modals/edit.modal";
import TransparentButton from "../../components/TransparentButton";
import * as boardActions from "../../_actions/board.actions";
import * as signActions from "../../_actions/sign.actions";

moment.locale("uk");

const cards = [
  {
    id: 1,
    cardName: "Create design",
    executant: "Vasya Pupkin",
    dateCreate: moment().format("lll"),
    dateEdit: moment().format("lll"),
    label: labelConstants.GREEN
  },
  {
    id: 2,
    cardName: "Create design",
    executant: "Vasya Pupkin",
    dateCreate: moment().format("lll"),
    dateEdit: moment().format("lll"),
    label: labelConstants.GREEN
  },
  {
    id: 3,
    cardName: "Create design",
    executant: "Vasya Pupkin",
    dateCreate: moment().format("lll"),
    dateEdit: moment().format("lll"),
    label: labelConstants.GREEN
  }
];

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.showEditModalHandler = this.showEditModalHandler.bind(this);
    this.closeEditModalHandler = this.closeEditModalHandler.bind(this);

    this.state = {
      showEditModal: false
    };
  }

  closeEditModalHandler() {
    this.setState({ showEditModal: false });
  }

  showEditModalHandler() {
    this.setState({ showEditModal: true });
  }

  componentDidMount() {
    this.props.getBoard(this.props.user.login);
  }

  addColumn = data => {
    this.props.addColumn(this.props.user.login, data.name);
    this.closeEditModalHandler();
  };

  render() {
    return (
      <div className="main">
        <Header username={this.props.user.login} userExit={this.props.userExit} />
        <div className="d-flex board">
          {this.props.board.board.columns &&
            this.props.board.board.columns.map(column => {
              return (
                <Coloumn
                  key={column.id}
                  id={column.id}
                  name={column.columnName}
                  cards={column.cards}
                />
              );
            })}
          <TransparentButton
            value="Add column"
            clickHandler={this.showEditModalHandler}
          />
        </div>
        <EditModal
          show={this.state.showEditModal}
          handleClose={this.closeEditModalHandler}
          handleSave={this.addColumn}
        />
      </div>
    );
  }
}

const mapDispatchToProps = {
  getBoard: boardActions.getBoard,
  addColumn: boardActions.addColumn,
  deleteColumn: boardActions.deleteColumn,
  userExit: signActions.exitUser
};

function mapStateToProps(state) {
  const { user, board } = state;
  return { user, board };
}

const connectedMain = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
export { connectedMain as Main };
