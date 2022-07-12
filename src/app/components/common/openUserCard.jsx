import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const OpenUserCard = ({user}) => {
  return (
    <NavLink className="btn btn-orange" to={`/users/${user.id}`}>
      Открыть
    </NavLink>
  );
};
OpenUserCard.propTypes = {
  user: PropTypes.object
};

export default OpenUserCard;