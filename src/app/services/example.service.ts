import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iApiResponse } from '../interfaces/apiResponse.interface';
import axios from 'axios'; //Librería para hacer las conexiones
import { properties } from 'src/properties/properties'; //Importante
import { iRegisterUserParams, iUpdateEmailParams } from '../interfaces/example.interface';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  constructor() { }

  async getProfesional() { //Ejemplo de método GET
    let ejemplo1: string = 'ejemplo';
    let ejemplo2: number = 2;

    //Retornamos directamente la respuesta, luego de recibirla
    return await axios.get<iApiResponse>(
      properties.API.BASE + properties.API.ENDPOINTS.PROFESIONAL.replace('{id}', '1'), //Todas las variables pasadas a URL que no sean string, deben ser transformadas a string usando .toString()
      { //Axios Config
        headers: { //Headers personalizados
          Accept: 'application/json'
        }
      }
    );
  }

  // async registerUser(params: iRegisterUserParams) { //Ejemplo de método PUT
  //   //Retornamos directamente la respuesta, luego de recibirla
  //   return await axios.post<iApiResponse>(
  //     properties.API.BASE + properties.API.ENDPOINTS.PROFESIONAL + '1', //Datos definidos en el archivo src/properties/properties.ts
  //     { //Body
  //       username: params.username,
  //       email: params.email,
  //       password: params.password
  //     },
  //     { //Axios Config
  //       headers: { //Headers personalizados
  //         Accept: 'application/json'
  //       }
  //     }
  //   );
  // }

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
