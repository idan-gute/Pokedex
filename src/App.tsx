import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes/Routes";
import GlobalStyles from "./assets/styles/global-styles";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
