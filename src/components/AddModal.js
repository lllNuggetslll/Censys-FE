import React from "react";
import Box from "@mui/material/Box";

import { containerStyles, StyledButton } from "./styles";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { useAddToDo } from "./../hooks/useAddToDo";

export const AddModal = ({ isAddModalOpen, setIsAddModalOpen }) => {
  const addToDo = useAddToDo();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const title = e.target[0].value;
    const description = e.target[1].value;

    await addToDo.mutate({
      title,
      description,
    });

    setIsAddModalOpen(false);
  };

  return (
    <Modal open={isAddModalOpen} onClose={() => setIsAddModalOpen(false)}>
      <Box
        sx={containerStyles}
        onSubmit={handleSubmit}
        component="form"
        display="flex"
        flexDirection="column"
        autoComplete="off"
      >
        <TextField name="title" label="Title" variant="standard" required />
        <TextField
          name="Description"
          label="Description"
          multiline
          rows={4}
          variant="standard"
          required
        />

        <StyledButton type="submit" onClick={() => setIsAddModalOpen(true)}>
          <AddCircleOutlineIcon />
          Add Todo!
        </StyledButton>
      </Box>
    </Modal>
  );
};
