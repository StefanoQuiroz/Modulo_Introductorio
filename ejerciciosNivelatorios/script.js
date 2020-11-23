/* 1. Loop de pares
Debés crear una función llamada loopDePares que reciba como parámetro un número y
haga un loop de 0 a 100 mostrando en la consola cada número del loop.
En caso de que el número de la iteración sumado con el número pasado por parámetro,
sea par, mostrá en la consola “El número x es par”.
 */

/*  function loopDePares (numero){
     let res = 0;
     for(let i=0; i<=100; i++){
         res = i + numero;
         if(!(res%2)){
             console.log(`El número ${res} es par `)
         }
    }
 }

 loopDePares(5); */

 /* 2. Loop de impares con palabra
Debés crear una función llamada loopDeImpares que reciba como parámetro un
número y una palabra y haga un loop de 0 a 100 mostrando en la consola cada número
del loop.
Ahora, modificar el código para que, en caso de que ese número sumado con el número
pasado por parámetro sea impar, muestre en la consola la palabra pasada por
parámetro */

/* function loopDeImpares (numero, palabra){
    let res=0;
    for(let i=0; i<=100; i++){
        //console.log(i);
        res =  i + numero;
        if(res%2===1){
            console.log(`${res} : ${palabra} `);
        }
    }
}

loopDeImpares(8,"Impar"); */

/* 3. Sumatoria
Debés crear una función llamada `sumattion` que reciba un número como parámetro y
que devuelva la sumatoria de todos sus números anteriores, incluso ese mismo.
Ejemplo:
- sumattion(3) debe retornar 6 por que hace (1 +2 +3)
- sumattion(8) debe retornar 36 */

/* function sumattion (numero){
    let res=0;
    for(let i=1; i<=numero; i++){
        res=res+i;
    }
    return res;
}
let numero = 8
console.log(`La sumatoria de ${numero} = ${sumattion(numero)}`); */

/* 4. Nuevo Arreglo
Debés crear una función llamada `nuevoArreglo` que reciba un número como parámetro
y que devuelva un nuevo arreglo con tantos elementos como el número que le hayas
pasado.
Ejemplo:
- nuevoArreglo(5) debe retornar [1,2,3,4,5]
- nuevoArreglo(10) debe retornar [1,2,3,4,5,6,7,8,9,10] */

/* function nuevoArreglo(numero){
    let arreglo=[];
    for(let i=1; i<=numero; i++){
        arreglo.push(i);
    }
    return arreglo;
}

console.log(nuevoArreglo(10));
console.log(nuevoArreglo(5)); */

/* 5. Similar String.split()
Debés crear una función llamada `split` que reciba un `string` y simule el
comportamiento de la función original Si no sabés cómo funciona, Google puede
ayudarte..
Importante: No podés usar el String.split()
Ejemplo:
- split(“hola”) debe retornar [“h”,”o”,”l”,”a”]
- split(“chau”) debe retornar [“c”,”h”,”a”,”u”] */

/* function split(string){
    let arreglo = [];
    for(let i=0; i < string.length; i++){
        arreglo.push(string[i])
    }
    return arreglo;
}

console.log(split("hola"));
console.log(split("chau")); */

/* 6. Carácter del medio
Debés crear una función llamada `middleCharacter` que reciba un `string` por parámetro
y devuelva sus caracteres del medio.
Ejemplo:
- middleCharacter(“plataforma5”) debe retornar “f”
- middleCharacter(“hola”) debe retornar “ol”
- middleCharacter(“cosas”) debe retornar “s”
 */
/* function middleCharacter (string){
    let redondeo = Math.floor(string.length/2);
    if(string.length % 2===0){
        return `${string[redondeo-1]}${string[redondeo]}`
    }
    else{
        return `${string[redondeo]}`
    }
}
console.log(middleCharacter("cosas")); */
/* 7. Mover ceros a lo último
Debés crear una función llamada `moveZeros` que reciba un arreglo como parámetro y
devuelva otro con los números `0` ordenados al final.
Ejemplo:
- moveZeros([false,1,0,1,2,0,1,3,"a"]) debe retornar [false,1,1,2,1,3,"a",0,0]
- moveZeros([1,2,0,1,0,1,0,3,0,1]) debe retornar [1,2,1,1,3,1,0,0,0,0]
 */

/* function moveZeros(arreglo){
    let nuevoArreglo = []
    for(let i=0; i<arreglo.length;i++){
        if(arreglo[i]===0){
            nuevoArreglo.push(arreglo[i])
            arreglo.splice(arreglo.indexOf(arreglo[i]),1)
            
            //nuevoArreglo.push(arreglo[i])
            //push(arreglo[i]);
        }
    }
    for(let i=0; i< nuevoArreglo.length; i++){
        arreglo.push(nuevoArreglo[i]);
    }
    return arreglo;
    
}
let arreglo = [1,2,0,1,0,1,0,3,0,1]
let arreglo2= [false,1,0,1,2,0,1,3,"a"]
console.log(moveZeros(arreglo));
console.log(moveZeros(arreglo2)); */

/* 8. Manejando dos arreglos
Debés crear una función llamada `arrayHandler` que reciba dos arreglos de igual largo
como parámetros y muestre en la consola “Soy {elemento de array 1} y yo soy
{elemento de array 2}”.
Ejemplo:
- arrayHandler([1,2,3,4], [“h”,”o”,”l”,”a”]) debe mostrar:
Soy 1 y yo soy h
Soy 2 y yo soy o
Soy 3 y yo soy l
Soy 4 y yo soy a
 */

/* function arrayHandler(arreglo1, arreglo2){
    if(arreglo1.length === arreglo2.length){
        for (let i=0; i<arreglo1.length;i++){
            console.log(`Soy ${arreglo1[i]} y yo soy ${arreglo2[i]}`)
        }
    }
    else {
        alert(`${arreglo1} no es del mismo tamanio de ${arreglo2}`)
    }
}
arrayHandler([1,2,3,4], ["h","o","l","a"]);
//Prueba diferentes tamanios arreglo1 y arreglo2, alert
//arrayHandler([1,2,3,4], ["h","o","l"]); */

/* 9. Mezclando arreglos I
Debés crear una función llamada `mezclarArreglos` que reciba dos arreglos como
parámetros y devuelva uno nuevo con los elementos de ambos, de 1 en 1.
Ejemplo:
- mezclarArreglos([1,2,3,4],[“h”,”o”,”l”,”a”]) debe retornar [1, “h”, 2,”o”, 3,”l”,4,”a”]
- mezclarArreglos([1,2,3,4], [“h”,”p”]) debe retornar [1, “h”, 2, “p”, 3 , 4]
- mezclarArreglos([“h”,”p”], [1,2,3,4]) debe retornar [“h”, 1, “p”, 2, 3 , 4] */

/* 10. Mínima Suma
Debés crear una función llamada `minSum` que reciba un arreglo de números
desordenados y devuelva la suma entre los dos números más chicos.
Ejemplo:
- minSum([7, 6, 5, 4, 3, 2, 1]) debe retornar 3 (2 + 1)
- minSum([1, 10, 43, 900, 20, 8]) debe retornar 9 */

/* function minSum(arreglo){
    //dar valores altos al azar a min y min2
    let min = 1000
    //arreglo[0];
    let nuevoArreglo = [];
    let min2 = 1000
    //arreglo[0];
    for(let i=0; i<arreglo.length; i++){
        if(min > arreglo[i]){
            min=arreglo[i];
        }
    }    
    for(let i=0; i<arreglo.length; i++){
        if(arreglo[i]>min && min2>arreglo[i]){
            min2=arreglo[i];
        }
    }
    return min + min2;
}
console.log(minSum([7, 6, 5, 4, 3, 2]))
console.log(minSum([1, 10, 43, 900, 20, 8]))
console.log(minSum([2, 10, 43, 900, 20, 8]))
console.log(minSum([2,3,4,5,6,7])) */
//Otra forma con algoritmo de ordenacion bubble sort, mas avanzado
/* function minSuma (arreglo){
    const tamanio = arreglo.length - 1;
    for(let i=0; i<tamanio;i++){
        for(let j=0; j<(tamanio-i); j++){
            if(arreglo[j]>arreglo[j+1]){
                const temp = arreglo[j];
                arreglo[j]=arreglo[j+1];
                arreglo[j+1]=temp;
            }
        }
    }
    let sumaMinima = 0;
    for(let i=0; i<2;i++){
        sumaMinima += arreglo[i];
    }
    return sumaMinima;
}

console.log(minSuma([1, 10, 43, 900, 20, 8]))
console.log(minSuma([7, 6, 5, 4, 3, 2]))
console.log(minSuma([1, 10, 43, 900, 20, 8]))
console.log(minSuma([2, 10, 43, 900, 20, 8]))
console.log(minSuma([2,3,4,5,6,7])) */
