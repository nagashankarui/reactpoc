import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./views/login/Login";
import WelcomePage from "./welcome";
import NewPage from "./layout";
import CompanyDetails from "./details";
import './assets/css/style.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/newpage" element={<NewPage />} />
        <Route path="/details/:id" element={<CompanyDetails />} />
      </Routes>
    </BrowserRouter>
  </>
)