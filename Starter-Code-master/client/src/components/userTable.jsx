import React, { useEffect } from "react";
import MaterialTable from "@material-table/core";
import { getAllUsers } from "../services/userservice";
import { useState } from "react";

const userTable = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const userData = await getAllUsers();
        setUsers(userData);
      } catch (error) {
        throw new error();
      }
    }

    fetchData();
  }, []);

  return (
    <MaterialTable
      title="user taable"
      columns={[
        { title: "ID", field: "id" },
        { title: "name", field: "name" },
        { title: "email", field: "email" },
      ]}
      data={users}
    />
  );
};

export default userTable;
