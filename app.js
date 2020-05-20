const { argv } = require('./config/yargs');
const toDo = require('./toDo/do');

switch (argv._[0]) {
    case 'create':
        console.log(toDo.create(argv.description)); break;
    case 'read':
        if (toDo.read()) {
            for (const item of toDo.read()) {
                console.log(`${item.description} \nState: ${item.complete}\n`);
            }
        }
        ; break;
    case 'update':
        if (toDo.update(argv.description, argv.complete)) {
            console.log('Updated!');
        } else {
            console.log('Not update!');
        }
        ; break;
    case 'remove':
        if (toDo.remove(argv.description)) {
            console.log('Deleted!');
        } else {
            console.log('Not deleted');
        }
        ; break;
    default:
        console.log('Doesnt exist!');
}