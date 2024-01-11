import { useState } from "react";
import { addUser } from "../../../../actions/Users/action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import {
  Button,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

interface UserAddPropsType {
  refresh: () => void;
}

const UserAdd = (props: UserAddPropsType) => {
  const [isOpened, setIsOpened] = useState<boolean>(false); // form state for modal.

  // form states
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const submit = () => {
    const newUser = {
      username,
      password,
    };
    addUser(newUser, () => {
      props.refresh();
      setIsOpened(false);
      reset();
    });
  };

  const reset = () => {
    setUsername("");
    setPassword("");
  };

  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const eye = <FontAwesomeIcon icon={faEye} />;

  return (
    <>
      <button className="usersAdd-button" onClick={() => setIsOpened(true)}>
        <FontAwesomeIcon icon={faUserPlus} color="white" />
      </button>
      <Modal
        centered
        scrollable
        isOpen={isOpened}
        toggle={() => setIsOpened(!isOpened)}
      >
        <ModalBody style={{ backgroundColor: "rgba(147, 147, 203, 0.866)" }}>
          <p style={{ color: "white", fontSize: 20, textAlign: "center" }}>
            Ajouter Utilisateur
          </p>
          <span
            onClick={() => setIsOpened(false)}
            style={{
              position: "absolute",
              right: 10,
              color: "white",
              top: 10,
              cursor: "pointer",
            }}
          >
            X
          </span>
          <br />
          <FormGroup>
            <Label style={{ color: "white", fontSize: 18 }} for="username">
              Utilisateur
            </Label>
            <Input
              value={username}
              id="username"
              name="username"
              type="text"
              onChange={(e) => setUsername(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
            />
            <i
              style={{
                position: "absolute",
                right: 30,
                top: 215,
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
            onClick={submit}
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
            onClick={reset}
          >
            Annuler
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default UserAdd;
