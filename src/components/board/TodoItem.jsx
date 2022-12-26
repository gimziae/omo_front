import { Checkbox, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { useTodoDispatch } from "../TodoContext";
import DeleteIcon from "@mui/icons-material/Delete";

function TodoItem({ id, done, text }) {
  const dispatch = useTodoDispatch();
  const onToggle = () =>
    dispatch({
      type: "TOGGLE",
      id,
    });

  const onRemove = () =>
    dispatch({
      type: "REMOVE",
      id,
    });

  return (
    <>
      <ListItem
        sx={{ width: "100%" }}
        key={id}
        id={id}
        onClick={onToggle}
        secondaryAction={
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={onRemove}
            sx={{
              opacity: "0",
              transition: "0.5s",
              "&:hover": { opacity: "1" },
            }}
          >
            <DeleteIcon />
          </IconButton>
        }
        disablePadding
      >
        <ListItemButton role={undefined} dense sx={{ border: "1px solid black" }}>
          <ListItemIcon>
            <Checkbox edge="start" done={`${done}`} checked={done} disableRipple />
          </ListItemIcon>
          <ListItemText
            disableTypography
            sx={{
              fontSize: "30px",
            }}
          >
            {text}
          </ListItemText>
        </ListItemButton>
      </ListItem>
    </>
  );
}

export default TodoItem;
