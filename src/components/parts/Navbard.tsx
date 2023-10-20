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
        <NavbarBrand
          href="/"
          className="me-auto"
          style={{ color: "white", fontStyle: "oblique", fontSize: 27 }}
        >
          <img src="/img/home/logo-title.png" alt="." />
          Voyance Global
        </NavbarBrand>
        <NavbarToggler
          onClick={toggleNavbar}
          className="me-2"
          style={{ color: "white", backgroundColor: "white" }}
        />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink
                style={{ color: "white", fontStyle: "oblique", fontSize: 20 }}
                href="/actualite"
              >
                Actualite
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style={{ color: "white", fontStyle: "oblique", fontSize: 20 }}
                href="#"
              >
                Formation
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style={{ color: "white", fontStyle: "oblique", fontSize: 20 }}
                href="#"
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
