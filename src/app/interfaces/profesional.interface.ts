//Las interfaces sirven para saber que datos utiliza o retorna cada método o servicio
//Una buena práctica es nombrar a las interfaces inciando con una i minúscila
export interface iProfesionalRegister {
    email: string,
    uid: string,
    nombre: string
}

export interface iAcercaDeMi {
    texto: string
}

export interface iAvatar {
    documento: string,
    id: number
}

export interface iCurriculum {
    documento: string,
    id: number
}

export interface iCarrera {
    nombre: string,
    id: number,
    validado: boolean
}

export interface iEducacion {
    actual: boolean,
    anio: number,
    carrera: iCarrera,
    descripcion: string,
    egresado: boolean,
    fechaFin: string,
    fechaInicio: string,
    id: number,
    intitucion: string,
    pais: number,
    titulado: boolean,
}