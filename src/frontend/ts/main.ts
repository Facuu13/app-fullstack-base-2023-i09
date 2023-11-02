class Main implements EventListenerObject{
    public usuarios: Array<Usuario>= new Array<Usuario>();

    private buscarPersonas(){
        let usuario1: Usuario = new Usuario("Facu","Villa","user@gmail.com","user","123456");
        let usuario2: Usuario = new Usuario("PAblo","Ventura","admin@gmail.com","admin","987654")
        this.usuarios.push(usuario1);
        this.usuarios.push(usuario2);
    }

    handleEvent(object: Event): void {
        this.buscarPersonas();
        let currentTextarea = document.getElementById("textarea_1") as HTMLTextAreaElement;

        for (let u of this.usuarios) {
            console.log(u.mostrar());
            currentTextarea.value += u.mostrar();
        }
    }

}


window.addEventListener("load",  ()=> {

    let main: Main = new Main();

    let boton = document.getElementById("btnSaludar");

    boton.addEventListener("click",main);


});

/*
-La clase usuario herede de una clase Persona que tenga nombre, apellido y mail
-y como generar la instancia usuario con esta herencia

cuando hagamos click en el boton ademas de mostrarlo por consola que lo imprima en el cuadro de texto
*/ 