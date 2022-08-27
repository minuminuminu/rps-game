import styled from "styled-components";
import { useEffect } from "react";

const AdminPanel = styled.div`
  background-color: red;
  width: 400px;
  height: 250px;
`;

const Admin = ({ socket }) => {
  useEffect(() => {}, [socket]);

  return <AdminPanel></AdminPanel>;
};

export default Admin;
