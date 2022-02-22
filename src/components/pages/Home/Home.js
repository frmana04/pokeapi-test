import React from "react";
import "./Home.scss";
import LinkTo from "components/atoms/LinkTo/LinkTo";

function Home() {
  return (
    <>
    <div className="home">
      <h1>Home</h1>
      <LinkTo url={"list-pokemon"} text={"Pokemon List"}/>
    </div>
    </>
  );
}

export default Home;
