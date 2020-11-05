/* //Ejercicio1
//1.
let edad = 27;
//2.
let edadMaxima = 93;
//3.
let snackDoritos;
//4.
let cantSnacksDia = 2;
//5.
let tiempo = (edadMaxima - edad);
let tiempoDia = tiempo*365;
snackDoritos = tiempoDia * cantSnacksDia;
//6. 
alert(`Vas a necesitar ${snackDoritos} snacks para que te alcancen hasta los ${tiempo} años.`);
//7.
let precio = 2.5;
let total = precio * snackDoritos;
alert(`Vas a gastar $ ${total} el resto de tu vida en snacks`); */
// Quitar el /* y */ para descomentar
//Ejercicio2
//1.
let diasViaje = 15;
//2. 
let presupuestoMaximo = 600;
//3. 
let comida;
//4.
let cantidadDeComidas = 3;
//5.
comida= presupuestoMaximo/(cantidadDeComidas*diasViaje);
// .toFixed(2) para redondear a dos decimales un numero 11.11111111 -> 11.11
let comidaRedondeoDos = comida.toFixed(2);
//6.
alert(`Podés gastar ${comidaRedondeoDos} en cada comida para que te alcance la plata durante los ${diasViaje} días de viaje`);


let mensaje =`
<div>
    <p>¡Hola!</p>
</div>
`
console.log(mensaje);