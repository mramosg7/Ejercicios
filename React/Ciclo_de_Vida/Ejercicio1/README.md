# Generador de Apuestas con React

Este proyecto tiene como objetivo crear un generador de apuestas utilizando React y algunas de sus características clave como `useState`, `useEffect`, y `tailwind`. A lo largo del ejercicio, exploraremos cómo funcionan los ciclos de vida de React, cómo se montan y desmontan los componentes, y cómo funciona `useState` y cómo afecta a los componentes cuando su valor cambia.

## Componentes

### Header

Dentro del encabezado, verás un título con el nombre del ejercicio y dos botones. El primero generará 4 apuestas completamente aleatorias y ocultará la sección de checkboxes. El segundo mostrará la sección de checkboxes para que el usuario pueda elegir su apuesta.

### Barra de números

Este componente solo aparecerá si se hace clic en el botón "Apuestas manuales" del encabezado. Verás 13 checkboxes, de los cuales solo se pueden seleccionar 4. Una vez seleccionados 4 checkboxes, el componente bloqueará los checkboxes y mostrará dos botones: "Aceptar apuesta", que recogerá los checkboxes seleccionados y creará una apuesta con ellos, y "Cambiar apuesta", que desbloqueará todos los checkboxes y los deseleccionará.

### Apuestas

Este componente mostrará todas las apuestas que el usuario ha aceptado. Tendrá una tabla con los números de las apuestas, junto con los botones "Aceptar" y "Quitar". El botón "Aceptar" agregará la apuesta al total, mientras que el botón "Quitar" simplemente la eliminará del componente de apuestas.

### Total

Este componente mostrará el número total de apuestas aceptadas y el dinero total gastado. Cada apuesta cuesta 1.5€.

## Instrucciones

1. Clona este repositorio.
2. Instala las dependencias con `npm install`.
3. Instala y configura Tailwind.
4. inicia el servidor con `npm run dev`
4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## Notas

- Los componentes ya están creados para ahorrar tiempo, pero no tienen lógica.
- Los props están definidos con pequeñas pistas sobre su función, pero si no sigues la guía o crees que puedes hacerlo de manera más eficiente, siéntete libre de modificarlos.

¡Diviértete explorando React y creando tu generador de apuestas!
