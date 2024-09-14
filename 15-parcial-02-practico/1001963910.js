const datos = require("./datos.json")

// CODIGO DE PUNTO 1 AQUI
const puntoUno = (estudiantes) => estudiantes
          .filter(estudiante => estudiante['info_extra_curriculares'].some(ec => ec['nombre'] === 'INNOVA'))
          .map(estudiante => estudiante['info_personal']['correo'])

// CODIGO DE PUNTO 2 AQUI
const puntoDos = (estudiantes) => estudiantes
          .map(estudiante => estudiante['info_matricula'].map(curso => curso['semestre']))
          .flat().filter((value, index, arr) => !arr.slice(0, index).includes(value)) // Hasta aqui se hallan los semestres
          .map((semestre, _, semestres) => estudiantes
                  .filter(estudiante => estudiante['info_matricula']
                        .map(curso => curso['semestre']).sort((a, b) => b - a)[0] === semestre) // Estudiantes de un semestre
                  .map(estudiante => {
                    const promedio = semestres.filter(s => s <= semestre)
                            .map(sem => estudiante['info_matricula'] // Promedio de cada semestre
                                  .filter(curso => curso['semestre'] === sem) // Cursos de un semestre
                                  .map((curso, _, cursos) => curso['notas']
                                        .map(nota => nota['nota'] * nota['peso'])
                                        .reduce((a, b) => a + b) / cursos.length) // Promedio de notas de un curso
                                  .reduce((a, b) => a + b) // Promedio semestreal
                            ).reduce((a, b) => a + b) / semestre // Promedio acumulado
                    return { promedio, ...estudiante }
                  })
                  .sort((a, b) => b['promedio'] - a['promedio'])[0]
          ).map(estudiante => `${estudiante['info_personal']['nombre']} ${estudiante['info_personal']['apellido']}`)


// CODIGO DE PUNTO 3 AQUI
const puntoTres = (estudiantes) => estudiantes
          .filter(estudiante => estudiante['info_matricula'].map(curso => curso['semestre']).sort((a, b) => b - a)[0] === 1) // Estudiantes de primer semestre
          .map(estudiante => {
            const { 
              gender, 
              nombre: primerNombre, 
              apellido: primerApellido,
              altura, nacimiento, correo
            } = estudiante['info_personal']

            const actual = new Date()
            const fechaNac = new Date("2002-09-14")

            const value = actual.getFullYear() - fechaNac.getFullYear()
            const r = actual.getMonth() < fechaNac.getMonth() ? 1 : actual.getDay() < fechaNac.getDay() ? 1 : 0

            return {
              gender,
              titulo: gender === "M" ? "Sr." : "Sra.",
              nombreCompleto: `${primerNombre} ${primerApellido}`,
              primerNombre,
              primerApellido,
              altura: altura * 100,
              edad: value - r,
              nacimiento,
              correo,
              usuario: correo.split("@")[0]
            }
          })