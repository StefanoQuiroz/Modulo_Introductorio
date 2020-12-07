//20:36 - 20:52  1:16min
/* function paresEimpares(num1, num2, string){
    for(let i=0; i<=num1;i++){
        if(!(i%2)){
            console.log(i);
        }
    }
    for(let i=0; i<num1;i++){
        if(i%2){
           if(!(i%num2)){
                console.log(string)
            }else{
                console.log(i);
            }
            
        }
    }
}

paresEimpares(10,7,"prueba") */

/* function min(arreglo, string){
    if(string === "value"){
        let min = arreglo[0]
        for(let i=0; i<arreglo.length;i++){
            if(arreglo[i]<min){
                min=arreglo[i]
            }

        }
        return min;

    }else if(string === "index"){
        let min = arreglo[0];
        let index;
        for(let i=0; i<arreglo.length;i++){
            if(arreglo[i]<min){
                index=i
            }

        }
        return index;        
    }
}
console.log(min([5,8,2,3,4,9,1,18], "index"));
console.log(min([5,8,2,3,4,9,1,18], "value")); */

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
        continente : "europa",
        poblacion : 4000000
    },
    {
        nombre: "grecia",
        continente: "europa",
        poblacion: 12000000
    }
]
////////Mariano////////////////////////////////////////
function doubleFilter(arregloDeObjetos,continente,numero){
         let arreglo=[]
         let arreglo2=[]
         let objeto={}
         let total=0
        for(let i=0 ;i<arregloDeObjetos.length;i++){
            if(arregloDeObjetos[i]["continente"]===continente && arregloDeObjetos[i]["poblacion"]>numero) {
                arreglo.push(arregloDeObjetos[i]["nombre"])
    
              objeto["nombres"]=arreglo
              total+=arregloDeObjetos[i]["poblacion"]//inicializar en 0 y acumular la poblacion
              objeto["poblacion total"]=total
              arreglo2.push(objeto)
            }
            
        }
        return objeto
        
    
    }
    
console.log (doubleFilter(paises, "sudamerica", 30000000))
/////////////////////////////////////////////////////////////////////////77
function doubleFilter (arregloObjetos, continente, numeroPoblacion){
    let total=0;
    let objeto = {}
    let arreglo= []
    for(let i=0; i<arregloObjetos.length; i++){
        if(arregloObjetos[i].continente === continente && arregloObjetos[i].poblacion>=numeroPoblacion){
            total+=arregloObjetos[i].poblacion
            objeto["nombres"] = arreglo.push(arregloObjetos[i].nombre)
            objeto["poblacion total"] = total;
        }
    }
    return objeto

    
}
console.log(doubleFilter(paises, "sudamerica", 30000000));

/* function doubleFilter (arregloObjetos, continente, numeroPoblacion){
    let total=0;
    let objeto = {}
    let arreglo= []
    for(let i=0; i<arregloObjetos.length; i++){
        if(arregloObjetos[i].continente === continente && arregloObjetos[i].poblacion>=numeroPoblacion){
            total+=arregloObjetos[i].poblacion
            objeto["nombres"] = arreglo.push(arregloObjetos[i].nombre)
            objeto["poblacion total"] = total;
        }
        
    }
    //return objeto
    for(let i=1; i<arreglo.length;i++){
        if(arreglo[i-1].poblacion<arreglo[i].poblacion){
            objeto["mayor"]=arreglo[i];

        } else{
            objeto["menor"] = arreglo[i-1]
        }
    }
    return objeto

}

    
// doubleFilter(paises, "sudamerica", 30000000)
console.log(doubleFilter(paises, "sudamerica", 30000000)); */