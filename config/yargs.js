const optC = {
    description: {
        alias: 'd',
        demand: true
    }
}

const optU = {
    description: {
        alias: 'd',
        demand: true
    },
    complete: {
        alias: 'c',
        default: true
    }
}


const argv = require('yargs').command('create', 'Create a work', optC).command('update', 'Update the work', optU).command('remove','Remove a work', optC).help().argv;

module.exports = {
    argv
}



