import React from "react";
import imgBienvenida from "../imagenes/imagen-de-vinos.jpg"
import "../styles/components/pages/HomePage.css"

const HomePage = (propt) => {
    return (
        <main className="holder">
        <img src={imgBienvenida} alt="imagen bienvenida"/>
        <div className="columnas">
            <section className="bienvenida">
                <h2>Bienvenidos</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eum doloribus nihil quae ratione ab ut reiciendis quos tempore eligendi id praesentium obcaecati consectetur, at est iure aspernatur a fugit?
                Dolores quia expedita laborum inventore nulla natus tempora sequi, neque id velit incidunt soluta beatae minima atque vel, eveniet aut provident error placeat in obcaecati deserunt quidem. Tempora, expedita repudiandae?</p>
            </section>
            <section className="artesanias">
                <h2>Productos artesanales</h2>
                <div><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae modi ut voluptates, vero eos quidem ab totam ipsa quae nostrum, voluptate maxime labore natus facilis culpa minus inventore ad. Minus.</p></div>
            </section>
        </div>
    </main>
    );
}
export default HomePage;