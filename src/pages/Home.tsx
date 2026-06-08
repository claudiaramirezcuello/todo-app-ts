import React, { JSX, useState } from 'react';
import { Todos } from '../components/Todos';
import { TodoTitle, type FilterValue, type TodoId, type Todo as TodoType } from '../types';
import { TODO_FILTERS } from '../consts';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Button } from '../components/Button';

const mockTodos = [
  {
    id: '1',
    title: 'todo 1',
    completed: true,
  },
  {
    id: '2',
    title: 'todo 2',
    completed: false,
  },
  {
    id: '3',
    title: 'todo 3',
    completed: false,
  }
] 

const Home = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos) // inicializar la lista de todos con mockTodos, setTodos actualiza la lista de todos
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL) // el filtro por defecto es 'all', setFilterSelected actualiza el filtro seleccionado
  const [userName] = useState('Clàudia')

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount
  
  const filteredTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  // añadir un nuevo todo
  const handleAddTodo = ({ title }: TodoTitle): void => {
    const newTodo = {
      title,
      id: crypto.randomUUID(), // generar un id único para el nuevo todo
      completed: false
    }

    const newTodos = [...todos, newTodo] 
    setTodos(newTodos)
  }

  // eliminar un todo
  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id != id) // filtramos los que no tienen el id a eliminar
    setTodos(newTodos) // actualizamos la lista 
  }

  // marcar un todo como completado o no completado
  const handleCompleted = (
    { id, completed }: Pick<TodoType, 'id' | 'completed'>
  ): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) { 
        return {
          ...todo, // hacemos una copia del todo
          completed // cambiamos el valor de completed  
        }
      }
      return todo
    })

    setTodos(newTodos) // actualizamos la lista 
  }

  // eliminar todos los todos completados
  const handleRemoveAllCompleted = (): void => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  // cambiar el filtro seleccionado
  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  const handleClick = () => {
    alert("Me has clicado");  
  }


  // he tenido que poner id como un string porque sino me daba problemas con el tipo 
  const handleUpdateTitle = ({id, newTitle }: { id: string; newTitle: string }): void => {
    const updatedTodos = todos.map(todo => 
      todo.id === id ? { ...todo, title: newTitle } : todo
    )
    setTodos(updatedTodos) 
  }

  return (
    <div className="todoapp">
      <Header 
        onAddTodo={handleAddTodo} 
        userName={userName} 
      />
      <Button
        onClick={handleClick}
        text='Click me'
        className='myButton'
      ></Button>
      <Todos 
        onToggleCompleteTodo={handleCompleted}
        onRemoveTodo={handleRemove}
        todos={filteredTodos} 
        onUpdateTitle={handleUpdateTitle}
      />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        onClearCompleted={handleRemoveAllCompleted}
        handleFilterChange={handleFilterChange}
      />
    </div>
  ) 
}

export default Home
