import {
  faGithub,
  faFacebook,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  useEffect(() => {
    function handleClick(event) {
      if (
        event.target.tagName === "A" &&
        event.target.parentElement.tagName === "LI"
      ) {
        setOpen(false);
      }
    }

    document
      .querySelector(".links.pages")
      .addEventListener("click", handleClick);

    return () => {
      document
        .querySelector(".links.pages
        ")
        .removeEventListener("click", handleClick);
    };
  }, []);

  const [open, setOpen] = useState(false);
  let navRef = useRef();

  const twitter = "https://x.com/Felixx_jnr?t=ViRhuKymNfmS_2pyCgv_cw&s=09";
  const facebook =
    "https://www.facebook.com/profile.php?id=100073334363631&mibextid=ZbWKwL";
  const email =
    "mailto:uyuoukoh@gmail.com?subject=Lets%20Work&body=Hey%2C%20Good%20day%2C%20My%20name%20is...";
  const github = "https://github.com/Felixx-jnr";

  return (
    <header>
      <h3>FELIX UDOH</h3>
      <nav
        ref={navRef}
        className={`nav ${open ? "responsive_nav" : ""}`}
        onClick={() => {
          setOpen(false);
        }}
      >
        <div>
          <ul className="links pages">
            <li>
              <AnchorLink href="#home">Home</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#about">About</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#skills">Skills</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#project">Projects</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#contact">Contact</AnchorLink>
            </li>
          </ul>
        </div>

        <div>
          <ul className="links icons">
            <a
              href={email}
              target="blank"
            >
              {" "}
              <li>
                <FontAwesomeIcon icon={faEnvelope} />
              </li>
            </a>

            <a
              href={github}
              target="blank"
            >
              {" "}
              <li>
                <FontAwesomeIcon icon={faGithub} />
              </li>
            </a>

            <a
              href={twitter}
              target="blank"
            >
              {" "}
              <li>
                <FontAwesomeIcon icon={faXTwitter} />
              </li>
            </a>

            <a
              href={facebook}
              target="blank"
            >
              {" "}
              <li>
                <FontAwesomeIcon icon={faFacebook} />
              </li>
            </a>
          </ul>
        </div>

        <button
          className="nav-btn nav-close-btn times"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <FaTimes />
        </button>
      </nav>

      <button
        className="nav-btn bars"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <FaBars />
      </button>
    </header>
  );
};

export default Navbar;
