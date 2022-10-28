import React from "react";
import slack from "./images/slack.png";
import github from "./images/github.png";
import zuriLogo from "./images/zuri-logo.png";
import i4g from "./images/i4g.png";

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
