
function sayHello(){
    let current_value = document.getElementById("textarea_1") as HTMLInputElement;
    let new_value = "Hello world!!!" + "\n" + current_value.value;
    document.getElementById("textarea_1").innerHTML = new_value;
}

let numero:number = 15;
console.log("el numero es: " + numero);

let verdadero: boolean;
verdadero = true;

if (verdadero){
    console.log("Es verdadero");
} else{
    console.log("Es Falso")
}

let lista: Array<string>;
lista = new Array<string>(); //le asignamos un espacio de memoria

lista.push("nueva"); //agregamos un dato al array
lista.push("otra");
lista.push("termi");

for(let i in lista){
    console.log(lista[i]);
}

console.log(lista.length);//nos va indicar el tamaño del array, esto no lleva parecentesis porque es un atributo

function sumar(x: number, y:number):number {
    return x + y;
}
function restar(x: number, y:number):number {
    return x - y;
}

function ejecutar(numero1: number, numero2: number, func: any) {
    alert(func(numero1, numero2));
}


window.addEventListener("load",  ()=> {
    sayHello();
    sayHello();
    sayHello();
    sayHello();
    console.log(sumar(2, 3));
});