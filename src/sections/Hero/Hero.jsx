import { Link } from "react-router-dom";

import "./Hero.css";

import profile from "../../data/profile";

import desktopHero from "../../assets/hero-desktop.png";
import mobileHero from "../../assets/profile.png";

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="container hero__container">

                {/* Hero Image */}
                <div className="hero__image-wrapper">

                    <picture className="hero__picture">
                        {/* Mobile Image */}
                        <source
                            media="(max-width: 767px)"
                            srcSet={mobileHero}
                        />

                        {/* Desktop Image */}
                        <img
                            src={desktopHero}
                            alt={`${profile.name} profile`}
                            className="hero__image"
                        />
                    </picture>

                </div>

                {/* Hero Content */}
                <div className="hero__content">

                    {/* <p className="hero__greeting">
                        Hello, I'm
                    </p> */}

                    <h1 className="hero__name">
                        {profile.name}
                    </h1>

                    <h2 className="hero__role">
                        {profile.role}
                    </h2>

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

                </div>

            </div>
        </section>
    );
};

export default Hero;