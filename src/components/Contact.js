import {
  faGithub,
  faXTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  const twitter = "https://x.com/Felixx_jnr?t=ViRhuKymNfmS_2pyCgv_cw&s=09";
  const facebook =
    "https://www.facebook.com/profile.php?id=100073334363631&mibextid=ZbWKwL";
  const email =
    "mailto:uyuoukoh@gmail.com?subject=Lets%20Work&body=Hey%2C%20Good%20day%2C%20My%20name%20is...";
  const github = "https://github.com/Felixx-jnr";
  return (
    <div className="contact">
      <h1
        id="contact"
        className="contact__header"
      >
        CONTACT
      </h1>

      <div className="contact__info">
        <FontAwesomeIcon
          className="contact__info--image"
          icon={faPhoneVolume}
        />

        <div className="contact__info--writeup">
          <h2>Contact Details ! ! !</h2>

          <div className="contact__info--logos">
            <div>
              <a
                href={email}
                target="blank"
              >
                <FontAwesomeIcon icon={faEnvelope} />
                <span>Uyuoukoh@gmail.com</span>
              </a>
            </div>

            <div>
              <a
                href={github}
                target="blank"
              >
                <FontAwesomeIcon icon={faGithub} />
                <span>Felix_jnr</span>
              </a>
            </div>

            <div>
              <a
                href={twitter}
                target="blank"
              >
                <FontAwesomeIcon icon={faXTwitter} />
                <span>Felix_jnr</span>
              </a>
            </div>

            <div>
              <a
                href={facebook}
                target="blank"
              >
                <FontAwesomeIcon icon={faFacebook} />
                <span>Felix Udoh</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
