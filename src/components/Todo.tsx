import React, { useState } from "react";
import { type TodoId, type Todo as TodoType } from "../types"
import { Button } from "./Button";

interface Props extends TodoType {
    onToggleCompleteTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
    onRemoveTodo: ({ id }: TodoId) => void
    //onEditTodo: ({ id }: TodoId) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onToggleCompleteTodo/*, onEditTodo*/ }) => {
    const [isEditing, setEditing] = useState(false);
    
    const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>): void => {
        onToggleCompleteTodo({ 
            id, 
            completed: event.target.checked 
        })
    }
    
    const onEditTodo = ({ id }: TodoId): void => {
    };

    return (
        <div className="view">
            <input 
                className="toggle" 
                type="checkbox" 
                checked={completed}
                onChange={handleChangeCheckbox} 
            />
            {isEditing ? <input type="text" value={title} /> : <label>{title}</label>}
            <Button
                text="✏️"
                onClick={() => {
                    setEditing(true);
                }}
                className="editButton"
            />
            <button 
                className="destroy"
                onClick={() => {
                    onRemoveTodo({ id })
                }}
            />
        </div>
    )
}