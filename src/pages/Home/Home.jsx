import Hero from "../../sections/Hero/Hero";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const Home = () => {
    return (
        <>
            <Hero />

            <section className="section">
                <div className="container">
                    <SectionTitle
                        title="About Me"
                        subtitle="A little about my journey"
                    />
                </div>
            </section>
        </>
    );
};

export default Home;