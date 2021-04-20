import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Modal,
  Select,
  MenuItem,
  Grid,
  TextField,
  Button
} from "@material-ui/core";

function formatDate(date) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
}

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "200"
  }
}));

const SimpleModal = ({
  addRecord,
  closeModal,
  updateRecord,
  isModalOpen,
  activeRecord,
  records
}) => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [summary, onSummaryChange] = useState("");
  const [desc, onDescChange] = useState("");
  const [date, onDateChange] = useState("");
  const [priority, onPriorityChange] = useState("");
  const onCloseModal = () => {
    onSummaryChange("");
    onDescChange("");
    onDateChange("");
    onPriorityChange("");
    closeModal();
  };

  return (
    <div>
      <Modal
        open={isModalOpen}
        onClose={closeModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {
          <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">Edit Task</h2>
            <div style={{ width: "100%" }}>
              <div style={{ margin: "10px 0px" }}>Summary</div>
              <input
                onChange={(e) => onSummaryChange(e.target.value)}
                value={summary === "" ? activeRecord.summary : summary}
                style={{ width: "100%" }}
                placeholder="summary"
              />
              <div style={{ margin: "10px 0px", width: "100%" }}>
                Description
              </div>

              <textarea
                value={desc === "" ? activeRecord.desc : desc}
                onChange={(e) => onDescChange(e.target.value)}
                style={{ height: "80px", width: "100%" }}
                name="description"
                placeholder="Enter Description here..."
              />

              <div style={{ width: "100%", display: "flex" }}>
                <div style={{ margin: "10px 0px", width: "50%" }}>
                  Due Date
                  <TextField
                    id="date"
                    type="date"
                    value={date === "" ? activeRecord.dueBy : date}
                    onChange={(e) => {
                      onDateChange(e.target.value);
                    }}
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </div>
                <div
                  style={{
                    margin: "10px 0px",
                    width: "50%",
                    display: "flex",
                    flexDirection: "column"
                  }}
                >
                  Priority
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={priority === "" ? activeRecord.priority : priority}
                    onChange={(e) => onPriorityChange(e.target.value)}
                  >
                    <MenuItem value={"None"}>None</MenuItem>
                    <MenuItem value={"Low"}>Low</MenuItem>
                    <MenuItem value={"Medium"}>Medium</MenuItem>
                    <MenuItem value={"High"}>High</MenuItem>
                  </Select>
                </div>
              </div>
              <div style={{ display: "flex", gap: "10px", float: "right" }}>
                <Button variant="contained" size="small" onClick={closeModal}>
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  style={{ background: "green" }}
                  onClick={() => {
                    const tempObj = {
                      summary: summary === "" ? activeRecord.summary : summary,
                      priority:
                        priority === "" ? activeRecord.priority : priority,
                      desc: desc === "" ? activeRecord.desc : desc,
                      createdOn: formatDate(new Date()),
                      dueBy: date === "" ? activeRecord.dueBy : date,
                      isCompleted: false,
                      id: activeRecord.id
                    };
                    if (activeRecord.summary !== "") {
                      updateRecord(tempObj);
                    } else if (activeRecord.summary === "" && summary !== "") {
                      tempObj.id = records.length;
                      addRecord(tempObj);
                    }
                    onCloseModal();
                  }}
                >
                  Save
                </Button>
              </div>
            </div>
          </div>
        }
      </Modal>
    </div>
  );
};
export default SimpleModal;
