import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iApiResponse } from '../interfaces/apiResponse.interface';
import axios from 'axios'; //Librería para hacer las conexiones
import { properties } from 'src/properties/properties'; //Importante
import { iAcercaDeMi, iAvatar, iCurriculum, iEducacion } from '../interfaces/profesional.interface';


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
  // async updateEmail(params: iUpdateEmailParams) { //Ejemplo de método POST
  //   //Retornamos directamente la respuesta, luego de recibirla
  //   return await axios.post<iApiResponse>(
  //     properties.API.BASE + properties.API.ENDPOINTS.PROFILE,
  //     { //Body
  //       userId: params.userId,
  //       email: params.newEmail
  //     },
  //     { //Axios Config
  //       headers: { //Headers personalizados
  //         Accept: 'application/json'
  //       }
  //     }
  //   );
  // }

  // async deleteUser(userId: number) { //Ejemplo de método Delete
  //   //Retornamos directamente la respuesta, luego de recibirla
  //   return await axios.delete<iApiResponse>(
  //     properties.API.BASE + properties.API.ENDPOINTS.USER + '/' + userId.toString(), //Todas las variables pasadas a URL que no sean string, deben ser transformadas a string usando .toString()
  //     { //Axios Config
  //       headers: { //Headers personalizados
  //         Accept: 'application/json'
  //       }
  //     }
  //   );
  // }
}
