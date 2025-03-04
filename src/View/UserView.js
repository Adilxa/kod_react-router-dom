import React from "react";

const UserView = ({ viewModel }) => {
  return (
    <div>
      <h1>{viewModel.user.name}</h1>
      <button onClick={() => viewModel.updateName("New Name")}>
        Change Name
      </button>
    </div>
  );
};

export default UserView;
