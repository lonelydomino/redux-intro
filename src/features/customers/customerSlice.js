import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

const accountSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    createCustomer: {
      prepare(fullName, nationalID) {
        return {
          payload: {
            fullName,
            nationalID,
            createdAt: new Date().toISOString(),
          },
        };
      },
      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.nationalID = action.payload.nationalID;
        state.createdAt = action.payload.createdAt
      },
    },
    updateName(state, action) {
      state.fullName = action.payload;
    },
  },
});

export const { createCustomer, updateName } = accountSlice.actions;
export default accountSlice.reducer;

// const customerReducer = (state = initialStateCustomer, action) => {
//     switch(action.type){
//         case 'customer/createCustomer':
//             return { ...state, fullName: action.payload.fullName, nationalID: action.payload.nationalID, createdAt: action.payload.createdAt}

//         case 'customer/updateName':
//             return {...state, fullName: action.payload}

//         default: return state
// }}

// export const createCustomer = (fullName, nationalID) => {
//     return { type: 'customer/createCustomer', payload: { fullName, nationalID, createdAt: new Date().toISOString() }}
// }
// export const updateName = (fullName) => {
// return { type: 'customer/updateName', payload: fullName}
// }
// export default customerReducer
