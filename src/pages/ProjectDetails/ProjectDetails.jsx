import { Link, useParams } from "react-router-dom";

import "./ProjectDetails.css";

import projects from "../../data/projects";

const ProjectDetails = () => {
    const { id } = useParams();

    const project = projects.find(
        (item) => item.id === id
    );

    if (!project) {
        return (
            <section className="project-details section">
                <div className="container project-details__not-found">

                    <h1>Project Not Found</h1>

                    <p>
                        The project you're looking for doesn't exist.
                    </p>

                    <Link to="/" className="btn">
                        Back to Home
                    </Link>

                </div>
            </section>
        );
    }

    return (
        <section className="project-details section">
            <div className="container">

                {/* Header */}

                <header className="project-details__header">

                    <Link
                        to="/#projects"
                        className="project-details__back"
                    >
                        ← Back to Projects
                    </Link>

                    <h1>{project.title}</h1>

                    <p>
                        {project.description}
                    </p>

                </header>

                {/* Technologies */}

                <div className="project-details__technologies">

                    {project.technologies.map((technology) => (
                        <span key={technology}>
                            {technology}
                        </span>
                    ))}

                </div>

                {/* Links */}

                <div className="project-details__links">

                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="btn"
                        >
                            GitHub
                        </a>
                    )}

                    {project.live && (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                            className="btn project-details__live"
                        >
                            Live Demo
                        </a>
                    )}

                </div>

                {/* Problem */}

                <article className="project-details__section">

                    <h2>The Problem</h2>

                    <p>
                        {project.details.problem}
                    </p>

                </article>

                {/* Solution */}

                <article className="project-details__section">

                    <h2>The Solution</h2>

                    <p>
                        {project.details.solution}
                    </p>

                </article>

                {/* Features */}

                <article className="project-details__section">

                    <h2>Key Features</h2>

                    <ul>
                        {project.details.features.map((feature) => (
                            <li key={feature}>
                                {feature}
                            </li>
                        ))}
                    </ul>

                </article>

                {/* Challenges */}

                <article className="project-details__section">

                    <h2>Challenges</h2>

                    <ul>
                        {project.details.challenges.map((challenge) => (
                            <li key={challenge}>
                                {challenge}
                            </li>
                        ))}
                    </ul>

                </article>

                {/* Learning */}

                <article className="project-details__section">

                    <h2>What I Learned</h2>

                    <p>
                        {project.details.learning}
                    </p>

                </article>

            </div>
        </section>
    );
};

export default ProjectDetails;