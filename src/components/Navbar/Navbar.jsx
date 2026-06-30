import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import navigation from "../../data/navigation";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="navbar">
            <div className="container navbar__container">

                {/* Logo */}
                <Link to="/" className="navbar__logo">
                    Rajvirsinh
                </Link>

                {/* Desktop Navigation */}
                <nav className="navbar__nav">

                    <ul className="navbar__list">

                        {navigation.map((item) => (
                            <li key={item.id}>

                                <a
                                    href={item.href}
                                    onClick={closeMenu}
                                    className="navbar__link"
                                >
                                    {item.name}
                                </a>

                            </li>
                        ))}

                    </ul>

                </nav>

                {/* Resume Button */}

                <a
                    href="/cv"
                    className="btn navbar__resume"
                >
                    Resume
                </a>

                {/* Mobile Button */}

                <button
                    className="navbar__toggle"
                    onClick={toggleMenu}
                    aria-label="Toggle navigation"
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
                                    onClick={closeMenu}
                                >
                                    {item.name}
                                </a>

                            </li>
                        ))}

                        <li>

                            <a
                                href="/cv"
                                onClick={closeMenu}
                            >
                                Resume
                            </a>

                        </li>

                    </ul>

                </div>
            )}

        </header>
    );
};

export default Navbar;