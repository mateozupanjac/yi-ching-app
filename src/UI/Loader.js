import React from "react";
import LoaderSpinner from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Loader = (props) => {
  return (
    <LoaderSpinner
      type="Circles"
      width={50}
      height={50}
      color="#b6cdb8"
      timeout={props.timeout}
    />
  );
};

export default Loader;
