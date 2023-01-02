import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iApiResponse } from '../interfaces/apiResponse.interface';
import axios from 'axios'; //Librería para hacer las conexiones
import { properties } from 'src/properties/properties'; //Importante
import { iAcercaDeMi, iAvatar, iCurriculum, iEducacion, iExperiencia, iInvestigacion, iLogro, iPerfil, iProfesionalRegister, iSeguidor, iSobreMiImagen, iVisita } from '../interfaces/profesional.interface';


@Injectable({
  providedIn: 'root'
})
export class ProfesionalService {

  constructor() { }

  async getProfesional(idProfesional: String, token: String) { //Ejemplo de método GET

    //Retornamos directamente la respuesta, luego de recibirla
    return await axios.get<iApiResponse>(
      properties.API.BASE + properties.API.ENDPOINTS.PROFESIONAL.replace('{id}', idProfesional.toString()), //Todas las variables pasadas a URL que no sean string, deben ser transformadas a string usando .toString()
      { //Axios Config
        headers: { //Headers personalizados
          Accept: 'application/json',
          Authorization: token.toString()
        }
      }
    );
  }

  async acercaDeMi(params: iAcercaDeMi, idProfesional: String, token: String) { //Ejemplo de método PUT
    //Retornamos directamente la respuesta, luego de recibirla
    return await axios.patch<iApiResponse>(
      properties.API.BASE + properties.API.ENDPOINTS.ACERCA_DE_MI.replace('{id}', idProfesional.toString()), //Todas las variables pasadas a URL que no sean string, deben ser transformadas a string usando .toString()
      { //Body
        texto: params.texto
      },
      { //Axios Config
        headers: { //Headers personalizados
          Accept: 'application/json',
          Authorization: token.toString()
        }
      }
    );
  }

  async updateAvatar(params: iAvatar, idProfesional: String, token: String) { //Ejemplo de método PUT
    //Retornamos directamente la respuesta, luego de recibirla
    return await axios.patch<iApiResponse>(
      properties.API.BASE + properties.API.ENDPOINTS.ACERCA_DE_MI.replace('{id}', idProfesional.toString()), //Todas las variables pasadas a URL que no sean string, deben ser transformadas a string usando .toString()
      { //Body
        documento: params.documento,
        id: params.id
      },
      { //Axios Config
        headers: { //Headers personalizados
          Accept: 'application/json',
          Authorization: token.toString()
        }
      }
    );
  }

  async getCurriculum(idProfesional: String, token: String) { //Ejemplo de método GET

    //Retornamos directamente la respuesta, luego de recibirla
    return await axios.get<iApiResponse>(
      properties.API.BASE + properties.API.ENDPOINTS.CURRICULUM.replace('{id}', idProfesional.toString()), //Todas las variables pasadas a URL que no sean string, deben ser transformadas a string usando .toString()
      { //Axios Config
        headers: { //Headers personalizados
          Accept: 'application/json',
          Authorization: token.toString()
        }
      }
    );
  }

  async updateCurriculum(params: iCurriculum, idProfesional: String, token: String) { //Ejemplo de método PUT
    //Retornamos directamente la respuesta, luego de recibirla
    return await axios.post<iApiResponse>(
      properties.API.BASE + properties.API.ENDPOINTS.CURRICULUM.replace('{id}', idProfesional.toString()), //Todas las variables pasadas a URL que no sean string, deben ser transformadas a string usando .toString()
      { //Body
        documento: params.documento,
        id: params.id
      },
      { //Axios Config
        headers: { //Headers personalizados
          Accept: 'application/json',
          Authorization: token.toString()
        }
      }
    );
  }

  async getEducacion(idProfesional: String, token: String) { //Ejemplo de método GET

    //Retornamos directamente la respuesta, luego de recibirla
    return await axios.get<iApiResponse>(
      properties.API.BASE + properties.API.ENDPOINTS.EDUCACION.replace('{id}', idProfesional.toString()), //Todas las variables pasadas a URL que no sean string, deben ser transformadas a string usando .toString()
      { //Axios Config
        headers: { //Headers personalizados
          Accept: 'application/json',
          Authorization: token.toString()
        }
      }
    );
  }

  async updateEducacion(params: iEducacion, idProfesional: String, token: String) { //Ejemplo de método PUT
    //Retornamos directamente la respuesta, luego de recibirla
    return await axios.patch<iApiResponse>(
      properties.API.BASE + properties.API.ENDPOINTS.EDUCACION.replace('{id}', idProfesional.toString()), //Todas las variables pasadas a URL que no sean string, deben ser transformadas a string usando .toString()
      { //Body
        anio: params.anio,
        id: params.id
      },
      { //Axios Config
        headers: { //Headers personalizados
          Accept: 'application/json',
          Authorization: token.toString()
        }
      }
    );
  }

  async getExperiencia(idProfesional: String, token: String) { //Ejemplo de método GET

    //Retornamos directamente la respuesta, luego de recibirla
    return await axios.get<iApiResponse>(
      properties.API.BASE + properties.API.ENDPOINTS.EXPERIENCIA.replace('{id}', idProfesional.toString()), //Todas las variables pasadas a URL que no sean string, deben ser transformadas a string usando .toString()
      { //Axios Config
        headers: { //Headers personalizados
          Accept: 'application/json',
          Authorization: token.toString()
        }
      }
    );
  }

  async updateExperiencia(params: iExperiencia, idProfesional: String, token: String) { //Ejemplo de método PUT
    //Retornamos directamente la respuesta, luego de recibirla
    return await axios.patch<iApiResponse>(
      properties.API.BASE + properties.API.ENDPOINTS.EXPERIENCIA.replace('{id}', idProfesional.toString()), //Todas las variables pasadas a URL que no sean string, deben ser transformadas a string usando .toString()
      { //Body
        actual: params.actual,
        cargo: params.cargo,
        descripcion: params.descripcion,
        empresa: params.empresa,
        fechaFin: params.fechaFin,
        fechaInicio: params.fechaInicio,
        id: params.id,
        pais: params.pais
      },
      { //Axios Config
        headers: { //Headers personalizados
          Accept: 'application/json',
          Authorization: token.toString()
        }
      }
    );
  }


  async getInvestigacion(idProfesional: String, token: String) { //Ejemplo de método GET

    //Retornamos directamente la respuesta, luego de recibirla
    return await axios.get<iApiResponse>(
      properties.API.BASE + properties.API.ENDPOINTS.INVESTIGACION.replace('{id}', idProfesional.toString()), //Todas las variables pasadas a URL que no sean string, deben ser transformadas a string usando .toString()
      { //Axios Config
        headers: { //Headers personalizados
          Accept: 'application/json',
          Authorization: token.toString()
        }
      }
    );
  }

  async updateInvestigacion(params: iInvestigacion, idProfesional: String, token: String) { //Ejemplo de método PUT
    //Retornamos directamente la respuesta, luego de recibirla
    return await axios.patch<iApiResponse>(
      properties.API.BASE + properties.API.ENDPOINTS.INVESTIGACION.replace('{id}', idProfesional.toString()), //Todas las variables pasadas a URL que no sean string, deben ser transformadas a string usando .toString()
      { //Body
        descripcion: params.descripcion,
        documento: params.documento,
        fecha: params.fecha,
        id: params.id,
        pais: params.pais,
        titulo: params.titulo,
        url: params.url
      },
      { //Axios Config
        headers: { //Headers personalizados
          Accept: 'application/json',
          Authorization: token.toString()
        }
      }
    );
  }

  async getLogro(idProfesional: String, token: String) { //Ejemplo de método GET

    //Retornamos directamente la respuesta, luego de recibirla
    return await axios.get<iApiResponse>(
      properties.API.BASE + properties.API.ENDPOINTS.LOGRO.replace('{id}', idProfesional.toString()), //Todas las variables pasadas a URL que no sean string, deben ser transformadas a string usando .toString()
      { //Axios Config
        headers: { //Headers personalizados
          Accept: 'application/json',
          Authorization: token.toString()
        }
      }
    );
  }

  async updateLogro(params: iLogro, idProfesional: String, token: String) { //Ejemplo de método PUT
    //Retornamos directamente la respuesta, luego de recibirla
    return await axios.patch<iApiResponse>(
      properties.API.BASE + properties.API.ENDPOINTS.LOGRO.replace('{id}', idProfesional.toString()), //Todas las variables pasadas a URL que no sean string, deben ser transformadas a string usando .toString()
      { //Body
        descripcion: params.descripcion,
        documento: params.documento,
        titulo: params.titulo,
        url: params.url
      },
      { //Axios Config
        headers: { //Headers personalizados
          Accept: 'application/json',
          Authorization: token.toString()
        }
      }
    );
  }

  async updatePerfil(params: iPerfil, idProfesional: String, token: String) { //Ejemplo de método PUT
    //Retornamos directamente la respuesta, luego de recibirla
    return await axios.patch<iApiResponse>(
      properties.API.BASE + properties.API.ENDPOINTS.PERFIL.replace('{id}', idProfesional.toString()), //Todas las variables pasadas a URL que no sean string, deben ser transformadas a string usando .toString()
      { //Body
        apellido: params.apellido,
        ciudad: params.ciudad,
        habilidadesDuras: params.habilidadesDuras,
        nombre: params.nombre,
        pais: params.pais,
        titulo: params.titulo
      },
      { //Axios Config
        headers: { //Headers personalizados
          Accept: 'application/json',
          Authorization: token.toString()
        }
      }
    );
  }

  async addSeguidor(params: iSeguidor, idProfesional: String, token: String) { //Ejemplo de método PUT
    //Retornamos directamente la respuesta, luego de recibirla
    return await axios.post<iApiResponse>(
      properties.API.BASE + properties.API.ENDPOINTS.SEGUIDOR.replace('{id}', idProfesional.toString()), //Todas las variables pasadas a URL que no sean string, deben ser transformadas a string usando .toString()
      { //Body
        profesionalId: params.profesionalId
      },
      { //Axios Config
        headers: { //Headers personalizados
          Accept: 'application/json',
          Authorization: token.toString()
        }
      }
    );
  }

  async addImagenSobreMi(params: iSobreMiImagen, idProfesional: String, token: String) { //Ejemplo de método PUT
    //Retornamos directamente la respuesta, luego de recibirla
    return await axios.post<iApiResponse>(
      properties.API.BASE + properties.API.ENDPOINTS.IMAGEN_SOBRE_MI.replace('{id}', idProfesional.toString()), //Todas las variables pasadas a URL que no sean string, deben ser transformadas a string usando .toString()
      { //Body
        document: params.documento,
        id: params.id
      },
      { //Axios Config
        headers: { //Headers personalizados
          Accept: 'application/json',
          Authorization: token.toString()
        }
      }
    );
  }

  async addVisita(params: iVisita, idProfesional: String, token: String) { //Ejemplo de método PUT
    //Retornamos directamente la respuesta, luego de recibirla
    return await axios.post<iApiResponse>(
      properties.API.BASE + properties.API.ENDPOINTS.VISITA.replace('{id}', idProfesional.toString()), //Todas las variables pasadas a URL que no sean string, deben ser transformadas a string usando .toString()
      { //Body
        profesionalId: params.profesionalId
      },
      { //Axios Config
        headers: { //Headers personalizados
          Accept: 'application/json',
          Authorization: token.toString()
        }
      }
    );
  }

  async registerProfesional(params: iProfesionalRegister, idProfesional: String, token: String) { //Ejemplo de método PUT
    //Retornamos directamente la respuesta, luego de recibirla
    return await axios.post<iApiResponse>(
      properties.API.BASE + properties.API.ENDPOINTS.VISITA.replace('{id}', idProfesional.toString()), //Todas las variables pasadas a URL que no sean string, deben ser transformadas a string usando .toString()
      { //Body
        email: params.email,
        uid: params.uid,
        nombre: params.nombre
      },
      { //Axios Config
        headers: { //Headers personalizados
          Accept: 'application/json',
          Authorization: token.toString()
        }
      }
    );
  }
}
