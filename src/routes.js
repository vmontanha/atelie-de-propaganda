import React from "react";
import {
          BrowserRouter,
          Routes,
          Route
} from "react-router-dom";
import Login from "./components/Login/Login";
import Cadastrar from "./components/Cadastrar/Cadastrar";

const Rotas = () => {
          return (
                    <BrowserRouter>
                              <Routes>
                                        <Route element={<Login />} path="/" exact />
                                        <Route element={<Cadastrar />} path="/cadastrar" />
                              </Routes>
                    </BrowserRouter>
          )
}

export default Rotas;