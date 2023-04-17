import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "../../styles/global";
import defaultTheme from "../../styles/themes/default";

import Routes from "../../Routes";

import Header from "../Header";

import { Container } from "./styles";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />

      <Header />
      <Container>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
