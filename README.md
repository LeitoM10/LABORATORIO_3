# Laboratorio 3 - JavaScript

**Fecha:** 19 de octubre de 2026

## Descripción

Este proyecto es una práctica de JavaScript basada en un perfil de Spotify. Incluye ejemplos de conceptos fundamentales del lenguaje y una exportación e importación de módulos ES.

## Contenido del laboratorio

- **Strings:** uso de `toUpperCase()` y plantillas de texto para mostrar el usuario y la canción actual.
- **Objetos:** creación de un objeto de usuario y extracción de propiedades mediante desestructuración.
- **Arreglos:** transformación de una lista de artistas con `map()` y conversión de sus nombres a mayúsculas.
- **Funciones:** creación de una función flecha que genera una etiqueta con la canción y el artista.
- **Asincronismo:** uso de `Promise`, `setTimeout` y `async/await` para simular la carga de una canción.
- **Local Storage:** almacenamiento y lectura del nombre de la última canción, cuando la API está disponible.
- **Manipulación del DOM:** creación de un encabezado que muestra la canción y el artista que se están reproduciendo.
- **Módulos ES:** exportación de `obtenerEstadoReproductor` desde `spotify.js` e importación desde `index.html`.

## Archivos

- `index.html`: página principal; importa la función del módulo `spotify.js` y muestra el resultado en la consola del navegador.
- `spotify.js`: contiene los ejemplos del laboratorio y exporta los datos del reproductor.

## Cómo ejecutar

Abre el proyecto con un servidor local (por ejemplo, la extensión Live Server de Visual Studio Code) y visita `index.html`. Los módulos ES deben cargarse desde un servidor local; abrir el archivo directamente con `file://` puede impedir la importación.

Abre las herramientas de desarrollador del navegador y revisa la consola para ver los resultados.

## Integrantes

- Melany Perugachi
- Juan Rodriguez
- Leonel Moreira
