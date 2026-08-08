import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
    return (
        <article className="project-card">

            {project.image && (
                <div className="project-card__image">
                    <img
                        src={project.image}
                        alt={`${project.title} preview`}
                        loading="lazy"
                    />
                </div>
            )}

            <div className="project-card__content">

                <h3 className="project-card__title">
                    {project.title}
                </h3>

                <p className="project-card__description">
                    {project.description}
                </p>

                <ul className="project-card__technologies">
                    {project.technologies.map((technology) => (
                        <li key={technology}>
                            {technology}
                        </li>
                    ))}
                </ul>

                <div className="project-card__links">

                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>
                    )}

                    {project.live && (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Live Demo
                        </a>
                    )}

                </div>

            </div>

        </article>
    );
};

export default ProjectCard;