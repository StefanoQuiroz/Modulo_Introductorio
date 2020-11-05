//1.
let num1, num2, resultado;
//2. usar parseInt() ya que prompt() devuelve un "string" SIEMPRE!! 
num1 = parseInt(prompt("Ingrese un numero para num1!!"));
num2 = parseInt(prompt("Ingrese un numero para num2!!"));
//3.
resultado = num1 +num2;
//4. Mostrar por consola con F12
console.log(`${num1} + ${num2} = ${resultado}`);
//otra forma
console.log(num1+" + "+num2+" = "+resultado);
