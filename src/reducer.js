export const initialState = {
  activeRecord: {
    summary: "",
    priority: "None",
    desc: "",
    createdOn: "",
    dueBy: "",
    isCompleted: false
  },
  rawData: [
    {
      id: 0,
      summary: "trial",
      priority: "Medium",
      desc: "",
      createdOn: "2020-10-20",
      dueBy: "2020-10-12",
      isCompleted: false
    },
    {
      id: 1,
      summary: "trial1",
      priority: "Medium",
      desc: "",
      createdOn: "2020-10-12",
      dueBy: "2020-10-12",
      isCompleted: false
    },
    {
      id: 2,
      summary: "trial2",
      priority: "Medium",
      desc: "",
      createdOn: "2020-10-12",
      dueBy: "2020-10-12",
      isCompleted: true
    }
  ]
};

export const rootReducer = (state = initialState, action) => {
  const tempRecord = [...state.rawData];
  const findIndex =
    action.value &&
    state.rawData.findIndex((data) => data.id === action.value.id);
  switch (action.type) {
    case "ADD_RECORD":
      return {
        ...state,
        rawData: [...state.rawData, action.value]
      };

    case "DELETE_RECORD":
      return {
        ...state,
        rawData: [
          ...state.rawData.filter((rec) => {
            if (rec !== action.value) {
              return rec;
            }
          })
        ]
      };
    case "UPDATE_STATUS":
      // tempRecord[findIndex].isCompleted = !tempRecord[findIndex].isCompleted;

      const tempRecord1 = [...state.rawData];
      tempRecord1[findIndex].isCompleted = !tempRecord1[findIndex].isCompleted;
      return {
        ...state,
        rawData: tempRecord1
      };

    case "UPDATE_RECORD":
      const tempRecord2 = [...state.rawData];
      tempRecord2[findIndex] = action.value;

      console.log(tempRecord2[findIndex], action.value, "sangahrsh");
      return {
        ...state,
        rawData: tempRecord2
      };

    case "SET_ACTIVE":
      return {
        ...state,
        activeRecord: Object.create(action.value)
      };

    default:
      return {
        ...state
      };
  }
};
