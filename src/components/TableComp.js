import React from "react";
import { Table } from "react-bootstrap";

export const TableComp = ({ users }) => {
  return (
    <Table striped bordered hover variant="success">
      <thead>
        <tr>
          <th>Users List</th>
        </tr>
      </thead>
      <tbody>
        {users.map((item, i) => {
          return (
            <tr>
              <td>{item}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
