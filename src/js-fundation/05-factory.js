
//const { getUUID } = require('../plugins/get-id.plugin');
//const { getAge } = require('../plugins/get-age.plugin');

const { getAge, getUUID} = require('../plugins');


const buildPerson = ({name, birthdate}) => {

    return {
        id: getUUID(),
        name: name,
        birthdate: birthdate,
        age: getAge(birthdate)
    }
}

const obj = {name: 'John', birthdate: '2000-07-01'};

const john = buildPerson(obj);

console.table({john});