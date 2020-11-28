//funcion 1

function multiplo(numero){
    let resultado = 1;
    for(let i=0; i<=60;i++){
        resultado = i * numero;
        if(i === 1){
            console.log(`mi numero es: ${numero}`)
        }
        console.log(`multiplo : ${resultado}`);
    }
}
//multiplo(6);
//multiplo 0: 0
//mi numero es : 6
//multiplo 2 : 12
//multiplo 3 : 18
//
//multiplo 60 : 36

//Ej 3 Filtrando propiedades.
/*
Ej 3: Filtrando propiedades.

En este ejercicio deberás definir una función que reciba como primer \
parámetro un arreglo de objetos y como segundo parámetro un arreglo de strings. 
Los strings serán nombres de propiedades que se encuentren en los objetos del primer arreglo.
demás, cada índice del primer arreglo se corresponde con el mismo índice del segundo.

La función devolverá un nuevo arreglo que en cada índice tendrá el valor que tenga el objeto
 (correspondiente al primer arreglo) en la propiedad que indique el segundo arreglo. 

Para clarificar la consigna, a continuación hay un ejemplo:

  objetos = [{forma: 'circulo' color: 'verde', tamaño: 3},
   {forma: “triangulo”, color: 'amarillo', tamaño: 4}]
  propiedades = ['color', 'forma' ]

	Entonces, para el primer objeto la función debería buscar el color y para el segundo la
   forma. Finalmente la función devolvería estp te tiene que devolver ['verde', 'triangulo'].

 Usá estos arreglos para probar tu función:

   objetos = [{forma: "circulo" color: 'verde', tamaño: 3}, 
   {forma: "triangulo", color: 'amarillo', tamaño: 4}, 
   {forma: "cuadrado", color: "celeste", tamaño: 2},
    {forma: "trapecio", color: "fucsia", tamaño: 7}, 
    {forma: "estrella", color: 'violeta', tamaño: 1}]
   propiedades = ['color', 'forma', 'tamaño', 'forma', 'color']
*/

/* function filtrandoPropiedades(arregloObjetos, arregloStrings){
    let nuevoArreglo = [];
    for(let i=0; i<=arregloObjetos||i<=arregloStrings.length; i++){
        for(let j in arregloObjetos[i]){
            if(j === arregloStrings[i]){
                nuevoArreglo.push(arregloObjetos[i][j]);
            }
        }
    }
    return nuevoArreglo;

}
objetos = [{forma: "circulo", color: 'verde', tamaño: 3}, 
   {forma: "triangulo", color: 'amarillo', tamaño: 4}, 
   {forma: "cuadrado", color: "celeste", tamaño: 2},
    {forma: "trapecio", color: "fucsia", tamaño: 7}, 
    {forma: "estrella", color: 'violeta', tamaño: 1}]
   propiedades = ['color', 'forma', 'tamaño', 'forma', 'color']
console.log(filtrandoPropiedades(objetos, propiedades)); */

// 4a
function continentesFunc(arregloObjetos){
    let nuevoArreglo =[];
    for(let i=0; i<arregloObjetos.length; i++){
        let objetos ={};
        objetos[arregloObjetos[i].nombre] = arregloObjetos[i].poblacion/arregloObjetos[i].superficie
        nuevoArreglo.push(objetos);
    }
    return nuevoArreglo;
}
continentes =[
    {nombre: 'asia', superficie: 43810000, poblacion: 387900000},
    {nombre: 'america', superficie: 42330000, poblacion: 910000000},{nombre: 'africa', superficie: 30370000, poblacion: 922011000},{nombre: 'antartida', superficie: 13720000, poblacion: 1000},{nombre: 'europa', superficie: 10180000, poblacion: 731000000},{nombre: 'oceania', superficie: 8720710, poblacion: 27000000}]

console.log(continentesFunc(continentes));


//falta b