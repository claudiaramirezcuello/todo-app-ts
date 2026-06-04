# Parte 2: Props, Estado y Tipado

Vamos a profundizar en cómo pasar información entre componentes y manejar el estado. Antes de empezar este apartado, quiero que vayas a la rama que has creado previamente llamada `feature/parte-1`, en la que tienes hechos todos los cambios de esta parte, y que estando dentro de esta rama, sigas todos los pasos del fichero task_1 del 1 al 4 para crear otra rama, y la llamas `feature/parte-2`. Porque tiene que moverte a la rama `feature/parte-1` antes de crear otra? El comando `checkout -b` coge como referencia la rama en la que estás. Si no la cambias, siempre creará la nueva rama cogiendo como base `main`, por lo que no tendría en cuenta los cambios que has hecho en `feature/parte-1`, y los necesitas para hacer esta parte. En un flujo normal de trabajo, tu primera rama se habría puesto en revisión y, una vez probado los cambios y chequeados por algún compañero, se habría juantado el código de esa rama con la de `main`. De esa manera podrías crear una nueva a partir de `main` teniendo todos los cambios, pero voy a dejar la parte de revisión para mas adelante, así que simplemente la creamos a partir de `feature/parte-1`.

Esta parte puede que te sea un pelín más difícil, ten las docus abiertas porque piensa que lo que te pido son básicamente entre 1 y 5 líneas de código por tarea, y casi siempre son una copia o casi de los ejemplos. También te pongo ejemplos de código para casi copiarlos, piensa que lo quiero es que vayas entendiendo lo que haces, no que sepas programar ya sola al 100%. Intenta si puedes hacer algo por tu cuenta mirando las documentación y mis ayudas, y si quieres pasandoselo a la IA una vez hecho con la descripción para que te lo corrija, y si te cuesta mucho pues que te ayude la IA desde el inicio pero repito, que te explique línea por línea.

## Documentación Útil

- [React Docs - Pasando Props a un Componente](https://react.dev/learn/passing-props-to-a-component)
- [React Docs - El Estado: La memoria del componente](https://react.dev/learn/state-a-components-memory)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

---

En estas tareas, también quiero que cada vez que acabes una repitas estos comandos en la terminal:

`git add .`

`git commit -m "<tu mensaje descriptivo>"` ---> el mensajes que sea una muy corta descripción de lo que hiciste, por ejemplo "creada prop text en subtitle"

`git push`

### Tarea 7: Estilos

Genera espacio vertical entre el Subtitle y el contenido y entre el FootterText y el contenido para que no se vean tan pegados.

### Tarea 8: Componente con Props

Modifica tu componente `Subtitle.tsx` para que no tenga el texto quemado (hardcoded). Debe recibir una `prop` llamada `text` de tipo `string`.
Actualiza `Header.tsx` para pasarle a `Subtitle` el texto "Lista de tareas pendientes" a través de esa prop.

Ejemlpo de interface de props:

```typescript
interface PropsComponentExample {
  name: string;
}
```

Y para tipar las props de un componente:

```typescript
export function ComponentExample(props: PropsComponentExample) {
  return (
    <div>
      <p>{props.name}</p>
    </div>
  );
};
```

### Tarea 9: Añadiendo un nuevo estado global

En `App.tsx`, usa `useState` para crear un nuevo estado llamado `userName`. Inicialízalo con tu propio nombre.

### Tarea 10: Pasando el estado como prop

Modifica el componente `Header` para que acepte una nueva prop `userName` (recuerda actualizar la `interface Props` en `Header.tsx`).
En `App.tsx`, pásale el estado `userName` al `Header`.
En `Header.tsx`, haz que el título muestre el nombre del usuario, por ejemplo: "Tareas de Clàudia".

### Tarea 11: Componente reutilizable (Button)

Crea un componente genérico `Button.tsx` en la carpeta `components`.
Debe recibir como props:

- `text` (string): el texto que mostrará el botón.
- `onClick` (función que no devuelve nada: `() => void`): la acción al hacer clic.
- `className` (opcional, string): para poder darle estilos.

Y debe devolver una etiqueta button HTML con el texto y la acción al hacer clic.

Eejmplo de propr opcionales y no opcionales:

```typescript
interface Props {
  requiredProp: string;
  optionalProp?: number;
}
```

### Tarea 12: Usar tu nuevo botón

Ve a `Footer.tsx`. Busca el `<button className='clear-completed'>` que usas para borrar las completadas.
Reemplaza esa etiqueta HTML `<button>` por tu nuevo componente `<Button>`, pasándole las props correspondientes.

### Tarea 13: Usar el botón en otro sitio con diferentes props

Dentro de `App.tsx`, dibuja un nuevo botón, usando tu componente Button, en un lugar que veas apropiado, por ejemplo debajo del título principal.
Dale el texto "Click me" y haz que, al hacer clic, muestre un mensaje de alerta "Me has clicado" en la pantalla.

Ejemplo de función para mostrar un alert:

```typescript
const handleClick = () => {
  alert("Me has clicado");
};
```
