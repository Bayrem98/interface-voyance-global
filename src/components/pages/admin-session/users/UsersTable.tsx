import { useEffect, useState } from "react";
import { ButtonGroup, Table } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import UserAdd from "./UserAdd";
import UserDelete from "./UserDelete";
import User from "../../../../@types/User";
import { getUsers } from "../../../../actions/Users/action";

interface Props {}

const UsersTable = (props: Props) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUsers(setUsers);
  }, []);

  return (
    <>
      <div className="users-space">
        <div className="d-flex justify-content-between">
          <p className="users-space-title">
            Tableau des utilisateurs
          </p>
          <UserAdd refresh={() => getUsers(setUsers)} />
        </div>
        <br />
        <Table bordered responsive hover>
          <thead>
            <tr>
              <th>Utilisateur</th>
              <th style={{ textAlign: "center" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(users) && users.length ? (
              users.map((user) => (
                <tr className="userstable-tbody" key={user._id}>
                  <td>{user.username}</td>
                  <td style={{ textAlign: "center" }}>
                    <ButtonGroup>
                      <UserDelete
                        user={user}
                        refresh={() => getUsers(setUsers)}
                      />
                    </ButtonGroup>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={2}
                  className="text-center p-5"
                  style={{ color: "#0e0e0ee7" }}
                >
                  <FontAwesomeIcon icon={faBoxOpen} size="4x" />
                  <br />
                  Pas des données...
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default UsersTable;
