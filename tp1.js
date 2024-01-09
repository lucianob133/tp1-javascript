
// Constantes///////////////////////////////////////////////////////////////////////////////////////////

const anioActual = 2024;
const maximo_pasajeros = 4;

////////////////////////////////////////////////////////////////////////////////////////////////////////
// Fecha de ida y vuelta
let diaIda, mesIda; 
let diaVuelta, mesVuelta;

// Array para almacenar las fechas de ida
let fechasDeIda = [];

// Array para almacenar las fechas de vuelta
let fechasDeVuelta = [];

//Array para almacenar destinos.
let destinoViaje = []

// Saludo inicial
alert("Bienvenido al programa de reserva de vuelos!");

// Cantidad de pasajeros
let cantidadPasajeros = prompt("Por favor, ingrese la cantidad de pasajeros:");

// Pasa la cantdad de pasajeos a numero
cantidadPasajeros = parseInt(cantidadPasajeros);

// Se fija que sea solo numero y el usuario no escriba letars
while (isNaN(cantidadPasajeros) || cantidadPasajeros <= 0 || cantidadPasajeros > maximo_pasajeros) 
{
  alert("Por favor, ingrese un numero valido para la cantidad de pasajeros (maximo 4 por compra).");
  // Vuelve a pedir la cantidad de pasajeros
  cantidadPasajeros = prompt("Por favor, ingrese la cantidad de pasajeros:");
}

// Arracna un array para almacenar los nombres y apellidos de los pasajeros
let nombresPasajeros = [];

// Bucle para pedir nombres y apellidos de cada pasajero
for (let i = 1; i <= cantidadPasajeros; i++) 
{
    // Pide el nombre y apellido del pasajero
    let nombreApellido = prompt( "Ingrese el nombre y apellido del pasajero" + i + ":");

        // Se fija que no mande la opcion sin ningun dato
        while (nombreApellido.trim() == "") 
    {
        // Si esta vacio, pide que ingrese un nombre y apellido correcto
        alert("Por favor, Ingrese nombre y apellido.");

        // Vuelve a pedir el nombre y apellido
        nombreApellido = prompt("Ingrese el nombre y apellido del pasajero" + i + ":");
    }


    // Verifica si es un numero
    while (!isNaN (parseFloat(nombreApellido) ) && isFinite(nombreApellido)) 
    {
        // Si es un numero, pide que ingrese un nombre y apellido correcto
        alert("Por favor, ingrese un nombre y apellido valido.");

        // Vuelve a pedir el nombre y apellido
        nombreApellido = prompt("Ingrese el nombre y apellido del pasajero" + i + ":");
    }

  // Si es un nombre valido, agrega a la lista
  nombresPasajeros.push(nombreApellido);
}



/*--------------------------------------------------------------------------------*/
// Preguntar destino

//let destinoViaje = []

let destino = prompt ("Escriba destino donde desea ir: ")


// Se fija que no mande la opcion sin ningun dato

while (destino.trim() === "" || !isNaN(parseFloat(destino))) 
{
    if (destino.trim() === "") 
    {
        alert("Error: Ingrese un destino valido.");

    } 
    else if (!isNaN(parseFloat(destino))) 
    {
        alert("Error: Ingrese un destino valido. No debe contener numeros.");
    }

    // Vuelve a pedir el destino
    destino = prompt("Escriba el destino donde desea ir: ");
}


destinoViaje.push(destino);

//----FECHA DE IDA y VUELTA ------------------------------------------------------------------------------



do {
    // Pregunta por el dia y mes
    diaIda = prompt("Viaje de IDA: Ingrese el dia del mes:");

    mesIda = prompt("Ingrese el mes (numero del 1 al 12 dentro del año " + anioActual +".)");

    diaVuelta = prompt("Viaje de VUELTA: Ingrese el día del mes:");

    mesVuelta =  prompt("Ingrese el mes (número del 1 al 12 dentro del año " + anioActual +".)");
  
    // Verifica si la entrada es válida
    if (isNaN(diaIda) || diaIda < 1 || diaIda > 31) 

    {
        alert("Por favor, ingrese un -dia- correcto.");
    } 

    else if (isNaN(mesIda) || mesIda < 1 || mesIda > 12 )
    {
        alert("Por favor escriba un -mes- correcto.");
    }

    // ESTA PARTE ES EL VUELO DE VUELTA

    else if (isNaN(diaVuelta) || diaVuelta < 1 || diaVuelta > 31) 

    {
        alert("Por favor, ingrese un -dia- correcto (VUELTA).");
    } 

    else if (isNaN(mesVuelta) || mesVuelta < 1 || mesVuelta > 12 )
    {
        alert("Por favor escriba un -mes- correcto.(VUELTA)");
    }
     
    else 
    {
        // Muestra la fecha seleccionada
        alert("Fecha de Ida: "+ diaIda+"/" + mesIda +"/"+ anioActual+ "\n" +
        "Fecha de Vuelta: " + diaVuelta + "/" + mesVuelta + "/" + anioActual);


        // Almacena la fecha en el array - let fechasDeIda = [];
        fechasDeIda.push([diaIda, mesIda, anioActual]);

        fechasDeVuelta.push([diaVuelta, mesVuelta, anioActual])
    }

} 
while (isNaN(mesIda)||isNaN(mesVuelta) || isNaN(diaIda)|| isNaN(diaVuelta) || mesIda < 1 || mesIda > 12 || diaIda < 1 || diaIda > 31
        || mesVuelta < 1 || mesVuelta > 12 || diaVuelta < 1 || diaVuelta > 31);




//--- RESULTADOS --------------------------------------------------------------------------------------------
// Cuenta la cantidad de pasajeros que hay deñ array con LENGTH;

for (let i = 0; i < nombresPasajeros.length; i++) 
{
    console.log("  - Pasajero n° " + (i + 1) + ": " + nombresPasajeros[i] + " " );
}
// -------------Destino
console.log("destino seleccionado: " + destino)

// Fecha de Ida y Vuelta

//console.log ("Fecha de Ida:"+ diaIda+"/" + mesIda +"/"+ anioActual)

// Muestra las fechas almacenadas en el array fechasDeIda
console.log("Fechas de Ida :");
fechasDeIda.forEach(fecha =>
{

    console.log(`- ${fecha[0]}/${fecha[1]}/${fecha[2]}`);

});

// Muestra las fechas almacenadas en el array fechasDeVuelta

console.log("Fechas de Vuelta :");
fechasDeVuelta.forEach(fecha =>
{

    console.log(`- ${fecha[0]}/${fecha[1]}/${fecha[2]}`);

});


