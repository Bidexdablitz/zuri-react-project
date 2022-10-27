import React from "react";
import slack from "./slack.png";
import github from "./github.png";
import zuriLogo from "./zuri-logo.png";
import i4g from "./i4g.png";

export default function Footer(props) {
  return (
    <footer>
      <div className="icons">
        <img src={slack} alt="slack logo"></img>
        <img src={github} alt="github logo"></img>
      </div>
      <div className="copyright">
        <img src={zuriLogo} alt="zuri logo"></img>
        <p>hng internship frontend task</p>
        <img src={i4g} alt="i4g logo"></img>
      </div>
    </footer>
  );
}
