var M;
class Main implements EventListenerObject{
    public usuarios: Array<Usuario>= new Array<Usuario>();

    private buscarPersonas(){
        let currentTextarea = document.getElementById("textarea_1") as HTMLTextAreaElement;
        let obk = {"key":"value", "keynum":123, "bool":true};
            for (let u of this.usuarios) {
                console.log(u.mostrar());
                currentTextarea.value += u.mostrar();
            }
    }

    private buscarDevices(){

// dependiendo del estado del dispositivo, habilitar el boton checked
        let xmlRequest = new XMLHttpRequest();
        xmlRequest.onreadystatechange = ()=> {
            if(xmlRequest.readyState == 4){
                if(xmlRequest.status == 200){
                    console.log(xmlRequest.responseText, xmlRequest.readyState);
                    let respusta = xmlRequest.responseText;
                    let datos: Array<Device> = JSON.parse(respusta);
                    let ul = document.getElementById("listaDisp");
                    for(let d of datos){
                        console.log(d.name);
                        ul.innerHTML += `<li class="collection-item avatar">
                        <i class="material-icons circle green">insert_chart</i>
                        <span class="title">${d.name}</span>
                        <p>${d.description}</p>
                        <a href="#!" class="secondary-content">
                        <div class="switch">
                            <label>
                                Off
                            <input type="checkbox">
                            <span class="lever"></span>
                                On
                            </label>
                        </div></a>
                        </li>`
                    }
                }else{
                    console.log("No encontre nada")
                }
            }
            
        }
        xmlRequest.open("GET","http://localhost:8000/devices",true); //lo ponemos en true para que se ejecute de forma asincrona
        xmlRequest.send();
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

    private ejecutarPost(){
        let xmlRequest = new XMLHttpRequest();
        xmlRequest.onreadystatechange = ()=> {
            if(xmlRequest.readyState == 4){
                if(xmlRequest.status == 200){
                    console.log("llego respuesta",xmlRequest.responseText);
                }
            }

        }
        xmlRequest.open("POST","http://localhost:8000/device",true); //lo ponemos en true para que se ejecute de forma asincrona
        xmlRequest.send();
    }

    handleEvent(object: Event): void {
        let elemento = <HTMLElement> object.target;
        console.log(elemento.id)
        if("btnListar" === elemento.id){ //el triple igual me valida el tipo de dato y el valor. El doble igual solamente el valor
            this.ejecutarPost();
            
        } else if ("btnGuardar" === elemento.id){
            this.cargarUsuario();
        }
    }

}


window.addEventListener("load",  ()=> {

    var elems = document.querySelectorAll('select');
    M.FormSelect.init(elems, null);

    var elemsModal = document.querySelectorAll('.modal');
    M.Modal.init(elemsModal, null);

    let main: Main = new Main();

    let boton = document.getElementById("btnListar");
    boton.addEventListener("click",main);

    let botonGuardar = document.getElementById("btnGuardar")
    botonGuardar.addEventListener("click",main)


});
