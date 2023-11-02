class Main implements EventListenerObject{
    public usuarios: Array<Usuario>= new Array<Usuario>();

    private buscarPersonas(){
        let usuario1: Usuario = new Usuario("user1","user","123456");
        let usuario2: Usuario = new Usuario("admin1","admin","123")
        this.usuarios.push(usuario1);
        this.usuarios.push(usuario2);
        for (let u of this.usuarios){
            console.log(u.mostrar())
        }
    }

    handleEvent(object: Event): void {
        this.buscarPersonas();
    }

}


window.addEventListener("load",  ()=> {

    let main: Main = new Main();

    let boton = document.getElementById("btnSaludar");

    boton.addEventListener("click",main);


});

/*
La clase usuario herede de una clase Persona que tenga nombre, apellido y mail
y como generar la instancia usuario con esta herencia

cuando hagamos click en el boton ademas de mostrarlo por consola que lo imprima en el cuadro de texto
*/ 