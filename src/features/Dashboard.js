import "../styles.css";
import React, { useReducer } from "react";
import { connect } from "react-redux";
import { Table } from "./components/Table";
import { Fab, Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Modal from "./components/Modal";
const INITIAL_DATA = {
  summary: "",
  priority: "None",
  desc: "",
  createdOn: "",
  dueBy: "",
  isCompleted: false,
  id: ""
};
class Dashboard extends React.Component {
  state = {
    isModalOpen: false,
    showRecords: this.props.records,
    showRec: "All"
  };

  updateModalData(modalData) {
    this.props.setActiveRecord({ ...modalData });
    this.setState({ isModalOpen: true });
  }
  render() {
    const { showRec, isModalOpen, showRecords } = this.state;

    return (
      <div className="mainContainer">
        <Modal
          isModalOpen={isModalOpen}
          records={this.props.records}
          addRecord={this.props.addRecord}
          updateRecord={this.props.updateRecord}
          activeRecord={this.props.activeRecord}
          closeModal={() => {
            this.props.setActiveRecord({ ...INITIAL_DATA });
            this.setState({
              isModalOpen: false
            });
          }}
        />
        <div className="headerContainer">
          <div className="appName">{" ToDo APP"}</div>

          {
            <div className="addTask">
              <Fab
                style={{ backgroundColor: "blue" }}
                color="secondary"
                aria-label="add"
                size="small"
                onClick={() => {
                  this.props.setActiveRecord({ ...INITIAL_DATA });
                  this.setState({
                    isModalOpen: true
                  });
                }}
              >
                <AddIcon />
              </Fab>
            </div>
          }
        </div>
        <div style={{ display: "flex" }}>
          <Button
            onClick={() => {
              this.setState({
                showRec: "All"
              });
            }}
            color={showRec === "All" ? "black" : "primary"}
          >
            All
          </Button>
          <Button
            onClick={() => {
              this.setState({
                showRec: "Pending"
              });
            }}
            color={showRec === "Pending" ? "black" : "primary"}
          >
            Pending
          </Button>
          <Button
            onClick={() =>
              this.setState({
                showRec: "Completed"
              })
            }
            color={showRec === "Completed" ? "black" : "primary"}
          >
            Completed
          </Button>
        </div>
        <Table
          updateModalData={(data) => this.updateModalData(data)}
          record={this.props.records}
          currentTab={this.state.showRec}
          updateStatus={this.props.updateStatus}
          deleteRecord={this.props.deleteRecord}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    records: state.rawData,
    activeRecord: state.activeRecord
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addRecord: (record) => dispatch({ type: "ADD_RECORD", value: record }),
    deleteRecord: (record) =>
      dispatch({ type: "DELETE_RECORD", value: record }),
    updateRecord: (record) =>
      dispatch({ type: "UPDATE_RECORD", value: record }),
    setActiveRecord: (record) =>
      dispatch({ type: "SET_ACTIVE", value: record }),
    updateStatus: (record) => dispatch({ type: "UPDATE_STATUS", value: record })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
