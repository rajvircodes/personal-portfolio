import "./Skills.css";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import SkillCard from "../../components/SkillCard/SkillCard";

import skills from "../../data/skills";

const Skills = () => {
    return (
        <section id="skills" className="skills section">
            <div className="container">

                <SectionTitle
                    title="My Skills"
                    subtitle="Technologies and tools I work with"
                />

                <div className="skills__grid">
                    {skills.map((group) => (
                        <SkillCard
                            key={group.id}
                            category={group.category}
                            skills={group.skills}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Skills;