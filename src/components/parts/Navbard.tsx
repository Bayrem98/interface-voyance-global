import React, { ChangeEvent, useState } from "react";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Alert } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Modal,
  Form,
  ModalHeader,
  ModalBody,
  FormGroup,
  Input,
  Label,
  ModalFooter,
  Button,
} from "reactstrap";

function Navbard(props: any) {
  const [collapsed, setCollapsed] = useState(true);
  const [isOpened, setIsOpened] = useState(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const toggleNavbar = () => setCollapsed(!collapsed);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const eye = <FontAwesomeIcon icon={faEye} />;

  const changeUsername = (e: ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);

  const changePassword = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const navigate = useNavigate();

  const toggleModal = (e: any) => {
    setIsOpened(!isOpened);
    e.preventDefault();
  };

  const handelClose = () => setIsOpened(false);

  const handleReset = () => {
    setUsername("");
    setPassword("");
    handelClose();
  };

  const handleLogin = (e: any) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/login`, {
        username,
        password,
      })
      .then(({ data }) => {
        localStorage.setItem("access_token", data.access_token);
        window.location.reload();
        handelClose();
        navigateto();
        console.log(data);
      })
      .catch((error) => {
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          setErrorMessage(error.response.data.message);
        } else {
          setErrorMessage("Une erreur s'est produite. Veuillez réessayer.");
        }
      });
  }; // function for login admin.

  const navigateto = () => {
    window.location.replace("/addvideo");
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      <Navbar className="navbar" color="faded" light>
        <NavbarBrand href="/" className="me-auto">
          <div className="d-flex justify-content">
            <img
              className="icon-brand"
              src="/img/home/logo-title.png"
              alt="."
            />
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
              <NavLink style={{ color: "white" }} href="/videopage">
                Horoscope 2024
              </NavLink>
            </NavItem>

            {localStorage.getItem("access_token") ? (
              <NavItem
                className="navbaritem"
                onClick={logout}
                style={{ cursor: "pointer" }}
              >
                <NavLink style={{ color: "white" }}>Logout</NavLink>
              </NavItem>
            ) : (
              <NavItem
                className="navbaritem"
                onClick={toggleModal}
                style={{ cursor: "pointer" }}
              >
                <NavLink style={{ color: "white" }}>login</NavLink>
              </NavItem>
            )}

            {localStorage.getItem("access_token") && (
              <NavItem className="navbaritem">
                <NavLink style={{ color: "white" }} href="/userstable">
                  Ajouter utilisateur
                </NavLink>
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </Navbar>

      {isOpened ? (
        <Modal
          centered
          scrollable
          isOpen={isOpened}
          toggle={() => setIsOpened(false)}
        >
          <Form onSubmit={(e) => handleLogin(e)}>
            <ModalHeader
              style={{
                display: "flex",
                justifyContent: "center",
                backgroundColor: "rgba(147, 147, 203, 0.866)",
              }}
            >
              {errorMessage && (
                <Alert
                  message=""
                  description={errorMessage}
                  type="error"
                  showIcon
                  style={{
                    width: "auto",
                    minWidth: "5ch",
                    maxWidth: "60ch",
                  }}
                />
              )}
            </ModalHeader>
            <ModalBody
              style={{ backgroundColor: "rgba(147, 147, 203, 0.866)" }}
            >
              <p style={{ color: "white", fontSize: 20, textAlign: "center" }}>
                Session-Admin
              </p>
              <span
                style={{
                  position: "absolute",
                  right: 10,
                  color: "white",
                  top: 10,
                  cursor: "pointer",
                }}
                onClick={handelClose}
              >
                X
              </span>
              <FormGroup>
                <Label style={{ color: "white", fontSize: 18 }} for="username">
                  Utilisateur
                </Label>
                <Input
                  value={username}
                  id="username"
                  name="username"
                  type="text"
                  onChange={changeUsername}
                />
              </FormGroup>
              <FormGroup>
                <Label style={{ color: "white", fontSize: 18 }} for="password">
                  Mot de passe
                </Label>
                <Input
                  value={password}
                  id="password"
                  name="password"
                  type={passwordShown ? "text" : "password"}
                  onChange={changePassword}
                />
                <i
                  style={{
                    position: "absolute",
                    right: 30,
                    top: 193,
                    cursor: "pointer",
                  }}
                  onClick={togglePasswordVisiblity}
                >
                  {eye}
                </i>
              </FormGroup>
            </ModalBody>
            <ModalFooter
              style={{
                backgroundColor: "rgba(147, 147, 203, 0.866)",
                border: 0,
              }}
            >
              <Button
                style={{
                  backgroundColor: "black",
                  color: "white",
                  border: 0,
                }}
                type="submit"
                disabled={!username || !password}
              >
                Confirmer
              </Button>
              <Button
                style={{
                  backgroundColor: "white",
                  color: "rgba(147, 147, 203, 0.866)",
                  border: 0,
                }}
                onClick={handleReset}
              >
                Annuler
              </Button>
            </ModalFooter>
          </Form>
        </Modal>
      ) : (
        <></>
      )}
    </>
  );
}

export default Navbard;
