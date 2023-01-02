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

export interface iInvestigacion {
    descripcion: string,
    documento: string,
    fecha: string,
    id: number,
    pais: number,
    titulo: string,
    url: string
}

export interface iLogro {
    descripcion: string,
    documento: string,
    titulo: string,
    url: string
}

export interface iHabilidadDura {
    id: string,
    experiencia: string, //BASICO, INTERMEDIO, AVANZADO
    nombre: string,

}

export interface iPerfil {
    apellido: string,
    ciudad: string,
    habilidadesDuras: [iHabilidadDura],
    nombre: string,
    pais: string,
    titulo: string
}

export interface iSeguidor {
    profesionalId: number
}


export interface iSobreMiImagen {
    documento: string,
    id: number
}

export interface iVisita {
    profesionalId: number
}