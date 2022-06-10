import { useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import { FormComp } from "./components/FormComp";
import { TableComp } from "./components/TableComp";

function App() {
  const [users, setUsers] = useState(["Krishna", "Shrestha", "prerana"]);

  return (
    <Container>
      <FormComp />

      <hr />
      <TableComp users={users} />
    </Container>
  );
}

export default App;
