
// Coleccion aula
{
    "_id" : ObjectId("62d0d9f099d3bb670dacac17"),
    "id_aula" : 1,
    "nombre_estudiante" : "Jhon",
    "apellido_paterno_estudiante" : "Zambrano",
    "apellido_materno_estudiante" : "Macias",
    "edad_estudiante" : 12,
    "nombre_maestro" : "Dayana",
    "apellido_maestro" : "Chica",
    "estudiante" : {
        "_id" : ObjectId("62d0c8b399d3bb670daca698")
    },
    "maestro" : {
        "_id" : ObjectId("62d0d0a299d3bb670dacaad5")
    }
}

// Coleccion estudiante
{
    "_id" : ObjectId("62d0c8b399d3bb670daca698"),
    "id_estudiante" : 1,
    "nombre" : "Jhon",
    "apellidoPaterno" : "Zambrano",
    "apellidoMaterno" : "Macias",
    "edadEstudiante" : 12
}

// Coleccion juego
{
    "_id" : ObjectId("62d0ca7499d3bb670daca73e"),
    "id_juego" : 1,
    "tiempo_inicio" : "20:59",
    "tiempo_fin" : "21:09",
    "puntaje" : "Carita feliz",
    "estudiante" : {
        "_id" : ObjectId("62d0c8b399d3bb670daca698")
    },
    "profesor" : {
        "_id" : ObjectId("62d0d0a299d3bb670dacaad5")
    }
}

//Coleecion Maestro
{
    "_id" : ObjectId("62d0d0a299d3bb670dacaad5"),
    "id_maestro" : 1,
    "nombre_maestro" : "Dayana",
    "apellido_maestro" : "Chica",
    "edad" : 21
}