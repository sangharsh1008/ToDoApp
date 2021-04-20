import MaterialTable from "material-table";
import { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import CreateSharpIcon from "@material-ui/icons/CreateSharp";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1)
  }
}));

export const Table = ({
  updateStatus,
  deleteRecord,
  record,
  currentTab,
  updateModalData
}) => {
  const classes = useStyles();
  let displayRecords;
  if (currentTab === "All") {
    displayRecords = record;
  } else if (currentTab === "Pending") {
    displayRecords = record.filter((data) => !data.isCompleted);
  } else {
    displayRecords = record.filter((data) => data.isCompleted);
  }
  return (
    <div>
      <MaterialTable
        title=""
        columns={[
          { title: "Summary", field: "summary" },
          { title: "Priority", field: "priority" },
          { title: "Created On", field: "createdOn" },
          { title: "Due By", field: "dueBy" },
          {
            field: "Actions",
            title: "action",
            render: (props, index) => {
              return (
                <div key={JSON.toString(props)} style={{ display: "flex" }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    className={classes.button}
                    onClick={() => {
                      updateModalData(props);
                    }}
                    startIcon={<CreateSharpIcon />}
                  />
                  <Button
                    className={classes.button}
                    size="small"
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      updateStatus(props);
                    }}
                  >
                    {props.isCompleted ? "Re-Open" : "done"}
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={() => {
                      deleteRecord(props);
                    }}
                    className={classes.button}
                    startIcon={<DeleteIcon />}
                  />
                </div>
              );
            }
          }
        ]}
        data={displayRecords}
        options={{
          search: true,
          headerStyle: {
            border: "1px solid black",
            fontWeight: "bold",
            background: "lightgrey",
            textAlign: "center"
          },
          customColumnIndex: -1
        }}
      />
    </div>
  );
};
