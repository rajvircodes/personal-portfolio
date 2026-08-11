import { Link } from "react-router-dom";

import "./NotFound.css";

const NotFound = () => {
    return (
        <section className="not-found section">
            <div className="container not-found__content">

                <p className="not-found__code">
                    404
                </p>

                <h1>
                    Page Not Found
                </h1>

                <p className="not-found__message">
                    The page you're looking for doesn't exist
                    or may have been moved.
                </p>

                <Link to="/" className="btn">
                    Back to Home
                </Link>

            </div>
        </section>
    );
};

export default NotFound;