import React from "react";
import "./LinkTo.scss";
import { Link } from "react-router-dom";
import {Link as LinkMUI} from "@mui/icons-material";

function LinkTo({ text, url }) {
  return (
    <>
      <div className="link-to">
        <LinkMUI sx={{ color: "blue" }} />
        <Link to={`/${url}`} className="link-to__link">
          {text}
        </Link>
      </div>
    </>
  );
}

export default LinkTo;
