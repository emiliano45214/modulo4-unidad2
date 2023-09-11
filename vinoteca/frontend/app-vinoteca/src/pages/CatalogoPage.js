import React from "react";
import "../styles/components/pages/CatalogoPage.css";

const CatalogoPage = (propt) => {
    return (
        <main class="holder">
        <div class="columnas-catalogo">
            <section class="filtros-section">
                <div class="">
                    <div class="titulo-buscador">
                        <h2>filtros</h2>
                        <h6>Buscador</h6>
                        <input type="search" name="hihhih" id="buscador" />
                    </div>
                    
                    <div class="tabs">
                        <div class="tab">
                            <input type="checkbox" id="chck1"/>
                            <label class="tab-label" for="chck1">tintos</label>
                            <div class="tab-content">
                                <div class="contido-de-acordeon">
                                    <label for="">..... <input type="checkbox" name="" id=""/></label>
                                            <label for="">..... <input type="checkbox" name="" id=""/></label>
                                            <label for="">..... <input type="checkbox" name="" id=""/></label>
                                            <label for="">..... <input type="checkbox" name="" id=""/></label>
                                            <label for="">..... <input type="checkbox" name="" id=""/></label>
                                </div>
                            </div>
                        </div>
                        <div class="tab">
                            <input type="checkbox" id="chck2"/>
                            <label class="tab-label" for="chck2">blancos</label>
                            <div class="tab-content">
                                <div class="contido-de-acordeon">
                                    <label for="">..... <input type="checkbox" name="" id=""/></label>
                                            <label for="">..... <input type="checkbox" name="" id=""/></label>
                                            <label for="">..... <input type="checkbox" name="" id=""/></label>
                                            <label for="">..... <input type="checkbox" name="" id=""/></label>
                                            <label for="">..... <input type="checkbox" name="" id=""/></label>
                                </div>
                            </div>
                        </div>
                                <div class="tab">
                                    <input type="checkbox" id="chck3"/>
                                    <label class="tab-label" for="chck3">rosados</label>
                                    <div class="tab-content">
                                        <div class="contido-de-acordeon">
                                            <label for="">..... <input type="checkbox" name="" id=""/></label>
                                            <label for="">..... <input type="checkbox" name="" id=""/></label>
                                            <label for="">..... <input type="checkbox" name="" id=""/></label>
                                            <label for="">..... <input type="checkbox" name="" id=""/></label>
                                            <label for="">..... <input type="checkbox" name="" id=""/></label>
                                    </div>
                                </div>
                            </div>
                            <div class="tab">
                                <input type="checkbox" id="chck4"/>
                                <label class="tab-label" for="chck4">Espumantes</label>
                                <div class="tab-content">
                                    <div class="contido-de-acordeon">
                                        <label for="">..... <input type="checkbox" name="" id=""/></label>
                                            <label for="">..... <input type="checkbox" name="" id=""/></label>
                                            <label for="">..... <input type="checkbox" name="" id=""/></label>
                                            <label for="">..... <input type="checkbox" name="" id=""/></label>
                                            <label for="">..... <input type="checkbox" name="" id=""/></label>
                                    </div>
                                    </div>
                                </div>
                                <div class="tab">
                                    <input type="checkbox" id="chck5"/>
                                    <label class="tab-label" for="chck5">precio</label>
                                    <div class="tab-content">
                                        <div class="contido-de-acordeon">
                                            <label for="">..... <input type="checkbox" name="" id=""/></label>
                                            <label for="">..... <input type="checkbox" name="" id=""/></label>
                                            <label for="">..... <input type="checkbox" name="" id=""/></label>
                                            <label for="">..... <input type="checkbox" name="" id=""/></label>
                                            <label for="">..... <input type="checkbox" name="" id=""/></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="section-cards-vinos">
                <a class="card" href="#"
                    >
                    <div>
                        <h1>malbeck</h1>
                        <p>The syntax of a language is how it works. How to actually write it. Learn HTML syntax…</p>
                        <div class="tags">
                            <div class="tag">¡Contactar!</div>
                        </div>
                    </div>
                </a>
                <a class="card" href="#"
                    >
                    <div>
                        <h1>malbeck</h1>
                        <p>The syntax of a language is how it works. How to actually write it. Learn HTML syntax…</p>
                        <div class="tags">
                            <div class="tag">¡Contactar!</div>
                        </div>
                    </div>
                </a>
                <a class="card" href="#"
                    >
                    <div>
                        <h1>malbeck</h1>
                        <p>The syntax of a language is how it works. How to actually write it. Learn HTML syntax…</p>
                        <div class="tags">
                            <div class="tag">¡Contactar!</div>
                        </div>
                    </div>
                </a>
                <a class="card" href="#"
                    >
                    <div>
                        <h1>malbeck</h1>
                        <p>The syntax of a language is how it works. How to actually write it. Learn HTML syntax…</p>
                        <div class="tags">
                            <div class="tag">¡Contactar!</div>
                        </div>
                    </div>
                </a>
                <a class="card" href="#"
                    >
                    <div>
                        <h1>malbeck</h1>
                        <p>The syntax of a language is how it works. How to actually write it. Learn HTML syntax…</p>
                        <div class="tags">
                            <div class="tag">¡Contactar!</div>
                        </div>
                    </div>
                </a>
                <a class="card" href="#"
                    >
                    <div>
                        <h1>malbeck</h1>
                        <p>The syntax of a language is how it works. How to actually write it. Learn HTML syntax…</p>
                        <div class="tags">
                            <div class="tag">¡Contactar!</div>
                        </div>
                    </div>
                </a>
            </section>
        </div>
    </main>
    );
}
export default CatalogoPage;