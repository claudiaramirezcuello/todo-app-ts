# Parte 1: Git y Componentes Básicos

Hola Cláudia!

Primero de todo, los arhivos con extensión .md (como este) son archivos de texto plano editables, y puedes verlos "bonitos" gracias a la extensión Markdown Preview Enhanced que tiene el VS Code. Simplemente, con esta extensión, el VS Code es capaz de leer el archivo md y mostrarte el texto formateado. Para hacerlo el atajo de teclas es Command + Shift + V. Pruebalo, ya verás como lees mejor. Si haces click automáticamente te vulve a esta vista, que es la editable, simplemente vuelve a darle al atajo.

En esta primera parte, vas a familiarizarte con Git y a crear componentes básicos de React. Lo primero que harás será crear una rama, o sea un "copia" del código actual, donde podrás hacer cambios sin afectar el código original. No te preocupes si no entiendes todo al principio, iremos viendo paso a paso. Te dejo links de documentación que te pueden ser útiles, una es la de React que ya has mirado por encima, la otra es la guía de Git. No hace falta que las estudies, con que las mires por encima un momento sirve. Ve apuntando cualquier duda que tengas, e intenta resolver por tu cuenta, pero si tardas mucho con algo ya entonces me preguntas. Verás que te dejo las instrucciones paso por paso, y en lo que no te guío tanto puedes pedir ayuda a la IA, pero intenta hacerlo lo menos posible o que te explique línea por línea. Lo mejor es que vayas mirando componentes/funciones ya creados y los "copies", haciendo luego los mínimos cambios requeridos. Aunque parezca un copia/pega, ya estarías picando código de verdad.

## Documentación Útil

- [React Docs - Describiendo la UI](https://react.dev/learn/describing-the-ui)
- [Guía de Git](https://git-scm.com/book/es/v2)

---

### Tarea 1: Tu primer commit en una nueva rama (Guiada)

Es crucial aprender a usar Git en equipos. Vamos a crear una rama, hacer un pequeño cambio y subirlo.
**Pasos:**

1.  Abre tu terminal en la carpeta del proyecto, en el mismo Visual Studio.
2.  Crea y muévete a una nueva rama: ejecuta `git checkout -b feature/mi-primer-cambio`. Verás que en la esquina inferior izquierda aparece el nombre de la rama en la que estás.
3.  Vincula esta rama local a una rama en GitHub llamada de la misma forma: `git push -u origin feature/mi-primer-cambio`. Esto lo que hace es crear la rama en la nube y vincuyarla a la local que acabas de crear, para que los cambios que subas puedan bajarse desde otros pc que hayan descargado el mismo proyecto desde la misma fuente (en este caso GitHub).
4.  Levanta el proyecto con `npm run dev` para poder ver los cambios que harás.
5.  Ve al archivo `src/components/Header.tsx` y cambia el texto del `<h1>` de "todo" a "Mis Tareas".
6.  Vuelva a la terminal, comprueba los archivos modificados ejecutando `git status`. Verás que te marca el archivo que acabas de modificar.
7.  Añade los cambios al "stage": `git add .`, esto lo que hace es coger todos los archivos modificados y prepararlos para la subida.
8.  Haz un commit descriptivo: `git commit -m "feat: cambiar titulo principal de la app"`, esto lo que hace es guardar los cambios preparados con un mensaje descriptivo de lo que hiciste.
9.  Sube los cambios de la rama a GitHub: `git push` y aquí la magia, se cogen los cambios previamente preparados y guardados con un mensaje y se suben a la rama que acabas de crear en GitHub.

Ahora esta rama tendrá unos cambios que la rama principal main (que es la estandar que se crea siempre por defecto) no tiene. Vas a volver a la rama de main ejecutando el comando: `git checkout main`. Si hay algun problema en la consola, intenta resolverlo buscando onlinel, copiando lo que te ponga la consola en el buscador. Si lo consigues y todo va bien, verás que esos cambios recién hechos ya no están porque no existen aquí. De momento los dejarás solo en esa rama y los retomamos más tarde.

Ahora, desde la rama main, vas a seguir los mismos pasos para crear una nueva rama llamada `feature/parte-1`. (Solo desde el 1, cambiando el nombre de la rama, hasta el 4).
En esta rama harás las tareas 2 a 6, y cada vez que acabes una tarea, antes de seguir con la siguiente, ejecuta en orden estos tres comandos en la consola:
`git add .`
`git commit -m "<tu mensaje descriptivo>"` ---> el mensajes que sea una muy corta descripción de lo que hiciste, por ejemplo "creado componente subtitle"
`git push`

Estos comandos te los sabrás de memoria en breves ya que, juntos al checkout (para moverse de una rama a otra), son los tres más utilizados en Git.

### Tarea 2: Crear tu primer componente desde cero

Crea un nuevo archivo llamado `Subtitle.tsx` dentro de `src/components/`.
Este componente debe ser una función que retorne un elemento `<h2>` con el texto "Lista de tareas para hoy". Recuerda exportar el componente.

### Tarea 3: Importar y renderizar

Ve al componente `Header.tsx`. Importa tu nuevo componente `Subtitle` y colócalo justo debajo del `<h1>`.

### Tarea 4: Aplicar estilos básicos

Abre `src/index.css`. Añade una clase CSS llamada `.subtitle` que cambie el color del texto a gris oscuro (`#555`) y centre el texto (`text-align: center`).
Luego, vuelve a tu componente `Subtitle.tsx` y aplícale esa clase (`className="subtitle"`).

### Tarea 5: Un componente para el pie de página

Crea un componente `FooterText.tsx` que retorne un párrafo `<p>` diciendo "© 2026 - Mi App de Tareas".

### Tarea 6: Añadir el FooterText

Importa y añade `FooterText` al final del componente `Footer.tsx` (dentro de la etiqueta `<footer>`).

Ahora, si todo ha ido bien, tienes 3 ramas:

1. `main`, que aún sigue igual al inicio;
2. `feature/mi-primer-cambio`, que tiene el cambio que hiciste del título principal;
3. `feature/parte-1`, que tiene todos los cambios que has hecho en esta primera parte.

Quiero que simplemente, con el proyecto levantado, vayas cambiando de una rama a otra con el comando `git checkout <nombre-de-la-rama>` para que puedas ver los cambios que has hecho, y que solo están de momento en las ramas donde los has hecho.
