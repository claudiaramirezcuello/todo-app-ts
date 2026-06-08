import { type TodoId, type Todo as TodoType, type ListOfTodos } from "../types"
import { Todo } from "./Todo"
import React from 'react'

interface Props {
    todos: ListOfTodos
    onToggleCompleteTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
    onRemoveTodo: ({ id }: TodoId) => void
    onUpdateTitle: ({id, newTitle }: { id: string; newTitle: string }) => void
}

export const Todos: React.FC<Props> = ({ todos, onRemoveTodo, onToggleCompleteTodo, onUpdateTitle}) => {
    return (
        <ul className='todo-list'> 
            {todos.map(todo => (
                <li 
                    key={todo.id} 
                    className={`${todo.completed ? 'completed' : ''}`}>
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        completed={todo.completed}
                        onToggleCompleteTodo={onToggleCompleteTodo}
                        onRemoveTodo={onRemoveTodo}
                        onUpdateTitle={onUpdateTitle}
                    />
                </li>
            ))}
        </ul>
    )
}