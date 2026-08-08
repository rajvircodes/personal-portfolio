import "./About.css";

import SectionTitle from "../../components/sectionTitle/SectionTitle";
import about from "../../data/about";

const About = () => {
    return (
        <section id="about" className="about section">
            <div className="container">

                <SectionTitle
                    title={about.title}
                    subtitle="A little about my journey"
                />

                <div className="about__content">

                    <div className="about__text">
                        <p>{about.description}</p>

                        <p>{about.secondParagraph}</p>
                    </div>

                    <div className="about__focus">
                        <h3>Currently focused on</h3>

                        <ul>
                            {about.focus.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default About;