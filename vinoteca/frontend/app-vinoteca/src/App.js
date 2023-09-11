import React from "react";
import "./App.css"

import { BrowserRouter,Routes, Route } from "react-router-dom";

import Nav from "./components/layout/nav";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

import HomePage from "./pages/HomePage"
import ContactoPage from "./pages/ContactoPage"
import NosotrosPage from "./pages/NosotrosPage"
import CatalogoPage from "./pages/CatalogoPage"
import GaleriaPage from "./pages/GaleriaPage"
import EventosPage from "./pages/EventosPage"


function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="contacto" element={<ContactoPage/>}/>
        <Route path="Nosotros" element={<NosotrosPage/>}/>
        <Route path="Catalogo" element={<CatalogoPage/>}/>
        <Route path="Galeria" element={<GaleriaPage/>}/>
        <Route path="Eventos" element={<EventosPage/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
