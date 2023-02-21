import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBars} from "@fortawesome/free-solid-svg-icons"
import CardWidget from "./CardWidget"


const NavBar = (background) => 
{
return (
    <>
    <header className={`header-Backgroud ${background}`}><h1>Entre Libros</h1></header>

    <div className="container-menu">

        <nav>
            <ul className="container-nav">
            <div className= "boton-Menu">
            <FontAwesomeIcon icon={faBars} size="lg" color="black" />
            </div>
                <li><a href="/">Pagina Principal</a></li>
                <li><a href="/">Sobre Nosotros</a></li>
                <li className="items-productos"><a href="/">Nuestros Productos <span className="arrow"></span></a></li>
                <li><a href="/">Contactenos</a></li>
            </ul>
        </nav>
    </div>

    <div>
        <CardWidget/>
    </div>
    
    </>
)}

export default NavBar 