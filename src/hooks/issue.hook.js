import { useContext } from "react";
import { IssueContext } from "../contexts/issue.context";
import { getIssue, getIssues } from "../services/issue.service";

const useIssue = () => {
  const [state, dispatch] = useContext(IssueContext);
  return {
    issue: state.issue,
    issues: state.issues,
    setIssue: (issue) => {},
    setIssues: (issues) => {},
  };
};
export default useIssue;
