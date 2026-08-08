import "./Projects.css";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

import projects from "../../data/projects";

const Projects = () => {
    return (
        <section id="projects" className="projects section">
            <div className="container">

                <SectionTitle
                    title="Featured Projects"
                    subtitle="Some of the things I've built"
                />

                <div className="projects__grid">

                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                        />
                    ))}

                </div>

            </div>
        </section>
    );
};

export default Projects;