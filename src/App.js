import { Container } from "react-bootstrap";
import "./App.css";
import { FormComp } from "./components/FormComp";
import { TableComp } from "./components/TableComp";

function App() {
  return (
    <Container>
      <FormComp />

      <hr />
      <TableComp />
    </Container>
  );
}

export default App;
