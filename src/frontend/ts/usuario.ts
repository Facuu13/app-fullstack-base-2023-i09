class Usuario{
    private nombre: string;
    private rol: string;
    private password: string;
    constructor(nombre:string, rol:string, password: string){
        this.nombre = nombre;
        this.rol = rol;
        this.password = password;
    }

    mostrar():string{
        //return this.nombre + " - "+ this.rol;
        return `${this.nombre} - ${this.rol}`;
    }
}