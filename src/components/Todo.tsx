import React, { useState } from "react";
import { type TodoId, type Todo as TodoType } from "../types"
import { Button } from "./Button";

interface Props extends TodoType {
    onToggleCompleteTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
    onRemoveTodo: ({ id }: TodoId) => void
    onUpdateTitle: ({id, newTitle }: { id: string; newTitle: string }) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onToggleCompleteTodo, onUpdateTitle}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(title)
    
    const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>): void => {
        onToggleCompleteTodo({ 
            id, 
            completed: event.target.checked 
        })
    }

    return (
        <div className="view">
            <input 
                className="toggle" 
                type="checkbox" 
                checked={completed}
                onChange={handleChangeCheckbox} 
            />
            {isEditing ? (
                /*<input 
                    type="text" 
                    value={title} 
                    onKeyDown={(event):void => {
                        if (event.key === 'Enter') {
                            onUpdateTitle({ id, newTitle: event.currentTarget.value })
                            setIsEditing(false)
                        }
                    }}
                />*/
                <input
                    type="text"
                    value={editedTitle}
                    onChange={(event) => {
                        setEditedTitle(event.target.value)
                    }}
                    onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                            onUpdateTitle({
                                id,
                                newTitle: editedTitle
                            })
                            setIsEditing(false)
                        }
                    }}
                g/>
            ) : (<label>{title}</label>
            )}
            <Button
                text="✏️"
                onClick={() => {
                    setIsEditing(true);
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