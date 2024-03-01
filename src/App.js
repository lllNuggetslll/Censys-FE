import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

import styled from "@emotion/styled";
import { useGetToDos } from "./hooks/useGetToDos";
import Button from "@mui/material/Button";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import { AddModal } from "./components/AddModal";
import { ViewModal } from "./components/ViewModal";

import { ToDoList } from "./components/ToDoList";

const StyledButton = styled(Button)`
  svg {
    margin-right: 16px;
  }
`;

function App() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedToDoKey, setSelectedToDoKey] = useState("");

  const { isPending, data, isFetching } = useGetToDos();

  if (isPending || isFetching) {
    return <img src={logo} className="App-logo" alt="logo" />;
  }

  return (
    <>
      <h1>Another Todo List</h1>

      <StyledButton onClick={() => setIsAddModalOpen(true)} variant="outlined">
        <AddCircleOutlineIcon />
        Add Todo!
      </StyledButton>

      <ToDoList data={data} handleSetSelectedToDoKey={setSelectedToDoKey} />

      <AddModal
        isAddModalOpen={isAddModalOpen}
        setIsAddModalOpen={setIsAddModalOpen}
      />

      <ViewModal
        selectedToDoKey={selectedToDoKey}
        setSelectedToDoKey={setSelectedToDoKey}
      />
    </>
  );
}

export default App;
