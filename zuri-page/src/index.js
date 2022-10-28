import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import profilePic from "./profile-pic.svg";
import share from "./share.png";
import Footer from "./Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
const slackname = "";
root.render(
  <>
    <div className="share">
      <img src={share} alt="share" />
    </div>
    <section className="profile-details">
      <img src={profilePic} id="profile__img" alt="profile" />
      <p id="twitter">twitter username</p>
      <p id="slack">slack username</p>
    </section>
    <section className="links">
      <a href="https://training.zuri.team/" id="btn__zuri" className="link">
        zuri team
      </a>
      <a href="http://books.zuri.team" id="books" className="link">
        Books
      </a>
      <a
        href={`https://books.zuri.team/python-for-beginners?ref_id=${slackname}`}
        id="book__python"
        className="link"
      >
        python
      </a>
      <a href="https://background.zuri.team" id="pitch" className="link">
        pitch
      </a>
      <a
        href="https://books.zuri.team/design-rules "
        id="book__design"
        className="link"
      >
        design
      </a>
    </section>
    <Footer></Footer>
  </>
);
