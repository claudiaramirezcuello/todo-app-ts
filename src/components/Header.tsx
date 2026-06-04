import React from "react"
import { TodoTitle } from "../types"
import { CreateTodo } from "./CreateTodo"
import { Subtitle } from "./Subtitle"

interface Props {
    onAddTodo: ({ title }: TodoTitle) => void
    userName: string
}

export const Header: React.FC<Props> = ({ onAddTodo, userName }) => {
    return (
        <header className="header">
            <h1 style={{margin:'50px', width: '1000px', textAlign:'center'}}>Tareas de {userName} <img 
            style= {{width: '60px', height: 'auto' }}
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1280px-Typescript_logo_2020.svg.png'/></h1>
            <Subtitle text="Lista de tareas pendientes"/>
            <CreateTodo saveTodo={onAddTodo}/>
        </header>
    )
}