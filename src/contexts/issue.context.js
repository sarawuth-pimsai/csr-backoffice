import { createContext, useMemo, useReducer } from "react";
import PropTypes from "prop-types";
const initialState = {
  issue: {},
  issues: [],
};
const actions = {
  LOAD_ISSUE: "LOAD_ISSUE",
};
const reducer = (state, { type, payload }) => {
  switch (type) {
    case actions.LOAD_ISSUE:
      return { ...state, issue: payload };
    default:
      throw new Error(`${type} is not`);
  }
};
const IssueContext = createContext();
const IssueProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);
  return (
    <IssueContext.Provider value={contextValue}>
      {children}
    </IssueContext.Provider>
  );
};
IssueProvider.propTypes = {
  children: PropTypes.children,
};
export { IssueContext, IssueProvider };
