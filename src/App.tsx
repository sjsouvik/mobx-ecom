import { Breadcrumb, Layout, Router } from "./components";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Breadcrumb />
        <Router />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
