import { Link } from "react-router-dom";
import "./Layout.css";
import { ROUTES } from "../Router/Router";
import cartStore from "../../stores/CartStore";
import { observer } from "mobx-react-lite";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="layout">
      <header className="header">
        <div>
          <Link to={ROUTES.home}>Otto</Link>
        </div>
        <nav>
          <ul className="links">
            <li>
              <Link to={ROUTES.home}>Home</Link>
            </li>
            <li>
              <Link to={ROUTES.cart}>{`Cart - ${cartStore.length}`}</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main">{children}</main>
      <footer className="footer">&copy; All rights reserved</footer>
    </div>
  );
};

export default observer(Layout);
