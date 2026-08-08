import "./Contact.css";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import contact from "../../data/contact";
import social from "../../data/social";

const Contact = () => {
    return (
        <section id="contact" className="contact section">
            <div className="container">

                <SectionTitle
                    title={contact.title}
                    subtitle={contact.description}
                />

                <div className="contact__content">

                    <p className="contact__availability">
                        {contact.availability}
                    </p>

                    <a
                        href={`mailto:${contact.email}`}
                        className="btn contact__email"
                    >
                        Send Me an Email
                    </a>

                    <div className="contact__socials">

                        <a
                            href={social.github}
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>

                        <a
                            href={social.linkedin}
                            target="_blank"
                            rel="noreferrer"
                        >
                            LinkedIn
                        </a>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default Contact;