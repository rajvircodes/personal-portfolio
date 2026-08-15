import { useRef, useState } from "react";

import "./Projects.css";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

import projects from "../../data/projects";

const Projects = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const startX = useRef(0);
    const isDragging = useRef(false);

    const totalProjects = projects.length;

    const goNext = () => {
        setActiveIndex((prev) => (prev + 1) % totalProjects);
    };

    const goPrevious = () => {
        setActiveIndex(
            (prev) => (prev - 1 + totalProjects) % totalProjects
        );
    };

    const goToProject = (index) => {
        setActiveIndex(index);
    };

    /*
     * Find the shortest circular distance between
     * the current card and another card.
     */
    const getRelativePosition = (index) => {
        let position = index - activeIndex;

        if (position > totalProjects / 2) {
            position -= totalProjects;
        }

        if (position < -totalProjects / 2) {
            position += totalProjects;
        }

        return position;
    };

    /* ===============================
       Touch / Mouse Swipe
       =============================== */

    const handlePointerDown = (event) => {
        startX.current = event.clientX;
        isDragging.current = true;
    };

    const handlePointerUp = (event) => {
        if (!isDragging.current) return;

        const distance = event.clientX - startX.current;

        isDragging.current = false;

        // Swipe threshold
        if (Math.abs(distance) < 50) return;

        if (distance < 0) {
            goNext();
        } else {
            goPrevious();
        }
    };

    const handlePointerCancel = () => {
        isDragging.current = false;
    };

    return (
        <section id="projects" className="projects section">

            <div className="container">

                <SectionTitle
                    title="Featured Projects"
                    subtitle="Some of the things I've built"
                />

                {/* Carousel */}

                <div
                    className="projects__carousel"
                    onPointerDown={handlePointerDown}
                    onPointerUp={handlePointerUp}
                    onPointerCancel={handlePointerCancel}
                >

                    {/* Previous */}

                    <button
                        className="projects__arrow projects__arrow--left"
                        onClick={goPrevious}
                        aria-label="Previous project"
                    >
                        ←
                    </button>


                    {/* Cards */}

                    <div className="projects__stage">

                        {projects.map((project, index) => {

                            const position =
                                getRelativePosition(index);

                            /*
                             * Only render cards that are reasonably
                             * close to the active card.
                             *
                             * This also allows the carousel to work
                             * with more projects in the future.
                             */
                            const isVisible =
                                Math.abs(position) <= 2;

                            if (!isVisible) return null;

                            return (
                                <div
                                    key={project.id}
                                    className={`projects__slide ${position === 0
                                            ? "projects__slide--active"
                                            : ""
                                        }`}
                                    data-position={position}
                                    onClick={() => {
                                        if (position !== 0) {
                                            goToProject(index);
                                        }
                                    }}
                                >
                                    <ProjectCard
                                        project={project}
                                    />
                                </div>
                            );
                        })}

                    </div>


                    {/* Next */}

                    <button
                        className="projects__arrow projects__arrow--right"
                        onClick={goNext}
                        aria-label="Next project"
                    >
                        →
                    </button>

                </div>


                {/* Progress Dots */}

                <div className="projects__dots">

                    {projects.map((project, index) => (
                        <button
                            key={project.id}
                            className={`projects__dot ${index === activeIndex
                                    ? "projects__dot--active"
                                    : ""
                                }`}
                            onClick={() => goToProject(index)}
                            aria-label={`Go to ${project.title}`}
                        />
                    ))}

                </div>

            </div>

        </section>
    );
};

export default Projects;