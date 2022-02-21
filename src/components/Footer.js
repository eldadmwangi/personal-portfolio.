import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer id="footer">
      <div className="container flex justify-center space-x-4 p-4 mt-4 mb-4 md:flex-column ">
        <div>
          linkedln
          <div>
            <a href="https://www.linkedin.com/in/eldad-mwangi-685351176/">
              {" "}
              <FontAwesomeIcon icon={faLinkedin} />{" "}
            </a>
          </div>
        </div>
        <div>
          Github
          <div>
            <a href="https://github.com/eldadmwangi">
              {" "}
              <FontAwesomeIcon icon={faGithub} />{" "}
            </a>
          </div>
        </div>
        <div>
          Twitter
          <div>
            <a
              href="https://twitter.com/EldadMwangi"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} />{" "}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
