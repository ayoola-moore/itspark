import * as React from "react";

const RenderError = ({ error, errorInfo }) => {
  // console.error("errorBoundary: ", error);
  return <div>{errorInfo}</div>;
};

export default RenderError;
