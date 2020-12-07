//8:15
/* function paresEimpares(num1, num2, string){
    for(let i=0; i<=num1; i++){
        if(!(i%2)){
            console.log(i);
        }
    }
    for(let i=0; i<=num1; i++){
        if(i%2){
            if(!(i%num2)){
                console.log(string)
            } else{
                console.log(i)
            }
        }
    }
}

paresEimpares(10,7,"prueba");
 */
/* function min(arregloNumeros, string){
    if(string === "value"){
        let min =arregloNumeros[0];
        for(let i=0; i<arregloNumeros.length;i++){
            if(arregloNumeros[i]<min){
                min=arregloNumeros[i];
            }
        }
        return min;

    }else if(string === "index"){
        let min = arregloNumeros[0]
        let index;
        for(let i=0; i<arregloNumeros.length;i++){
            if(arregloNumeros[i]<min){
                index=i;            
            }
        }
        return index;
    }
}

console.log(min([5,8,2,3,4,9,1,18], "index"));
console.log(min([5,8,2,3,4,9,1,18], "value")); */

var paises = [
    {
        nombre: "argentina",
        continente: "sudamerica",
        poblacion: 40000000
    },
    {
        nombre: "brasil",
        continente: "sudamerica",
        poblacion: 300000000
    },
    {
        nombre: "venezuela",
        continente: "sudamerica",
        poblacion: 25000000
    },
    {
        nombre: "chile",
        continente: "sudamerica",
        poblacion: 10000000
    },
    {
        nombre: "australia",
        continente: "oceania",
        poblacion: 18000000
    },
    {
        nombre: "nueva zelanda",
        continente: "oceania",
        poblacion: 8000000
    },
    {
        nombre: "china",
        continente: "asia",
        poblacion: 1000000000
    },
    {
        nombre: "tailandia",
        continente: "asia",
        poblacion: 32000000
    },
    {
        nombre: "vietnam",
        continente: "asia",
        poblacion: 23000000
    },
    {
        nombre: "españa",
        continente: "europa",
        poblacion: 29000000
    },
    {
        nombre: "alemania",
        continente: "europa",
        poblacion: 33000000
    },
    {
        nombre: "francia",
        continente: "europa",
        poblacion: 65000000
    },
    {
        nombre: "portugal",
        continente: "europa",
        poblacion: 4000000
    },
    {
        nombre: "grecia",
        continente: "europa",
        poblacion: 12000000
    },
]
/* function doubleFilter(arregloObjetos, continente, numeroPoblacion){
    for(let i=0; i<arregloObjetos.length;i++){
        if(arregloObjetos[i].continente === continente && arregloObjetos[i].poblacion >= numeroPoblacion){
            console.log(arregloObjetos[i]);
        }
    }
}

doubleFilter(paises, "europa", 4000000); */

/* function doubleFilter(arregloObjetos, continente, numeroPoblacion){
    let objeto = {};
    let arreglo =[];
    let total = 0;
    for(let i=0; i<arregloObjetos.length;i++){
        if(arregloObjetos[i].continente === continente && arregloObjetos[i].poblacion >= numeroPoblacion){
            total += arregloObjetos[i].poblacion;
            objeto["nombres"] = arreglo.push(arregloObjetos[i].nombre);
            objeto["poblacion total"] = total;
        }
    }
    return objeto;
}

console.log(doubleFilter(paises, "sudamerica", 30000000)); */
var paises = [
    {
        nombre: "argentina",
        continente: "sudamerica",
        poblacion: 40000000
    },
    {
        nombre: "brasil",
        continente: "sudamerica",
        poblacion: 300000000
    },
    {
        nombre: "venezuela",
        continente: "sudamerica",
        poblacion: 25000000
    },
    {
        nombre: "chile",
        continente: "sudamerica",
        poblacion: 10000000
    },
    {
        nombre: "australia",
        continente: "oceania",
        poblacion: 18000000
    },
    {
        nombre: "nueva zelanda",
        continente: "oceania",
        poblacion: 8000000
    },
    {
        nombre: "china",
        continente: "asia",
        poblacion: 1000000000
    },
    {
        nombre: "tailandia",
        continente: "asia",
        poblacion: 32000000
    },
    {
        nombre: "vietnam",
        continente: "asia",
        poblacion: 23000000
    },
    {
        nombre: "españa",
        continente: "europa",
        poblacion: 29000000
    },
    {
        nombre: "alemania",
        continente: "europa",
        poblacion: 33000000
    },
    {
        nombre: "francia",
        continente: "europa",
        poblacion: 65000000
    },
    {
        nombre: "portugal",
        continente: "europa",
        poblacion: 4000000
    },
    {
        nombre: "grecia",
        continente: "europa",
        poblacion: 12000000
    },
]

function doubleFilter(arregloObjetos, continente, numeroPoblacion){
    let objeto = {};
    let arreglo =[];
    let total = 0;
    
    for(let i=0; i<arregloObjetos.length;i++){
        let min = arregloObjetos[0].poblacion
        if(arregloObjetos[i].continente === continente && arregloObjetos[i].poblacion >= numeroPoblacion){
            total += arregloObjetos[i].poblacion;
            arreglo.push(arregloObjetos[i].nombre);
            objeto["nombres"] = arreglo;
            objeto["poblacion total"] = total;
                   
        }
    }
    return objeto;
}

console.log(doubleFilter(paises, "sudamerica", 30000000));
//doubleFilter(paises, "sudamerica", 30000000)