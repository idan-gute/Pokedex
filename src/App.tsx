import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes/Routes";
import GlobalStyles from "./assets/styles/global-styles";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
