//Las interfaces sirven para saber que datos utiliza o retorna cada método o servicio
//Una buena práctica es nombrar a las interfaces inciando con una i minúscila
export interface iUserProfile {
    username: string,
    age: number, //En typescript el tipo number, contempla todos los tipos númericos (int, float, Long, etc)
    enabled: boolean
}



export interface iRegisterUserParams {
    username: string,
    email: string,
    password: string
}

export interface iUpdateEmailParams {
    userId: number,
    newEmail: string
}