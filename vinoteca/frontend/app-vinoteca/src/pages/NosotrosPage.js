import React from "react";
import imagenSVG1 from "../imagenes/watering-plant-9.svg"
import imagenSVG2 from "../imagenes/couple-cb.svg"
import imagenSVG3 from "../imagenes/startup-77.svg"
import imagenPerfil from "../imagenes/wave (2).svg"
import "../styles/components/pages/NosotrosPage.css"

const NosotrosPage = (propt) => {
    return (
        <main className="holder">
        <div className="info-sobre-nosotros">
            <h2>Un poco acerca de nosotros</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem reprehenderit dicta tenetur unde error explicabo, corrupti aliquid recusandae rerum maxime, beatae sequi ab sunt dolore alias officiis ipsa, similique saepe.
            Doloremque ipsum itaque facilis, sint unde mollitia perspiciatis optio illo dignissimos magni assumenda quia explicabo hic maiores reiciendis totam! Dolor fugiat vero commodi sapiente soluta quisquam id necess</p>
        </div>
        <div className="contenedor-svg-about">
            <div className="svg">
                <img src={imagenSVG1} alt=""/>
                <h3>
                    cuidado al medio ambiente
                </h3>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing eatis molestias, laboriosam eligendi hic a omnis?
                </p>
            </div>
            <div className="svg">   
                <img src={imagenSVG2} alt=""/>
                <h3>
                    Eventos
                </h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expe
                </p>
            </div>
            <div className="svg">
                <img src={imagenSVG3} alt=""/>
                <h3>
                    Justos
                </h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing el</p>
            </div>
        </div>
        <div className="personal">
            <h2>
                Nuestro grupo de trabajo
            </h2>
            <div className="contenedor-de-carta">
                <div className="container">
                    <div className="card-presentacion">
                        <img src={imagenPerfil} alt="guille Deluxe"/>
                        <h1>guille taglia</h1>
                        <h2>jefa-vinoteca</h2>
                        <p className="button">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa tenetur possimus rerum fugit officia, architecto repudiandae dolore quis, minus tempore veniam earum. Labore amet harum nobis dolor fuga asperiores quidem!</p>
                    </div>
                </div>
                <div className="container">
                    <div className="card-presentacion">
                        <img src={imagenPerfil} alt="guille Deluxe"/>
                        <h1>guille taglia</h1>
                        <h2>jefa-vinoteca</h2>
                        <p className="button">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa tenetur possimus rerum fugit officia, architecto repudiandae dolore quis, minus tempore veniam earum. Labore amet harum nobis dolor fuga asperiores quidem!</p>
                    </div>
                </div>
                <div className="container">
                    <div className="card-presentacion">
                        <img src={imagenPerfil} alt="Chyno Deluxe"/>
                        <h1>guille taglia</h1>
                        <h2>jefa-vinoteca</h2>
                        <p className="button">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa tenetur possimus rerum fugit officia, architecto repudiandae dolore quis, minus tempore veniam earum. Labore amet harum nobis dolor fuga asperiores quidem!</p>
                    </div>
                </div>
            </div>
        </div>
        
    </main>
    );
}
export default NosotrosPage;