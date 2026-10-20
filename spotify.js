// 1. FUNDAMENTOS Y STRINGS
let usuarioActivo = "Juanito";
let cancionActual = "El Bombón";
let artistaActual = "Los Palmeras";

console.log(`El usuario ${usuarioActivo.toUpperCase()} esta escuchando ${cancionActual} de ${artistaActual}`);


// 2. OBJETOS (Desestructuración)
const user = {
    nombre: "Juanito",
    playlistPublicas: 2,
    siguiendo: 15,
    visibilidad: "Solo visibles para ti"
};

const { nombre, playlistPublicas, siguiendo } = user;
console.log(nombre, playlistPublicas, siguiendo);


// 3. ARREGLOS (.map)
const artistas = [
    { nombre: "Bad Bunny", categoria: "Artista" },
    { nombre: "Feid", categoria: "Artista" },
    { nombre: "Don Omar", categoria: "Artista" },
    { nombre: "Alvaro Diaz", categoria: "Artista" },
    { nombre: "Arcángel", categoria: "Artista" },
    { nombre: "Daddy Yankee", categoria: "Artista" }
];

const artistasUpper = artistas.map(a => ({
    nombre: a.nombre.toUpperCase(),
    categoria: a.categoria
}));

console.log(JSON.stringify(artistasUpper, null, 2));


// 4. FUNCIONES
const obtenerEtiqueta = (artista, canción) => `Escuchando: ${canción} de ${artista}`;
console.log(obtenerEtiqueta(artistaActual, cancionActual));