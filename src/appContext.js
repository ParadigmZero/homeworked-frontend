import React, { createContext, useContext, useReducer, useState } from "react";
import { reducer } from "./libs/reducer";
import { initialState } from "./libs/initialState";
import AWS from 'aws-sdk'


const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [refreshSwitch, setRefreshSwitch] = useState(true);
  const s3 = new AWS.S3({
    accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,
  });

  return (
    <AppContext.Provider
      value={{ state, dispatch, refreshSwitch, setRefreshSwitch, s3 }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function UseAppContext() {
  return useContext(AppContext);
}
