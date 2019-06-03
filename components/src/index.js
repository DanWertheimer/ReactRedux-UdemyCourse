import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          timeAgo="Today at 1:34PM"
          text={faker.lorem.sentence()}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          timeAgo="Yesterday at 11:22PM"
          text={faker.lorem.sentence()}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          timeAgo="Yesterday at 11:01AM"
          text={faker.lorem.sentence()}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
