import { Link } from "react-router-dom"
import './Navbar.css'

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <h1>LOGO</h1>
            </div>
            <div className="links">
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/projects'>Projects</Link>
                <Link to='/skills'>Skills</Link>
            </div>
        </nav>
    )
}

export default Navbar