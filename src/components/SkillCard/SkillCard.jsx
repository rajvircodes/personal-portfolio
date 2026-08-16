import "./SkillCard.css";

const SkillCard = ({ category, skills }) => {
    return (
        <article className="skill-card">
            <h3 className="skill-card__title">
                {category}
            </h3>

            <ul className="skill-card__list">
                {skills.map((skill) => (
                    <li key={skill} className="skill-card__item">
                        {skill}
                    </li>
                ))}
            </ul>
        </article>
    );
};

export default SkillCard;