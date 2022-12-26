import { styled } from "@mui/material/styles";
import { Grid, Paper } from "@mui/material";
import DatePicker from "react-datepicker";
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { TodoProvider } from "./TodoContext";
import TodoHead from "./TodoList/TodoHead";
import TodoLists from "./TodoList/TodoLists";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "700px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  border: "1px solid black",
}));

const Content = () => {
  const [value, setValue] = useState(new Date());

  console.log(value.getDate(), value.getMonth() + 1);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Item>
          <DatePicker selected={value} onChange={(date) => setValue(date)} inline />
        </Item>
      </Grid>
      <Grid item xs={12} md={6}>
        <Item sx={{ display: "flex", flexDirection: "column" }}>
          <TodoProvider>
            <TodoHead value={value} />
            <TodoLists />
          </TodoProvider>
        </Item>
      </Grid>
    </Grid>
  );
};

export default Content;
