import { issuesData } from "../data/issues.data";

const options = () => {
  let orderNo;
  let userId;
  let begin;
  let end;
  return {
    byOrderNo: (orderNo) => {
      this.orderNo = orderNo;
      return this;
    },
    byUserId: (userId) => {
      this.userId = userId;
      return this;
    },
    byBegin: (begin) => {
      this.begin = begin;
      return this;
    },
    byEnd: (end) => {
      this.end = end;
      return this;
    },
  };
};
const getIssue = (id) => {
  return issuesData.filter((iss) => iss.id === id);
};
const getIssues = (options) => {
  return issuesData;
};
export { getIssue, getIssues };
