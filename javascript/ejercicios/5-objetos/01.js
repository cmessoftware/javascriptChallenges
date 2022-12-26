//Se pide crear un modelo de datos para registrar los datos de un cliente
//Persona: tendra campos nombre, apellido, edad, idPersona, idSector y direccion.
//Direccion a su vez tiene pais , ciudad, calle, numeros, barrio.
//Sector tiene idSector, nombre, 
//1- Se pide: Armar el modelo de datos usando objetos de javascript.
//1- Con la funcion Persona: cargar() cargar el modelo con lo siguientes datos
// Persona: nombre Juan, Apellido Perez, edad 45, idPersona 98, idSector 2 , direccion Argentina Cordoba Calle1 123 Volterra,  sector 2 nombre Finanzas
// Persona: nombre Jose, Apellido Amarilla, edad 40, idPersona 102, idSector 3 , direccion Argentina Cordoba Calle3 253 Volterra,  sector 3 nombre Contabilidad
// Persona: nombre Maria, Apellido Fernandez, edad 35, idPersona 58, idSector 1 , direccion Argentina CABA Calle10 5000 Congreso,  sector 1 nombre Presidencia
// Persona: nombre Norberto, Apellido Gonzalez, edad 45, idPersona 12, idSector 2 , direccion Argentina Mendoza Calle33 1223 Urbano,  sector 2 nombre Finanzas
// Persona: nombre Mario, Apellido Cordarco, edad 50, idPersona 100, idSector 1 , direccion Argentina CABA Calle14 123 Retiro,  sector 1 nombre Presidencia
//2- Con la funcion  Persona : consultar(idPersona) obtener el objeto persona correspondiente o false en caso de no encontrarla.
//3- Con la funcion boolean: modificar(idPersona, nuevaPersona : Persona) modificar la persona correspondiente con los datos de nuevaPersona, si no existe devolver false.
//4- Con la funciona boolean : eliminar(idPersona) eliminar la persona correspondient a idPersonas, si no existe o falla devolver false.

class Persona {

//Propiedades y metodos necesarios.
    modificar(idPersona, nuevaPersona){}
    cargar(persona){}
    modificar(idPersona, nuevaPersona)
    eliminar(idPersona)
}

class Direccion {}

class Sector {}


