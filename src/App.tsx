import { Breadcrumb, Layout, Router } from "./components";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Breadcrumb />
        <Router />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
