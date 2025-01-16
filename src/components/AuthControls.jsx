import React from "react";
import { observer } from "mobx-react-lite";
import styled from "styled-components";
import themeStore from "../store/ThemeStore";

const Button = styled.button`
  background-color: ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.buttonColor};
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.buttonHover};
  }
`;

const AuthControls = observer(() => {
    return (
        <div>
            <Button onClick={() => themeStore.toggleTheme()}>Toggle Theme</Button>
        </div>
    );
});

export default AuthControls