import React from "react";
import styled from "styled-components";

const UserInfoContainer = styled.div`
  background-color: ${({ theme }) => theme.userInfoBackground};
  color: ${({ theme }) => theme.color};
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
  text-align: center;
  width: 300px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const UserInfo = () => {
    return (
        <UserInfoContainer>
            <h2>User Info</h2>
            <p>Name: John Doe</p>
            <p>Email: john.doe@example.com</p>
        </UserInfoContainer>
    );
};

export default UserInfo