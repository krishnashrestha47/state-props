import { useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import { FormComp } from "./components/FormComp";
import { TableComp } from "./components/TableComp";

function App() {
  const [users, setUsers] = useState(["Krishna Shrestha", "Prerana Gurung"]);

  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  return (
    <Container>
      <FormComp addUser={addUser} />

      <hr />
      <TableComp users={users} />
    </Container>
  );
}

export default App;
