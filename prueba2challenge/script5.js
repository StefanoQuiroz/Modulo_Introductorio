/* 5. Doble Filtro III

Ahora, la función doubleFilter debe retornar un objeto que, además de tener las keys nombres y población total, tenga una key mayor y una menor en la que guarde el nombre de los países con mayor y menor población respectivamente.

Ejemplo:
doubleFilter(paises, ‘sudamerica’, 30000000) debe retornar {
									nombres: [‘argentina’, ‘brasil],
									poblacion total: 340000000,
									mayor: ‘brasil’,
									menor: ‘argentina’
}

 */

let paises = [
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