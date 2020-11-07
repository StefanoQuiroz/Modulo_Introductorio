//Comparando
//En tu consola, escribí estas expresiones teniendo en cuenta el valor que deben retornar:
//1. Que compare dos strings y retorne un valor true.
//let a="cinco";
//let b="cinco";
//console.log(`${a===b}`);
//2. Que compare dos strings y devuelva false.
// let a="cinco";
// let b="cuatro";
// console.log(`${a===b}`);
//3. Que involucre un string y un número y retorne false.
// let a = "5";
// let b = 5;
// console.log(`${a===b}`);
 //4. Que involucre un string y un número y retorne true.
// let a = "5";
// let b = 5;
// console.log(`${a==b}`);

//¿Qué devuelve cada expresión?
//1 false || true
//  true
//2 !(true||false) && !(false&&true)
//  !(true) && !(false)
//  false && true
//  false
//3 !((false||true)&&true)
//  !(true&&true)
//  !(true)
//  false

//Mis primeras condicionales
//1. Escribir una sentencia if que siempre ejecute su bloque de código.
// let x=5;
// if(x===5){
//     alert("Ejecuta código");
// }
//2. Escribir una sentencia if que nunca ejecute su bloque de código.
// let x=5;
// if(x===6){
//     alert("Prueba -> esto se ejecutara nunca");
// }
//3. Escribir una sentencia que le pregunte al usuario cómo está y, si responde que está triste, le deje un mensaje de aliento en la consola.
// let estado = prompt("¿Cuál es su estado de animo de hoy?");
// if(estado == "Triste" || estado== "triste" || estado == "TRISTE"){
//     console.log("Animo!!!, programar no es difícil")
// }
//4. Escribir una sentencia que le pregunte al usuario cuál es el número secreto. Solamente deberás advertirle con un mensaje en caso de que esté equivocado.
// let numeroSecreto = parseInt(prompt("Ingrese el número secreto"));
// if(numeroSecreto === 25){
//     alert(`${numeroSecreto}: es el número secreto!!! `);
// } else {
//     alert(`${numeroSecreto}: número incorrecto`);
// }
//5. Pedir al visitante que ingrese una contraseña cuando visite el sitio. Si es correcta, redirigilo usando esta línea de código:  window.location = "http://www.google.com"
// let contrasena = prompt("Ingrese su contraseña");
// if(contrasena === "123"){
//     alert("Bienvenido a Google");
//     window.location = "http://www.google.com";
// } else {
//     alert("Contraseña incorrecta");
// }

//Par o impar
//Pedile al usuario que ingrese un número para que tu programa evalúe si es par o impar. Usá la estructura condicional if…else.
// let numero = parseInt(prompt("Ingrese un numero entero porfavor!!!"))
// if(!(numero%2)){
//     alert(`${numero}, es Par`)
// } else {
//     alert(`${numero}, es Impar`)
// }
// Otra forma
// let numero = parseInt(prompt("Ingrese un numero entero porfavor!!!"))
// if(numero%2===0){
//     alert(`${numero}, es Par`)
// } else {
//     alert(`${numero}, es Impar`)
// }

//¿Me puedo jubilar?
//Parte 1
//En este ejercicio, crearás un programa que le indique a las mujeres si están en edad o no de jubilarse. Importante: Las mujeres pueden jubilarse a los 60 años.
// let edad = parseInt(prompt("Ingrese su edad porfavor!!"));
// if(edad > 0 && edad < 60){
//     alert(`No se puede jubilar aún`);
// } else if(edad >= 60 && edad <= 120){
//     alert(`Es tiempo de jubilarse`);
// } else {
//     alert(`Fuera del límite`);
// }

//Parte 2
// En este ejercicio, modificarás tu programa para informar, tanto a las mujeres como a los hombres, si están en edad de jubilarse. Importante: Los hombres pueden jubilarse a los 65 años.
/* let genero = prompt("Indique si es Hombre o Mujer");
let edad = parseInt(prompt("Ingrese su edad porfavor!!"));
if (genero == "Hombre" || genero == "hombre" || genero == "HOMBRE"){
    if(edad > 0 && edad < 65){
        alert(`${genero}. No se puede jubilar aún`);
    } else if(edad >= 65 && edad <= 120){
        alert(`${genero}. Es tiempo de jubilarse`);
    } else {
        alert(`${genero}. Fuera del límite`);
    }    
} else {
    if(edad > 0 && edad < 60){
        alert(`${genero}. No se puede jubilar aún`);
    } else if(edad >= 60 && edad <= 120){
        alert(`${genero}. Es tiempo de jubilarse`);
    } else {
        alert(`${genero}. Fuera del límite`);
    }    
} */

//Extra Bonus
/* let genero = prompt("Indique si es Hombre o Mujer");
let edad = parseInt(prompt("Ingrese su edad porfavor!!"));
if((genero=="Hombre" && (edad>=65 && edad<=120)) || (genero=="Mujer" && (edad>=60 && edad<=120))){
    alert(`${genero}: Puede jubilarse `);
} else {
    alert(`${genero}, no puede jubilarse aún`);
} */
//Otra forma con operador ternario 1 Linea!!
/* let genero = prompt("Indique si es Hombre o Mujer");
let edad = parseInt(prompt("Ingrese su edad porfavor!!"));
let jubilacion =((genero=="Hombre" && (edad>=65 && edad<=120)) || (genero=="Mujer" && (edad>=60 && edad<=120))) ? alert(`${genero}: Puede jubilarse `) : alert(`${genero}, no puede jubilarse aún`); */

//Agrega Caminos
/* let edad=parseInt(prompt("Ingrese su edad.")); 
let imparPar;
if(edad<18) {
    if(edad<0){
        alert("Error, su edad no es válida.");
    } else {
        imparPar = (!(edad%2)) ? alert(`No puede pasar al bar. Sabia que su edad ${edad} es Par!!`) : alert(`No puede pasar al bar. Sabia que su edad ${edad} es Impar!!`); 
    }    
}
else if(edad<21){
    imparPar = (!(edad%2)) ? alert(`Puede pasar al bar, pero no puede tomar alcohol. Sabia que su edad ${edad} es Par!!`) : alert(`Puede pasar al bar, pero no puede tomar alcohol.Sabia que su edad ${edad} es Impar!!`) ;
}
else if(edad === 21){
    imparPar = (!(edad%2)) ? alert(`Felicidades!!!, ya eres mayor de edad. Sabia que su edad ${edad} es Par!!`) : alert(`Felicidades!!!, ya eres mayor de edad. Sabia que su edad ${edad} es Impar!!`) ;
} 
else{
    imparPar = (!(edad%2)) ? alert(`Puede pasar al bar y tomar alcohol.Sabia que su edad ${edad} es Par!!`) : alert(`Puede pasar al bar y tomar alcohol. Sabia que su edad ${edad} es Impar!!`) ;
} */

//Adiviná el número
//Pasar al html -> index.html


//Contenido Bonus: Switch
//Ejercicio 1
// Usando la estructura Switch, creá un programa en el que, si un usuario ingresa “casa”, “perro”, “pelota”, “árbol” o “genio”, nos devuelva la misma palabra traducida al idioma inglés. En caso de que la palabra sea distinta a la esperada, mostrale un mensaje que le informe que la palabra ingresada es incorrecta.
/* let word = prompt("Ingrese una palabra de la colección (casa, perro, pelota, árbol o genio)");
switch (word){
    case "casa":
        console.log(`${word} -> House`);
        break;
    case "perro":
        console.log(`${word} -> Dog`);
        break;
    case "pelota":
        console.log(`${word} -> Ball`);
        break;
    case "árbol":
        console.log(`${word} -> Tree`);
        break;
    case "genio":
        console.log(`${word} -> Genius`);
        break;
    default:
        console.log(`La palabra ingresada es incorrecta`);
}
 */

 //Ejercicio 2
/*
Usando la estructura Switch, pedile al usuario que valore la película que acaba de ver en:

Muy Mala.
Mala.
Mediocre.
Buena.
Muy buena.

Acompañá cada valoración con un mensaje que indique si lamentás o te alegrás por su valoración.
Por ejemplo, “Calificaste la película como Muy Mala. Lo lamentamos mucho.”
En caso de que ingresara un valor distinto, mostrale el mensaje: Ingresaste un valor inválido.
Cuando el usuario haya valorado la película, agradecele su visita.
*/

/* let valor = parseInt(prompt("¿Qué le pareció la película en la escala del 1-5?"));
switch (valor) {
    case 1:
        console.log("Calificaste la película como Muy Mala. Lo lamentamos mucho. Muchas gracias por su visita.");
        break;
    case 2:
        console.log("Calificaste la película como Mala. Lo lamentamos mucho. Muchas gracias por su visita.");
        break;
    case 3:
        console.log("Calificaste la película como Mediocre. Lo lamentamos mucho. Muchas gracias por su visita.");
        break;
    case 4:
        console.log("Calificaste la película como Bueno. Gracias!!!. Muchas gracias por su visita.");
        break;
    case 5:
        console.log("Calificaste la película como Muy Buena. Genial!!!. Muchas gracias por su visita.");
        break;
    default:
        console.log("Ingresaste un valor inválido. Volvé a intentar")
    } */

    