import React from "react";
import "./LinkTo.scss";
import { Link } from "react-router-dom";
import ArrowBack from "@mui/icons-material/ArrowBack";

function LinkTo({ text, url }) {
  return (
    <>
      <div className="link-to">
        <ArrowBack sx={{ color: "blue" }} />
        <Link to={`/${url}`} className="link-to__link">
          {text}
        </Link>
      </div>
    </>
  );
}

export default LinkTo;
