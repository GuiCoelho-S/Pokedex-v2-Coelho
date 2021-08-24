import GlobalStyle from "../reset/GlobalStyle";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "../pages/AppRouter";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  );
};

export default App;
