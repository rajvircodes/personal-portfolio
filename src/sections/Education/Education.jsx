import "./Education.css";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import education from "../../data/education";

const Education = () => {
    return (
        <section id="education" className="education section">
            <div className="container">

                <SectionTitle
                    title="Education"
                    subtitle="My academic background"
                />

                <div className="education__timeline">

                    {education.map((item) => (
                        <article
                            key={item.id}
                            className="education__item"
                        >
                            <div className="education__period">
                                {item.period}
                            </div>

                            <div className="education__content">
                                <h3>{item.degree}</h3>

                                <p className="education__institution">
                                    {item.institution}
                                </p>

                                <p className="education__description">
                                    {item.description}
                                </p>
                            </div>
                        </article>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default Education;