import { Link } from "react-router-dom";

import "./CV.css";

import profile from "../../data/profile";

const CV = () => {
    return (
        <section className="cv section">
            <div className="container">

                <div className="cv__header">

                    <Link
                        to="/"
                        className="cv__back"
                    >
                        ← Back to Portfolio
                    </Link>

                    <h1>My Resume</h1>

                    <p>
                        A detailed overview of my education, skills,
                        projects, and development journey.
                    </p>

                    <div className="cv__actions">

                        <a
                            href={profile.resume}
                            target="_blank"
                            rel="noreferrer"
                            className="btn"
                        >
                            View Resume
                        </a>

                        <a
                            href={profile.resume}
                            download
                            className="btn cv__download"
                        >
                            Download PDF
                        </a>

                    </div>

                </div>

                <div className="cv__preview">

                    <iframe
                        src={profile.resume}
                        title={`${profile.name}'s Resume`}
                    />

                </div>

            </div>
        </section>
    );
};

export default CV;