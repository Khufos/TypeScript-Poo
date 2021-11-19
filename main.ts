// ts-node main
import  prompt from "prompt-sync";
import Personagem from './Personagem';


let person:Personagem = new Personagem("Khufos",100,40,20,30);

let teclado = prompt();
let opt : number = 0;


while(opt != 9 || person.isDead()){
    console.log("========== Personagem =========")
    console.log("      |1.Treinar ataque|       ")
    console.log("      |2.Treinar defesa|       ")
    console.log("      |3.Descansar|            ")
    console.log("      |4.Entrar em batalha|    ")
    console.log("      |8.Imprimir atributos|   ")
    console.log("      |9.Sair|                 ")
    console.log("|==============================")

    opt = +teclado('Escolha uma ação:')

    switch(opt ){
        case 1:
            person.treinar_ataque()
            console.log(person.status())
            break;
        case 2:
            person.treinar_defesa()
            console.log(person.status())
            break;
        case 3:
            let horas : number =+ teclado("Digite um numero de horas:")
            person.descansa(horas)
            console.log(person.status())
            break;
        case 4:
            person.luta()
            console.log(person.status())
            break;
        case 8:
            console.log(person.status())
            break;
        default:
            break;
        
    }
    
}
console.log('Ops! Morreu!')
    


