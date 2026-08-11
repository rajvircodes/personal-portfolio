import "./Hero.css";

import profile from "../../data/profile";
import social from "../../data/social";

const Hero = () => {
    return (
        <section id="hero" className="hero section">
            <div className="container hero__container">

                {/* Left Content */}
                <div className="hero__content">

                    <p className="hero__greeting">
                        Hello, I'm
                    </p>

                    <h1 className="hero__title">
                        {profile.name}
                    </h1>

                    <h2 className="hero__role">
                        {profile.role}
                    </h2>

                    <p className="hero__description">
                        {profile.intro}
                    </p>

                    <div className="hero__buttons">
                        <a
                            href="/#projects"
                            className="btn"
                        >
                            View Projects
                        </a>

                        <a
                            href={profile.resume}
                            className="btn hero__resume"
                        >
                            Download Resume
                        </a>

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

                        <a
                            href={`mailto:${social.email}`}
                        >
                            Email
                        </a>

                    </div>

                </div>

                {/* Right Side */}

                <div className="hero__image">

                    <img
                        src={profile.avatar}
                        alt={profile.name}
                        loading="eager"
                    />

                </div>

            </div>
        </section>
    );
};

export default Hero;