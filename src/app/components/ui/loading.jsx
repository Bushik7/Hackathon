import React from "react";

const Loading = () => {
  return (
    <div className="d-flex align-items-center loadingText">
      <h1>Загрузка...</h1>
      <div className="spinner-border text-success ms-auto" role="status"
        aria-hidden="true"></div>
    </div>
  );
};

export default Loading;