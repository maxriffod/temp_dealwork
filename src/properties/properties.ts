export const properties = { //Recomiendo dejar todos los datos posibles aquí y no en duro
    enviroment: 'dev',

    API: {//Recomiendo fragmentar lo más posible las conexiones al back
        BASE: 'http://localhost:8080', //El dominio base (sin / al final)
        ENDPOINTS: { //Aquí colocar los endpoints iniciando con / para tenerlos ordenados y todos juntos en el servicio, se pueden agregar más detalles a las URLs de ser necesario
            PROFESIONAL: '/profesional/{id}',
            ACERCA_DE_MI: '/profesional/{id}/acerca-de-mi',
            CURRICULUM: '/profesional/{id}/curriculum',
            EDUCACION: '/profesional/{id}/educacion',
            EXPERIENCIA: '/profesional/{id}/experiecia-laboral',
            INVESTIGACION: '/profesional/{id}/investigacion',
            LOGRO: '/profesional/{id}/logro',
            PERFIL: '/profesional/{id}/perfil',
            SEGUIDOR: '/profesional/{id}/seguidor',
            IMAGEN_SOBRE_MI: '/profesional/{id}/sobre-mi-imagen',
            VISITA: '/profesional/{id}/visita',
            REGISTER: '/profesional/register',

        }
    }
}