import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import ListItem from "@mui/material/ListItem";

export const StyledButton = styled(Button)`
  svg {
    margin-right: 16px;
  }
`;

export const containerStyles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const ListContainer = styled.div`
  width: 800px;
`;

export const StyledListItem = styled(ListItem)`
  width: 100%;
`;
