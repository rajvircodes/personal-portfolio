import About from "../About/About"
import Hero from "../Hero/Hero"
import Project from "../Projects/Project"
import Skills from "../Skills/Skill"

const HomePage = () => {
    return (
        <div>
            <Hero />
            <About />
            <Skills />
            <Project />
        </div>
    )
}

export default HomePage