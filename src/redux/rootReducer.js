import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  authorization: () => ({
    token: null,
  }),
});

export default rootReducer;
