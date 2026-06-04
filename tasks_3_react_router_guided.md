# Parte 3: React Router (Guiada)

En aplicaciones reales, solemos tener múltiples páginas (rutas). React no trae esto por defecto, usamos librerías como `react-router-dom`. Vamos a instalarla y crear un par de rutas.

Haz lo mismo que hiciste anteriormente, y crea una rama llamada `feature/parte-3` a partir de `feature/parte-2`, y al acabar cada tarea ve al terminal y haz:

`git add .`

`git commit -m "<tu mensaje descriptivo>"` ---> el mensajes que sea una muy corta descripción de lo que hiciste, por ejemplo "importado react router" o "creada pagina home"

`git push`

## Documentación Útil

- [React Router Tutorial](https://reactrouter.com/home)

---

### Tarea 13: Instalar React Router (Guiada)

1. Para tu servidor de desarrollo temporalmente en la terminal (usualmente con `Ctrl+C`).
2. Ejecuta el comando: `npm install react-router-dom`. Esto instala una librería muy popular de enrutamiento para React. Básicamente, nos ayuda a gestionar las diferentes rutas y páginas de nuestra aplicación. Por ahora nos quedaremos con dos rutas: la ruta principal y la ruta "acerca de".
3. Vuelve a iniciar el servidor con `npm run dev`.

### Tarea 14: Configurar el BrowserRouter (Guiada)

1. Abre `src/main.tsx`.
2. Importa `BrowserRouter` desde `react-router-dom`.
3. Envuelve tu componente `<App />` con `<BrowserRouter>`, quedando algo así:

   ```tsx
   import { BrowserRouter } from "react-router-dom";
   import React from "react";
   // ...
   <BrowserRouter>
     <React.StrictMode>
       <App />
     </React.StrictMode>
   </BrowserRouter>;
   ```

### Tarea 15: Crear páginas (Guiada)

1. Crea una nueva carpeta en `src/` llamada `pages`.
2. Crea un archivo `src/pages/Home.tsx`.
3. Copia TODO el contenido de tu componente `App` (en `src/App.tsx`) en este nuevo `Home.tsx`, pero cambia el nombre `App` por `Home` y exporta `Home` por defecto. Si se ponen rojas algunas líneas es probable que sea por un tema de rutas al importar archivos. Puedes borrar de las primeras líneas los "imports" que se quejan y luego ir añadiendolos de nuevo, normalmente si escribes "./" o "../" el ordenador te muestra los archivos disponibles.
4. En tu `App.tsx` puedes borrar casi todo y que se quede así:

```tsx
const App = (): JSX.Element => {
  return <Home />;
};

export default App;
```

Llamas al componente Home donde has pasado todo el contenido anterior. Para importar un componente, el mismo Visual Studio te ayuda, normalmente cuando empiezas a escribir < y el nombre del componente, te aparecerá una lista con los disponibles y sólo tienes que darle al "Enter" para que se complete automáticamente.

### Tarea 16: Página de "Acerca de" (Guiada)

1. Crea otro archivo en `pages` llamado `About.tsx`.
2. Crea un componente sencillo que retorne una etiqueta `<div>` con un `<h1>Acerca de esta app</h1>` y un párrafo explicando que la hiciste para aprender React y TypeScript.

```tsx
const About = (): JSX.Element => {
  return <div>About</div>;
};

export default About;
```

### Tarea 17: Definir las Rutas (Guiada)

1. Ve a `src/App.tsx`.
2. Importa `Routes` y `Route` desde `react-router-dom`.
3. Importa tus páginas `Home` y `About`. (Home ya la tenes definida desde la tarea anterior).
4. Define las rutas así:

   ```tsx
   const App = () => {
     return (
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
       </Routes>
     );
   };
   export default App;
   ```

   Ya puedes quitar el `<Home />` por si solo, ya estarña dentro de la etiqueta `<Routes>`.

5. Si vas en el navegador a `http://localhost:5173/about`, deberías ver tu nueva página.

### Tarea 18: Añadir un menú de navegación

1. Crea un componente `Nav.tsx` en `src/components/`.
2. Importa el componente `Link` desde `react-router-dom`.
3. Crea enlaces para "Inicio" (`to="/"`) y "Acerca de" (`to="/about"`).
4. Renderiza este componente `Nav` dentro de `App.tsx`, justo encima de `<Routes>`, para que el menú sea visible en todas las páginas.

Ejemplo de componentre Nav:

```tsx
import { Link } from "react-router-dom";

const Nav = (): JSX.Element => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
```
