const datos = require("./datos.json");

function puntoUno(estudiantes) {
  return estudiantes.filter(estudiante => {
    const notas = estudiante['cursos'].map(curso => curso['nota'])
    const promedio = notas.reduce((a, b) => a + b) / notas.length
    
    return promedio < 3.3
  }).length
}

function puntoDos(estudiantes) {
  return estudiantes.map(estudiante => estudiante['nombre'] + " " + estudiante['apellido']);
}

function puntoTres(estudiantes) {
  return estudiantes.sort((a, b) => a['altura'] - b['altura']).map(estudiante => estudiante['_id']);
}

function puntoCuatro(numeros) {
  return numeros.reduce((a, b) => a + b) / numeros.length;
}

function puntoCinco(palabra) {
  return palabra.replaceAll(" ", "") === palabra.split("").reverse().join("").replaceAll(" ", "");
}

function puntoSeis(palabra) {
  return palabra.split("").reverse().join("");
}

function puntoSiete(lista, nombreCampo) {
  return lista.sort((a, b) => a[nombreCampo] - b[nombreCampo])
}

module.exports = {
  puntoUno,
  puntoDos,
  puntoTres,
  puntoCuatro,
  puntoCinco,
  puntoSeis,
  puntoSiete
};
