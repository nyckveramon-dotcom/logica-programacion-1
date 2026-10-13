const prompt = require('prompt-sync')();

function pedirNumero(mensaje ="Escribe el número: "){
    return Number(prompt(mensaje));
}

function operacionNumeros(numero1, numero2, numero3){

    if(numero1 === numero2 || numero1 === numero3 || numero2 === numero3){
        console.log("Existen números iguales");
    }else{
        if(numero1 > numero2 && numero1 > numero3){
        if(numero2 > numero3){
            console.log(numero1, numero2, numero3);  
        }else{
            console.log(numero1,numero3,numero2);   
        }
    }else if(numero2 > numero1 && numero2 > numero3){
        if(numero1 > numero3){
            console.log(numero2, numero1, numero3);
        }else{
            console.log(numero2, numero3, numero1);
        }
    }else if(numero3 > numero2 && numero3 > numero1){
        if(numero1 > numero2){
            console.log(numero3, numero1, numero2);
        }else{
            console.log(numero3, numero2, numero1);
        }
    }
    } 
}


function ordenarNumeros(){
    let continuar = "si";

    while(continuar === "si"){
        let numero1 = pedirNumero("Escribe el primer número: ");
        let numero2 = pedirNumero("Escribe el segundo número: ");
        let numero3 = pedirNumero("Escribe el tercer número: ");

        operacionNumeros(numero1, numero2, numero3);

        continuar = prompt("Quieres realizar otra operación (si/no): ")
    }
}

ordenarNumeros()