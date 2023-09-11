import React, { createContext, useReducer,  useState } from 'react';
import ExpenseReducer from './ExpenseReducer';

// Initial state
const initialState = {
  activities: [],
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ExpenseReducer, initialState);


  // Actions
  function deleteActivity(id) {
    dispatch({
      type: 'DELETE',
      payload: id
    });
  }

  function addActivity(transaction) {
    dispatch({
      type: 'ADD',
      payload: transaction
    });
  }

 

  return (
  <GlobalContext.Provider value={{
    activities: state.activities,
    deleteActivity,
    addActivity
  }}>
    {children}
  </GlobalContext.Provider>
  );
}