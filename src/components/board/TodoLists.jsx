import { Button, InputBase, List, Paper } from "@mui/material";
import React, { useState } from "react";
import { useTodoDispatch, useTodoNextId, useTodoState } from "../TodoContext";
import AddIcon from "@mui/icons-material/Add";
import TodoItem from "./TodoItem";
const TodoLists = () => {
  const todos = useTodoState();
  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();
  const [open, setOpen] = useState(false);
  const onOpen = () => setOpen(!open);

  const [value, setValue] = useState("");

  const onChange = (e) => setValue(e.target.value);

  const onSubmit = () => {
    dispatch({
      type: "CREATE",
      todo: {
        id: nextId.current,
        text: value,
        done: false,
      },
    });
    setValue("");
    setOpen(false);
    nextId.current += 1;
  };

  return (
    <div>
      <List sx={{ width: "500px", maxWidth: "500px", bgcolor: "background.papaer", maxheight: "500px" }}>
        {todos.map((todo) => (
          <TodoItem key={todo.id} id={todo.id} text={todo.text} done={todo.done} />
        ))}
      </List>
      {open ? (
        <>
          <Paper
            component="form"
            sx={{
              display: "flex",
              width: 400,
              position: "absolute",
              bottom: "50px",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="뭐든 좋으니깐요"
              onChange={onChange}
              inputProps={{ style: { textAlign: "center" } }}
            />
          </Paper>
          <Button
            onClick={onSubmit}
            variant="contained"
            sx={{
              position: "absolute",
              bottom: "0",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}
          >
            ADD
          </Button>
        </>
      ) : (
        <Button
          onClick={onOpen}
          variant="contained"
          endIcon={<AddIcon />}
          sx={{
            position: "absolute",
            bottom: "0",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          ADD LIST
        </Button>
      )}
    </div>
  );
};

export default TodoLists;
