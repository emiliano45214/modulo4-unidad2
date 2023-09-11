import React from "react";
import imagenContacto from "../imagenes/reading-a-book (2).svg"
import "../styles/components/pages/ContactoPage.css"

const ContactoPage = (propt) => {
    return (
        <main className="">
        <div className="contenido-de-contacto">
            <div className="portada">
                <div className="textos-contacto">
                    <h2>contactanos</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur omnis minus corporis in natus, sunt sed quis numquam id illum autem ex nulla praesentium nemo voluptatem quia iusto optio iure.</p>
                </div>
                <div className="imagen-contacto">
                    <img src={imagenContacto} alt=""/>
                </div>
                
            </div>
            <div className="wave" style={{height: "150px", overflow: "hidden"}} ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100%", width: "100%"}}><path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{stroke: "none", fill: "rgb(255, 255, 255)"}}></path></svg></div>
            <div><div className="wave2" style={{height: "150px", overflow: "hidden"}} ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100%", width: "100%"}}><path d="M0.00,49.98 C149.99,150.00 271.49,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style={{stroke: "none", fill: "rgb(255, 255, 255)"}}></path></svg></div></div>
        </div>
        <div className="informacionExtra-contacto">
            <div className="info-1">
                <h3>
                    Acerca de Nosotros
                </h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit autem sunt quidem eaque adipisci, voluptatum repellat. Mollitia quisquam tenetur, nostrum impedit ab aliquam, odio suscipit inventore quis veniam, incidunt consequatur.</p>
                <button>contactanos</button>
            </div>
            <div className="info-2">
                <h3>
                    Inconvenientes
                </h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit autem sunt quidem eaque adipisci, voluptatum repellat. Mollitia quisquam tenetur, nostrum impedit ab aliquam, odio suscipit inventore quis veniam, incidunt consequatur.</p>
                <button>contactanos</button>
            </div>
        </div>
    </main>
    );
}
export default ContactoPage;