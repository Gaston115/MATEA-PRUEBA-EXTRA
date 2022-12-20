import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/nav.css"




const Nav = () =>{



  return (
    <div>
      <nav className="nav">
        <Link to="/">Crear Contacto</Link>
        <Link to="/viewcontact">Ver Contactos</Link>
        
        <div className="MenuUser">
        
        </div>
      </nav>

      
    </div>
  );
};

export default Nav;