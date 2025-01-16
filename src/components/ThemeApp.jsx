import React from "react";
import { observer } from "mobx-react-lite";
import themeStore from "../store/ThemeStore";
import AuthControls from "./AuthControls";
import UserInfo from "./UserInfo";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease, color 0.3s ease;
`;

const ThemedApp = observer(() => {
    return (
        <Container>
            <h1>Current Theme: {themeStore.theme}</h1>
            <AuthControls />
            <UserInfo />
        </Container>
    );
});

export default ThemedApp;