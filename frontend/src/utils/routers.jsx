import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Nav from "./nav";

import Error404 from "../components/error404";
import Contacts from "../components/viewcontacts";
import CreateContact from "../components/createcontact";

import React, { useState } from "react";

export default function Rutas() {
  return (
    <>
      <Router>
      <Nav/>
          <Routes>
            <Route path="/" element={<CreateContact/>}></Route>
            <Route path="/viewcontact" element={<Contacts/>}></Route>
            <Route path="/error404" element={<Error404 />} />
            <Route path="*" element={<Navigate to="/error404" />} />
          </Routes>
      </Router>
    </>
  );
};

