import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { ListContainer, StyledListItem } from "./styles";

export const ToDoList = ({ data, handleSetSelectedToDoKey }) => {
  return (
    <ListContainer>
      <List>
        {data?.map(({ key, title }) => {
          return (
            <StyledListItem key={key} disablePadding>
              <ListItemButton onClick={() => handleSetSelectedToDoKey(key)}>
                <ListItemIcon>
                  <ThumbUpIcon />
                </ListItemIcon>
                <ListItemText primary={title} />
              </ListItemButton>
            </StyledListItem>
          );
        })}
      </List>
    </ListContainer>
  );
};
