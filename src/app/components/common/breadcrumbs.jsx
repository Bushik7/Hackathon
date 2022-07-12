import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { NavLink, useHistory, useParams, withRouter } from "react-router-dom";
import {FcHome} from "@react-icons/all-files/fc/FcHome";
import {Container} from "react-bootstrap";

const Breadcrumbs = () => {

  const {location} = useHistory();
  const {pathname} = location;
  const pathnames = pathname.split("/").filter((el) => el);

  const renderRoute = [
    {name: "/users", label: "Состав команды"},
    {name: "/favorites", label: "Избранные"},
    {name: "/users/1", label: "/ Вера Петрова" },
    {name: "/users/2", label: "/ Тахир Иванов" },
    {name: "/users/3", label: "/ Олег Потоцкий" },
    {name: "/users/4", label: "/ Сергей Фомин" },
    {name: "/users/5", label: "/ Елена Ерофеева" }
  ];

  const getPathnameHome = () => {
    if (pathnames.length === 0) {
      return null;
    } else {
      return (
        <>
          <NavLink to="/" className="navLinkStyle me-1">
            <FcHome/>
          </NavLink>
          /
        </>
      );
    };
  };

  return (
    <Container className="mt-3">
      <Breadcrumb>
        {getPathnameHome()}
        {pathnames.map((pathname, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          const result = renderRoute.filter(render => render.name === routeTo);

          return result.map((element, index) => {
            return (
              <div key={index}>
                {
                  isLast
                    ? <span className="text-secondary ms-1"> {element.label} </span>
                    : <NavLink to={routeTo} className="navLinkStyle ms-1">
                      {element.label}
                    </NavLink>
                }
              </div>
            );
          });
        })}
      </Breadcrumb>
    </Container>
  );
};

export default withRouter(Breadcrumbs);
