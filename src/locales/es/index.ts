import { CustomResource } from '../i18n';

const es: CustomResource = {
  translation: {
    join: '¡Únete al Mercado!',
    create: 'Crear Nuevo Juego',
    warnings: {
      generic: 'Se ha producido un error.',
      unauthorized: 'Primero inicie sesión',
    },
    supportModal: {
      title: 'Apoya el mercado',
      message: 'Este juego está respaldado por la comunidad ❤️',
      cancel: 'Solo llévame al juego',
    },
    signinModal: {
      title: '¡Inicia sesión / regístrate como trader!',
      nickname: 'apodo', // placeholder para el campo de apodo
      password: 'contraseña', // placeholder para el campo de contraseña
      confirm: '¡Comienza a Operar!',
    },

    gameTable: {
      theme: 'Tema', // del juego
      users: 'Usuarios', // usuarios
      join: 'Unirse', // etiqueta del botón para Unirse al Juego
    },

    createModal: {
      title: '¡Ingresa un tema para el juego!',
      message: 'Puede tardar hasta 2 minutos en configurar un nuevo mercado',
      confirm: 'Crear un Juego',
      error: 'No se puede crear el juego ahora. Por favor, inténtalo de nuevo en unos minutos.',
    },

    game: {
      participants: 'Participantes',
      leave: 'Salir', // nombre del botón para salir del juego
      start: '¡Empezar!',
      wait: 'Espera...',
      deposit: 'Depósito', // El monto de dinero disponible para usar en inversiones
      trade: 'Operar', // etiqueta del botón para realizar una operación
      leaveModal: {
        title: '¿Salir del Juego?',
        message: '¿Realmente quieres salir del juego?',
        cancel: 'En realidad, no',
        confirm: 'Sí',
        error: 'No se pudo salir de la sala...',
      },
      startModal: {
        title: '¿Comenzar el Juego?',
        message: 'Esto iniciará el mercado de inmediato',
        errorTitle: 'No se pudo iniciar el mercado',
        errorMessage: 'Inténtalo de nuevo más tarde...',
      },
      tradeModal: {
        title: '¿Realizar operación?',
        confirm: 'Listo para ir',
        cancel: 'Espera...',
        error: 'No se pudo realizar la operación...',
      },
      eventCover: {
        title: '¡El Mercado está Cerrado!',
        message: 'Sigue operando más',
      },
    },
  },
};

export default es;
