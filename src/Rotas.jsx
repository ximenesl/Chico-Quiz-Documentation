import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./page/mainPage";

function Rotas() {
    return (
      <>
        <Routes>
          <Route path="/" element={ <MainPage />}/>
        </Routes>
      </>
    );
  }

  export default Rotas;