import { Component, OnInit } from '@angular/core';
import { iAcercaDeMi, iAvatar, iCarrera, iCurriculum, iEducacion } from 'src/app/interfaces/profesional.interface';

import { ExampleService } from 'src/app/services/example.service';
import { ProfesionalService } from 'src/app/services/profesional.service';

@Component({
  selector: 'page-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomePage implements OnInit {

  constructor(private profesionalService: ProfesionalService) { }

  async ngOnInit() {
    //Llamando al ejemplo GET
    this.profesionalService.getProfesional('1', 'token')
      .then((response) => {
        console.log('\n###########################'); //Recomiendo poner separadores para cada impresión de datos
        console.info('Response .getProfesional():'); //Además recomiendo poner un "título" para cada impresión también
        console.info(response.data); //Para obtener a la información directa del servicio, es necesario llamar al .data anidado del .data, para ver más detalles de la respuesta, solo es necesario un .data
        console.log('###########################\n'); //Y un separador de cierre
      })
      .catch((error) => {
        console.log('\n###########################');
        console.error('Error en el servicio exampleService.getProfesional(): ');
        console.error(error);
        console.log('###########################\n');
      });

    let acercaDeMi: iAcercaDeMi = {
      texto: 'texto'
    }
    this.profesionalService.acercaDeMi(acercaDeMi, '1', 'token')
      .then((response) => {
        console.log('\n###########################'); //Recomiendo poner separadores para cada impresión de datos
        console.info('Response .acercaDeMi():'); //Además recomiendo poner un "título" para cada impresión también
        console.info(response.data); //Para obtener a la información directa del servicio, es necesario llamar al .data anidado del .data, para ver más detalles de la respuesta, solo es necesario un .data
        console.log('###########################\n'); //Y un separador de cierre
      })
      .catch((error) => {
        console.log('\n###########################');
        console.error('Error en el servicio exampleService.acercaDeMi(): ');
        console.error(error);
        console.log('###########################\n');
      });

    let avatar: iAvatar = {
      documento: 'texto',
      id: 1
    }
    this.profesionalService.updateAvatar(avatar, '1', 'token')
      .then((response) => {
        console.log('\n###########################'); //Recomiendo poner separadores para cada impresión de datos
        console.info('Response .updateAvatar():'); //Además recomiendo poner un "título" para cada impresión también
        console.info(response.data); //Para obtener a la información directa del servicio, es necesario llamar al .data anidado del .data, para ver más detalles de la respuesta, solo es necesario un .data
        console.log('###########################\n'); //Y un separador de cierre
      })
      .catch((error) => {
        console.log('\n###########################');
        console.error('Error en el servicio exampleService.updateAvatar(): ');
        console.error(error);
        console.log('###########################\n');
      });

    this.profesionalService.getCurriculum('1', 'token')
      .then((response) => {
        console.log('\n###########################'); //Recomiendo poner separadores para cada impresión de datos
        console.info('Response .getCurriculum():'); //Además recomiendo poner un "título" para cada impresión también
        console.info(response.data); //Para obtener a la información directa del servicio, es necesario llamar al .data anidado del .data, para ver más detalles de la respuesta, solo es necesario un .data
        console.log('###########################\n'); //Y un separador de cierre
      })
      .catch((error) => {
        console.log('\n###########################');
        console.error('Error en el servicio exampleService.getCurriculum(): ');
        console.error(error);
        console.log('###########################\n');
      });


    let curriculum: iCurriculum = {
      documento: 'dGV4dG8=',
      id: 1
    }

    this.profesionalService.updateCurriculum(curriculum, '1', 'token')
      .then((response) => {
        console.log('\n###########################'); //Recomiendo poner separadores para cada impresión de datos
        console.info('Response .updateCurriculum():'); //Además recomiendo poner un "título" para cada impresión también
        console.info(response.data); //Para obtener a la información directa del servicio, es necesario llamar al .data anidado del .data, para ver más detalles de la respuesta, solo es necesario un .data
        console.log('###########################\n'); //Y un separador de cierre
      })
      .catch((error) => {
        console.log('\n###########################');
        console.error('Error en el servicio exampleService.updateCurriculum(): ');
        console.error(error);
        console.log('###########################\n');
      });

    this.profesionalService.getEducacion('1', 'token')
      .then((response) => {
        console.log('\n###########################'); //Recomiendo poner separadores para cada impresión de datos
        console.info('Response .getEducacion():'); //Además recomiendo poner un "título" para cada impresión también
        console.info(response.data); //Para obtener a la información directa del servicio, es necesario llamar al .data anidado del .data, para ver más detalles de la respuesta, solo es necesario un .data
        console.log('###########################\n'); //Y un separador de cierre
      })
      .catch((error) => {
        console.log('\n###########################');
        console.error('Error en el servicio exampleService.getEducacion(): ');
        console.error(error);
        console.log('###########################\n');
      });
    let carreraLet: iCarrera = {
      id: 1,
      nombre: 'texto',
      validado: false
    }
    let educacion: iEducacion = {
      id: 1,
      anio: 2,
      carrera: carreraLet,
      descripcion: "string",
      egresado: true,
      fechaFin: "2023-01-02",
      fechaInicio: "2023-01-02",
      intitucion: "string",
      pais: 0,
      titulado: true,
      actual: true
    }
    this.profesionalService.updateEducacion(educacion, '1', 'token')
      .then((response) => {
        console.log('\n###########################'); //Recomiendo poner separadores para cada impresión de datos
        console.info('Response .updateEducacion():'); //Además recomiendo poner un "título" para cada impresión también
        console.info(response.data); //Para obtener a la información directa del servicio, es necesario llamar al .data anidado del .data, para ver más detalles de la respuesta, solo es necesario un .data
        console.log('###########################\n'); //Y un separador de cierre
      })
      .catch((error) => {
        console.log('\n###########################');
        console.error('Error en el servicio exampleService.updateEducacion(): ');
        console.error(error);
        console.log('###########################\n');
      });


    //   //Para crear un objeto, se puede definir una variable
    //   let updateEmailParams: iUpdateEmailParams = {
    //     userId: 1,
    //     newEmail: 'a@b.c'
    //   };
    //   //Y luego se pasa al servicio, como en cualquier método
    //   this.exampleServices.updateEmail(updateEmailParams)
    //   .then((response) => {
    //     console.log('\n###########################');
    //     console.info('Response .updateEmail():');
    //     console.info(response.data.data);
    //     console.log('###########################\n');
    //   })
    //   .catch((error) => {
    //     console.log('\n###########################');
    //     console.error('Error en el servicio exampleService.updateEmail(): ');
    //     console.error(error);
    //     console.log('###########################\n');
    //   });
  }

}
