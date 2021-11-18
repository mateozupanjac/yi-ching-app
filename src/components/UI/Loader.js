import React from "react";
import LoaderSpinner from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Loader = (props) => {
  return (
    <LoaderSpinner
      type="Circles"
      width={80}
      height={80}
      color="#00BFFF"
      timeout={props.timeout}
    />
  );
};

export default Loader;
