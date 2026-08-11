import "./Footer.css";

import profile from "../../data/profile";
import social from "../../data/social";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer__container">

                <div className="footer__brand">
                    <a href="/#hero" className="footer__logo">
                        {profile.name}
                    </a>

                    <p>
                        {profile.role}
                    </p>
                </div>

                <div className="footer__socials">

                    <a
                        href={social.github}
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </a>

                    <a
                        href={social.linkedin}
                        target="_blank"
                        rel="noreferrer"
                    >
                        LinkedIn
                    </a>

                    <a href={`mailto:${social.email}`}>
                        Email
                    </a>

                </div>

            </div>

            <div className="footer__bottom">
                <div className="container">

                    <p>
                        © {currentYear} {profile.name}. All rights reserved.
                    </p>

                </div>
            </div>
        </footer>
    );
};

export default Footer;