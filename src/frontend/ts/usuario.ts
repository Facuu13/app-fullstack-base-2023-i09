class Usuario extends Persona{

    private rol: string;
    private password: string;

    constructor(nombre: string, apellido: string, email:string, rol:string, password:string){
        super(nombre,apellido,email);
        this.rol = rol;
        this.password = password;
    }

    mostrar():string{
        //return this.nombre + " - "+ this.rol;
        return `${this.info_completa()} - ${this.rol}`;
    }

    obtenerRol():string{
        return `${this.rol}`; 
    }

}