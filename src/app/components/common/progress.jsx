import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import PropTypes from "prop-types";

const Progress = ({user}) => {
  return (
    <>
      {user.map(user => (
        <div key={user.id}>
          <h4>
            {user.title}
          </h4>
          <ProgressBar
            className="my-3"
            variant="info"
            animated
            now={user.progress}
            label={`${user.progress}%`}
          />
        </div>
      ))}
    </>
  );
};

Progress.propTypes = {
  user: PropTypes.array
};

export default  Progress;
