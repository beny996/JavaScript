import React from "react";
import Spinner from "../../images/spinner.svg";

const Loading = () => {
  return (
    <div style={{ display: "flex" }}>
      <img src={Spinner} />
    </div>
  );
};

export default Loading;
