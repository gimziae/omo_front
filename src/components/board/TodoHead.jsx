import { Typography } from "@mui/material";
import React from "react";
import { useTodoState } from "../TodoContext";

const TodoHead = ({ value }) => {
  const todos = useTodoState();
  const undoneTasks = todos.filter((todo) => !todo.done);
  console.log({ value });
  const dateString = value.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const dayName = value.toLocaleDateString("ko-KR", {
    weekday: "long",
  });
  return (
    <div>
      <Typography variant="h4">{dateString}</Typography>
      <Typography variant="h5">{dayName}</Typography>
      <Typography variant="h6">남은 일 갯수 {undoneTasks.length}개</Typography>
    </div>
  );
};

export default TodoHead;
