import { CustomResource } from '../i18n';

const es: CustomResource = {
  translation: {
    join: '¡Únete al Mercado!',
    create: 'Crear Nuevo Juego',
    rankingTable: {
      title: 'Maestros del mercado',
    },
    warnings: {
      generic: 'Se ha producido un error.',
      unauthorized: 'Primero inicie sesión',
    },
    howto: {
      buttonName: 'Cómo Jugar',
      tutorial: `"Trader Week" es un juego donde debes interpretar los cambios en el mercado de acciones durante 7 turnos y desarrollar una estrategia para obtener el máximo beneficio. Crea una cuenta usando un apodo y una contraseña aleatorios, comenzando con un capital de 10,000. Únete a un juego ya existente o crea un nuevo mercado con un tema interesante. Después de unirte, espera a que el anfitrión inicie el juego. Los precios de las acciones de 5 empresas fluctuarán durante 7 turnos. ¡No olvides presionar el botón "Proceder con la Operación" para completar tus transacciones! Si estás listo para dominar el mercado, ¡empieza el juego ahora!`,
      close: 'Cerrar',
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
    historyTable: {
      title: 'Juegos pasados',
      view: 'Ver',
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
