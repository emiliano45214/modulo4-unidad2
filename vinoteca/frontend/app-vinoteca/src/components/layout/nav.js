import react from "react";
import "../../styles/components/layout/navBar.css";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav>
            <div className="holder">
                <ul>
                    <li><NavLink to="/" className={({isActive}) => isActive ? "activo" :undefined}>Home</NavLink></li>
                    <li><NavLink to="/Nosotros" className={({isActive}) => isActive ? "activo" :undefined}>Sobre Nosotros</NavLink></li>
                    <li><NavLink to="/Catalogo" className={({isActive}) => isActive ? "activo" :undefined}>Catalogo</NavLink></li>
                    <li><NavLink to="/Galeria" className={({isActive}) => isActive ? "activo" :undefined}>Galeria</NavLink></li>
                    <li><NavLink to="/Eventos" className={({isActive}) => isActive ? "activo" :undefined}>Eventos</NavLink></li>
                    <li><NavLink to="/Contacto" className={({isActive}) => isActive ? "activo" :undefined}>Contacto</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}
export default Nav;