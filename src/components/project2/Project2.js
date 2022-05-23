import React from "react";
import image from "./image/girl.png";
import "./project2.css";
import facebook from "./image/facebook.png";
import twitter from "./image/twitter.png";
import instagram from "./image/instagram.png";
import github from "./image/github.png";
export default function Project2() {
  return (
    <div className="card">
      <div className="card_header">
        <img src={image} alt="" />
      </div>
      <div className="card_body">
        <h1>Laura Smith</h1>

        <h3>Frontend Developer</h3>
        <h5>Laurasmith.website</h5>
      </div>
      <div className="buttons">
        <div className="b1">
          <img
            src="https://www.designbust.com/download/1026/png/email_icon_transparent_background512.png"
            alt=""
          />
          <p>Email</p>
        </div>
        <div className="b2">
          <img
            src="https://pngshare.com/wp-content/uploads/2021/06/Red-X-in-Box-30.png"
            alt=""
          />
          <p>Linkedin</p>
        </div>
      </div>
      <div className="texts">
        <h1>About</h1>
        <p>
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
        <h1>Interests</h1>
        <p>
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </div>
      <div className="card_footer">
        <img src={twitter} alt="" />
        <img src={facebook} alt="" />
        <img src={instagram} alt="" />
        <img src={github} alt="" />
      </div>
    </div>
  );
}
