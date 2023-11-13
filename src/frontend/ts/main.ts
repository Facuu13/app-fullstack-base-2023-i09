class Main implements EventListenerObject{
    public usuarios: Array<Usuario>= new Array<Usuario>();

    private buscarPersonas(){
        let currentTextarea = document.getElementById("textarea_1") as HTMLTextAreaElement;

            for (let u of this.usuarios) {
                console.log(u.mostrar());
                currentTextarea.value += u.mostrar();
            }
    }

    private cargarUsuario(): void{
        let iNombre = <HTMLInputElement> document.getElementById("iNombre");
        let iPassword = <HTMLInputElement> document.getElementById("iPassword");
        let pInfo = document.getElementById("pInfo");
        if(iNombre.value.length > 3 && iPassword.value.length > 3){
            let usuario : Usuario = new Usuario(iNombre.value,"apellido","email@","user",iPassword.value);
            this.usuarios.push(usuario);
            iNombre.value = "";
            iPassword.value = "";
            pInfo.innerHTML = "Se cargo correctamente"
            pInfo.className = pInfo.className + " textoCorrecto"
        } else{
            pInfo.innerHTML = "Usuario o contraseña incorrecta"
            pInfo.className = pInfo.className + " textoError"
        }


    }

    handleEvent(object: Event): void {
        let elemento = <HTMLElement> object.target;
        console.log(elemento.id)
        if("btnSaludar" === elemento.id){ //el triple igual me valida el tipo de dato y el valor. El doble igual solamente el valor
            this.buscarPersonas();
            
        } else if ("btnGuardar" === elemento.id){
            this.cargarUsuario();
        }
    }

}


window.addEventListener("load",  ()=> {

    let main: Main = new Main();

    let boton = document.getElementById("btnSaludar");
    boton.addEventListener("click",main);

    let botonGuardar = document.getElementById("btnGuardar")
    botonGuardar.addEventListener("click",main)


});
