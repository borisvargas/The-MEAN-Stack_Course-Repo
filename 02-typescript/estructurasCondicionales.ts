const valorCondicional: boolean = true;
let respuesta:string = '';


if (valorCondicional === true) {
    respuesta = 'es verdad';
} else {
    respuesta = 'es mentira';
}

console.log(respuesta);

valorCondicional ? respuesta = 'es verdad' : respuesta = 'es mentira';

console.log(respuesta);