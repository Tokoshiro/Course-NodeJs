

const emailTEmplate = 
`<div>
    <h1>Hola {{name}}</h1>
    <p>Gracias por registrarte en nuestro sitio web. Estamos emocionados de tenerte como parte de nuestra comunidad.</p>
    <p>Para completar tu registro, por favor haz clic en el siguiente enlace:</p>
</div>`;

//mandamos nuesro template a app.js para que lo pueda usar
module.exports = {
    emailTEmplate
}
