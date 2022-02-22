import React from "react";
import "./Loading.scss";
import LoadingGif from "../../../assets/images/loading.gif";

function Loading() {
  return (
    <>
      <div className="loading">
        <img className="loading__img" src={LoadingGif} alt={"loading"}/>
        <span>Loading...</span>
      </div>
    </>
  );
}

export default Loading;
