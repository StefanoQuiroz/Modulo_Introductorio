//Escribiendo While Loops
//Todos los números entre -10 y 19.
/* let num = -10
while(num <= 19){
    console.log(num);
    num++;
} */

//Todos los números pares entre 10 y 40.
/* let num = 10;
while(num <= 40){
    if(!(num%2)){
        console.log(num);
    }
    num++;
} */

//Todos los números impares entre 300 y 333.
/* let num = 300;
while(num <= 333){
    if(num%2===1){
        console.log(num);
    }
    num++;
} */

//Todos los números entre 5 y 50 que sean divisibles por 5 y 3 al mismo tiempo.
/* let num = 5;
while(num <= 50){
    if(!(num%5) && !(num%3)){
        console.log(num);
    }
    num++;
}
 */
//otra forma con for, rossi me va ... pero es bueno que lo vean
/* for(let num = 5; num < 50; num++){
    if(!(num%5) && !(num%3)){
        console.log(num);
    }
} */

//Mi primer "bot"
//En este ejercicio deberás crear un bot para una cafetería. El bot deberá recibir hasta 20 clientes y asignarles una mesa a cada uno de ellos. El mensaje que deberá mostrar a cada uno es: "¡Bienvenid@ a mi café! Su mesa es la X".Extra Credit: Optimizá el código creando una variable que almacene el número de clientes.
/* let i = 0;
let maxCliente = 20;
while(i <= maxCliente){
    console.log(`¡Bienvenid@ a mi café! Su mesa es la ${i}`);
    i++;
} */

//Producto acumulado
//Escribí un While Loop que, dado un número elegido por vos previamente, calcule el producto de todos los enteros positivos entre 1 y ese número.Al terminar el While, imprimí el resultado por consola.
/* let num = parseInt(prompt("Ingrese un numero"));
let i = 1;
let res = 1;
while(i <= num){
    // res=1*i=1 res =1
    // res=1*i=2 res =2
    // res=2*i=3 res = 6
    res = res * i;
    i++;
}
console.log(res); */

//Par o impar
//En este ejercicio deberás crear un programa que le pregunte al usuario un número y que le devuelva un mensaje que indique si es par o impar. El programa terminará si el usuario ingresa un 0 o un número negativo.
/* let numero = parseInt(prompt("Ingrese un número"));
while(numero > 0){
    if(!(numero%2)){
        console.log(`PAR: ${numero}`);
    } else {
        console.log(`IMPAR: ${numero}`);
    }
    numero--;
} */


//Ejercicio de los Elephants
/*
//Revisar luego
let cantidadElefantes = 4;
let elefante = 1;
let cancion = "";

//      1                4
while(elefante<=cantidadElefantes){
  
    if(elefante ===1){
        cancion +=`${elefante} elefante se balanceaba sobre la tela de una araña, como veia que resistia fueron a buscar otro elefante.<br>`;
    }else{         
        cancion +=`${elefante} elefantes se balanceaban sobre la tela de una araña, como veian que resistia fueron a buscar otro elefante.<br>`;
    }
    elefante++;
}

document.write(cancion);

 */

 //FizzBuzz
 //En este ejercicio deberás escribir un programa que imprima en la consola los números del 1 al 100, teniendo en cuenta estos criterios:
/*  let i = 1;
 let f = 100;
 while(i <= f){
    //Si es, a la vez, múltiplo de 3 y de 5, deberá imprimir "FizzBuzz".
    if(!(i%3) && !(i%5)){
        console.log(`${i} FIZBUZZ`);
    //Si es múltiplo de 5, deberá imprimir "Buzz".
    } else if (!(i%5)){
         console.log(`${i} BUZZ`);
    //Si el número es múltiplo de 3, deberá imprimir "Fizz" en vez del número.
    } else if(!(i%3)){
        console.log(`${i} FIZZ`);
    }
    i++;
 } */

//¡Bienvenido, N!
//En este ejercicio deberás crear un programa para una fiesta de números. El programa deberá presentar a cada nuevo número, con los otros.Van a venir hasta 5 números.Tu programa deberá mostrar por consola los siguientes mensajes:

/* let i=1;
let f=5;
while(i<=f){
    switch (i){
        case 1:
            console.log(`¡Bienvenido, ${i}!`);
            break;
        case 2:
            console.log(`¡Bienvenido, ${i}! Te presento a ${i-1}.`);
            break;
        case 3:
            console.log(`¡Bienvenido, ${i}! Te presento a ${i-2} y a ${i-1}.`);
            break;
        case 4:
            console.log(`¡Bienvenido, ${i}! Te presento a ${i-3}, a ${i-2} y a ${i-1}.`);
            break;
        case 5:
            console.log(`¡Bienvenido, ${i}! Te presento a ${i-4}, a ${i-3}, a ${i-2} y a ${i-1} `)
            break;
    }
    i++
} */

