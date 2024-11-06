import { Link } from "react-router-dom"

function Navigation() {

    return (
        <nav className="Navbar">
            <ul>
                <li>
                    <Link to={'/'}>Inicio</Link>
                </li>
                <li>
                    <Link to="/sobre-mi">Sobre mi</Link>
                </li>
                <li>
                    <Link to="/proyectos">Proyectos</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation