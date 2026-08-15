import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

import "./Hero.css";

import profile from "../../data/profile";

import desktopHero from "../../assets/hero-desktop.png";
import mobileHero from "../../assets/profile.png";

const Hero = () => {
    const nameRef = useRef(null);

    useEffect(() => {
        const name = nameRef.current;

        if (!name) return;

        const letters = name.querySelectorAll(".hero__letter");

        const handleMouseMove = (event) => {
            letters.forEach((letter) => {
                const rect = letter.getBoundingClientRect();

                const letterX = rect.left + rect.width / 2;
                const letterY = rect.top + rect.height / 2;

                const distance = Math.sqrt(
                    Math.pow(event.clientX - letterX, 2) +
                    Math.pow(event.clientY - letterY, 2)
                );

                const maxDistance = 100;

                const intensity = Math.max(
                    0,
                    1 - distance / maxDistance
                );

                letter.style.setProperty(
                    "--letter-glow",
                    intensity
                );
            });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

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