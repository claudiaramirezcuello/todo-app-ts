import React from "react";
import { TodoTitle } from "../types";
import { CreateTodo } from "./CreateTodo";
import { Subtitle } from "./Subtitle";

interface Props {
  onAddTodo: ({ title }: TodoTitle) => void;
  userName: string;
}

export const Header: React.FC<Props> = ({ onAddTodo, userName }) => {
  return (
    <header className="title">
      <h1
        style={{
          textAlign: "center",
          margin: "50px auto",
        }}
      >
        {userName}
        <img
          style={{ width: "60px", height: "auto" }}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1280px-Typescript_logo_2020.svg.png"
        />
      </h1>
      <Subtitle text="Lista de tareas pendientes" />
      <CreateTodo saveTodo={onAddTodo} />
    </header>
  );
};
