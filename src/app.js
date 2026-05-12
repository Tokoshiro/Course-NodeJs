
//sintaxis de importación tradicional de módulos
const {getUserById} = require('./js-fundation/04-arrow');

//require('./js-fundation/02-destructuring');
//require('./js-fundation/03-callbacks');

//console.log(emailTEmplate);

const id = 1;

getUserById( id, (error, user) => {
    
    if (error) {
        throw new Error(error);
    }

    console.table({user});

} );