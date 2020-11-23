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
