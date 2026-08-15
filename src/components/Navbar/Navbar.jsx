import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

import "./Navbar.css";
import navigation from "../../data/navigation";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const handleSectionNavigation = (href) => {
        const sectionId = href.replace("#", "");

        closeMenu();

        // If we are already on the Home page,
        // directly scroll to the section.
        if (window.location.pathname === "/") {
            const section = document.getElementById(sectionId);

            section?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });

            return;
        }

        // If we are on another page, first navigate Home.
        navigate("/");

        // Wait for Home to render, then scroll.
        setTimeout(() => {
            const section = document.getElementById(sectionId);

            section?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }, 100);
    };

    return (
        <header className="navbar">
            <div className="container navbar__container">

                {/* Logo */}
                <a
                    href="#hero"
                    className="navbar__logo"
                    onClick={(event) => {
                        event.preventDefault();
                        handleSectionNavigation("#hero");
                    }}
                >
                    <img
                        src={logo}
                        alt="Rajvirsinh"
                        className="navbar__logo-image"
                    />
                </a>

                {/* Desktop Navigation */}
                <nav className="navbar__nav">
                    <ul className="navbar__list">
                        {navigation.map((item) => (
                            <li key={item.id}>
                                <a
                                    href={item.href}
                                    onClick={(event) => {
                                        event.preventDefault();
                                        handleSectionNavigation(item.href);
                                    }}
                                    className="navbar__link"
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Resume */}
                <Link
                    to="/cv"
                    className="btn navbar__resume"
                >
                    Resume
                </Link>

                {/* Mobile Menu Button */}
                <button
                    className="navbar__toggle"
                    onClick={toggleMenu}
                    aria-label="Toggle navigation"
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? "✕" : "☰"}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="navbar__mobile">
                    <ul>
                        {navigation.map((item) => (
                            <li key={item.id}>
                                <a
                                    href={item.href}
                                    onClick={(event) => {
                                        event.preventDefault();
                                        handleSectionNavigation(item.href);
                                    }}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}

                        <li>
                            <Link
                                to="/cv"
                                onClick={closeMenu}
                            >
                                Resume
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Navbar;