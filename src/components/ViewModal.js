import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import { useGetToDo } from "../hooks/useGetToDo";
import { useDeleteToDo } from "../hooks/useDeleteToDo";
import { containerStyles, StyledButton } from "./styles";

export const ViewModal = ({ selectedToDoKey, setSelectedToDoKey }) => {
  const deleteToDo = useDeleteToDo();
  const { data } = useGetToDo({ key: selectedToDoKey });

  if (!data) {
    return null;
  }

  const { title, description } = data;

  const handleDelete = async () => {
    await deleteToDo.mutate(selectedToDoKey);

    setSelectedToDoKey("");
  };

  return (
    <Modal open={!!selectedToDoKey} onClose={() => setSelectedToDoKey("")}>
      <Box
        sx={containerStyles}
        display="flex"
        flexDirection="column"
        autoComplete="off"
      >
        <TextField variant="standard" value={title} />
        <TextField
          value={description}
          multiline
          rows={4}
          variant="standard"
          disabled
        />

        <StyledButton
          type="submit"
          onClick={handleDelete}
          variant="contained"
          color="error"
        >
          Delete Todo!
        </StyledButton>

        <StyledButton type="submit" onClick={() => setSelectedToDoKey("")}>
          Close
        </StyledButton>
      </Box>
    </Modal>
  );
};
