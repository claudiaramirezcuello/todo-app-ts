# Parte 4: Funciones Extra y Refactorización

Para terminar, vamos a añadir funcionalidades que hacen que la app sea realmente útil en el día a día.

Haz lo mismo que hiciste anteriormente, y crea una rama llamada `feature/parte-4` a partir de `feature/parte-3`, y al acabar cada tarea ve al terminal y haz:

`git add .`

`git commit -m "<tu mensaje descriptivo>"` ---> el mensajes que sea una muy corta descripción de lo que hiciste, por ejemplo "importado react router" o "creada pagina home"

`git push`

## Documentación Útil

- [MDN - Window.localStorage](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage)
- [React Docs - Sincronizando con un Efecto (useEffect)](https://react.dev/learn/synchronizing-with-effects)
- [JavaScript - setTimeout y confirm](https://developer.mozilla.org/es/docs/Web/API/Window/confirm)

---

### Tarea 19: Botón de Editar

Añade un pequeño icono o botón "✏️ Editar" en cada `Todo.tsx`. Al hacer clic, por ahora, haz que lance un `console.log("Editando el todo con id:", id)`.

### Tarea 20: Modo Edición en Componente Local

Añade un estado local en `Todo.tsx` llamado `isEditing` (booleano, inicializado en `false`). Puedes utilizar el hook `useState` que has visto en el task_2.
Al hacer clic en el botón de la Tarea 19, cambia este estado a `true`.
Si `isEditing` es `true`, en lugar de mostrar el título del Todo (el `<label>{title}</label>`), muestra un `<input type="text" value={title} />` con el valor del título de la tarea.

### Tarea 21: Guardar el nuevo título

En `Home.tsx` (antiguo App), crea una función `handleUpdateTitle({ id, newTitle })`. Esta función debe hacer un `map` sobre `todos` y actualizar el título del Todo que coincida con el id.
Pásala como prop hasta llegar a `Todo.tsx`.
En `Todo.tsx`, cuando el usuario presione la tecla "Enter" dentro del input (puedes usar el evento `onKeyDown`), ejecuta esta función, y vuelve a poner `isEditing` en `false`.

Ejemplo de como pasar la prop:

```typescript
<Todo
    id={id}
    title={title}
    completed={completed}
    onRemoveTodo={onRemoveTodo}
    onToggleCompleteTodo={onToggleCompleteTodo}
    onUpdateTitle={onUpdateTitle}
/>
```

Ejemplo de un evento que se ejecuta al presionar la tecla "Enter":

```typescript
<input
    type="text"
    value={title}
    onKeyDown={(event) => {
        if (event.key === 'Enter') {
            onUpdateTitle({ id, newTitle: event.target.value })
            setIsEditing(false)
        }
    }}
/>
```

Ejemplo de un map para actualizar un elemento en un array:

```typescript
const handleUpdateTitle = ({
  id,
  newTitle,
}: {
  id: TodoId;
  newTitle: string;
}) => {
  const updatedTodos = todos.map((todo) => {
    if (todo.id === id) {
      return {
        ...todo,
        title: newTitle,
      };
    }
    return todo;
  });
  setTodos(updatedTodos);
};
```

Que es un map? Map es una función nativa de JavaScript que se aplica sobre cada elemento de un array (array es una lista) y que devuelve un nuevo array con los resultados. Puedes ver un ejemplo más detallado de su funcionamiento en [MDN - Array.prototype.map()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map).

### Tarea 22: Guardar en LocalStorage (Persistencia)

Actualmente, si recargas la página, las tareas nuevas desaparecen.
Ve a `Home.tsx`. Usa el hook `useEffect` de React. Link de doc sobre useEffect: [useEffect](https://react.dev/reference/react/useEffect)

Haz que cada vez que el estado `todos` cambie, se guarden los `todos` en el `localStorage` del navegador usando `localStorage.setItem('myTodos', JSON.stringify(todos))`.

Ejemplo de un useEffect para guardar en localStorage:

```typescript
useEffect(() => {
  localStorage.setItem("myTodos", JSON.stringify(todos));
}, [todos]);
```

Que es el localStorage? El localStorage es una API de JavaScript que permite guardar datos en el navegador del usuario. Puedes ver un ejemplo más detallado de su funcionamiento en [MDN - Window.localStorage](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage).
Y porque se guardan con JSON.stringify? Link a documentación: [JSON.stringify](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)

### Tarea 23: Leer de LocalStorage al iniciar

En `Home.tsx`, en lugar de inicializar tu estado con `mockTodos` directamente, crea una función que se ejecute solo una vez al inicio.
Esta función debe leer el `localStorage` usando `localStorage.getItem('myTodos')`.
Si hay algo guardado (recuerda usar `JSON.parse`), inicializa el estado con esos datos. Si no hay nada, inicialízalo con `mockTodos` o un array vacío `[]`.

Porque hay que usar el JSON.parse? Link a documentación: [JSON.parse](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)

Ejemplo de un useEffect para leer de localStorage:

```typescript
useEffect(() => {
  const storedTodos = localStorage.getItem("myTodos");
  if (storedTodos) {
    setTodos(JSON.parse(storedTodos));
  }
}, []);
```

### Tarea 24: Confirmación antes de borrar

En `Home.tsx`, en la función `handleRemoveAllCompleted`, añade una simple comprobación antes de borrar los datos.
Usa la función nativa del navegador `window.confirm("¿Estás seguro de querer borrar todas las tareas completadas?")`.
Si el usuario dice que sí, borra las tareas; si dice que no, no hagas nada.
