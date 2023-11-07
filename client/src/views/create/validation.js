// export default function validation(input) {
//     const errors = {}
    
//     if(input.name && !/^[a-zA-Z\s]+$/.test(input.name) ) errors.name  = "No se puede ingresar simbolos."

//     if(input.name.length > 30 ) errors.name = 'El name ingresado debe tener menos de 30 caracteres.'

//     if(input.released && !/^(0[1-9]|[1-2]\d|3[0-1])\/(0[1-9]|1[0-2])\/\d{2}$/.test(input.released) ) errors.released = "El formato debe ser: 01/01/23"

//     if(!/^[0-5](\.\d{1,2})?$/.test(input.rating )) errors.rating = "Ingresar un puntaje de 0 a 5 puntos"

//     if(input.imagen && !/^(ftp|http|https):\/\/[^ "]+$/.test(input.imagen) ) errors.imagen = "Ingersa una URL valida"

//     if(input.description.length > 255 ) errors.description = "Maximo: 255 caracteres."

//     return errors
// } 