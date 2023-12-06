import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

function Navbard(props: any) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar className="navbar" color="faded" light>
        <NavbarBrand href="/" className="me-auto">
          <div className="d-flex justify-content">
            <img src="/img/home/logo-title.png" alt="." />
            <p className="navbartitle">Voyance Global</p>
          </div>
        </NavbarBrand>
        <NavbarToggler
          onClick={toggleNavbar}
          className="me-2"
          style={{ color: "white", backgroundColor: "white" }}
        />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem className="navbaritem">
              <NavLink style={{ color: "white" }} href="/actualite">
                Actualite
              </NavLink>
            </NavItem>
            <NavItem className="navbaritem">
              <NavLink style={{ color: "white" }} href="/formation">
                Formation
              </NavLink>
            </NavItem>
            <NavItem className="navbaritem">
              <NavLink style={{ color: "white" }} href="/homeblogs">
                Blogs
              </NavLink>
            </NavItem>
            <NavItem className="navbaritem">
              <NavLink
                style={{ color: "white" }}
                href="http://tunis0.telemaque.fr/mediawiki/index.php?title=Sp%C3%A9cial:Connexion&returnto=Accueil"
              >
                WikiCosmo
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navbard;
