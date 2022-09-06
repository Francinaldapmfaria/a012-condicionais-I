//Escreva um código que receba três valores. Uma idade, um booleano que responda se a pessoa terminou ou não o ensino médio, e um 
//booleano que responda se a pessoa está cursando alguma faculdade.

// let idade = number(prompt("Qual sua idade?"))
// let terminouEnsinoMedio = boolean(prompt("Terminou o ensino médio? resposta true ou false"))
// let cursandoFaculdade = boolean(prompt("Esta cursando faculdade? resposta true ou false"))

// //Crie um `if` para cada variável, checando as seguintes afirmacões:

// //Se a pessoa tem 18 anos ou mais;

// if(idade >= 18){
//     console.log("A pessoa é maior de idade")
// }else{
//     console.log("A pessoa é menor de idade")
	
// }

// //Se a pessoa terminou o ensino médio;
// if(terminouEnsinoMedio === true){
//     console.log("Terminou o ensino médio")

// }else{
//     console.log("não terminou ensino médio")
	
// }

// //Se a pessoa NÃO está cursando alguma faculdade;
// if(cursandoFaculdade === true){
//     console.log("Esta cursando faculdade")

// }else{
//     console.log("Não esta cursando faculdade")
	
// }

let idade = Number(prompt("Qual sua idade?"))
let terminouEnsinoMedio = true
let cursandoFaculdade = false

//Crie um `if` para cada variável, checando as seguintes afirmacões:

//Se a pessoa tem 18 anos ou mais;

if(idade >= 18){
    console.log("A pessoa é maior de idade")
}else{
    console.log("A pessoa é menor de idade")
	
}

//Se a pessoa terminou o ensino médio;

if(terminouEnsinoMedio === true){
    console.log("Terminou o ensino médio")

}else{
    console.log("Não terminou ensino médio")
	
}

//Se a pessoa NÃO está cursando alguma faculdade;
if(cursandoFaculdade === true){
    console.log("Esta cursando faculdade")

}else{
    console.log("Não esta cursando faculdade")
	
}

