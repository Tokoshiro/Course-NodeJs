
const { getUUID, getAge } = require('./plugins');

//sintaxis de importación tradicional de módulos
//const {getUserById} = require('./js-fundation/04-arrow');

//require('./js-fundation/02-destructuring');
//require('./js-fundation/03-callbacks');


const getPokemonById = require('./js-fundation/06-promises');

getPokemonById(1)
    .then( (pokemon) => console.log({pokemon}))
    .catch( (error) => console.log({'Por favor intenta de nuevo': error.message}))
    .finally( () => console.log('Proceso terminado') );



// ! referencia a la función factory y uso 
/*const { buildMakePerson } = require('./js-fundation/05-factory');


const makePerson =buildMakePerson({ getUUID, getAge});



const obj = {name: 'John', birthdate: '2000-07-01'};

const john = makePerson(obj);

console.table({john});*/