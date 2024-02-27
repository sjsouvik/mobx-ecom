import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "../../helper/constants";

export const Breadcrumb = () => {
  const location = useLocation();

  const paths = location.pathname.split("/").filter((path) => path !== "");

  return (
    <>
      {paths.length > 0 && <Link to={ROUTES.home}>Home</Link>}
      {paths.map((path, index) => {
        const isLastPath = index === paths.length - 1;

        return isLastPath ? (
          <span key={path}>{` / ${path}`}</span>
        ) : (
          <span key={path}>
            {" "}
            / <Link to={`/${path}`}>{path}</Link>
          </span>
        );
      })}
    </>
  );
};
