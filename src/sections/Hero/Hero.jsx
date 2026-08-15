import { Link } from "react-router-dom";

import "./Hero.css";

import profile from "../../data/profile";
import social from "../../data/social";

const Hero = () => {
    return (
        <section id="hero" className="hero section">
            <div className="container hero__container">

                <div className="hero__content">

                    <p className="hero__greeting">
                        Hello, I'm
                    </p>

                    <h1 className="hero__name">
                        {profile.name}
                    </h1>

                    <h2 className="hero__role">
                        {profile.role}
                    </h2>

                    <p className="hero__intro">
                        {profile.intro}
                    </p>

                    <div className="hero__actions">

                        <a
                            href="/#projects"
                            className="btn"
                        >
                            View Projects
                        </a>

                        <Link
                            to="/cv"
                            className="btn hero__resume"
                        >
                            View Resume
                        </Link>

                    </div>

                    <div className="hero__socials">

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

                    </div>

                </div>

                <div className="hero__image-wrapper">

                    <img
                        src={profile.avatar}
                        alt={`${profile.name} profile`}
                        className="hero__image"
                    />

                </div>

            </div>
        </section>
    );
};

export default Hero;