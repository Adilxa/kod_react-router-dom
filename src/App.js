import React from "react";
import { observer } from "mobx-react-lite";
import { ThemeProvider } from "styled-components";
import themeStore from "./store/ThemeStore";
import { themes } from "./styles/theme";
import ThemedApp from "./components/ThemeApp";

const App = observer(() => {
  return (
    <ThemeProvider theme={themes[themeStore.theme]}>
      <ThemedApp />
    </ThemeProvider>
  );
});

export default App;
