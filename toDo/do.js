const fs = require('fs');

let works = [];

const create = (description) => {
    try {
        works = require('../db/data.json')
    } catch (error) {
        works = []
    }
    let data = {
        description,
        complete: false
    }
    works.push(data);
    saveDB();
    console.log('Saved');
    return data;
}

const saveDB = () => {
    let data = JSON.stringify(works);
    fs.writeFile('./db/data.json', data, (err) => {
        if (err) throw new Error('Dont saved');
    })

}

const read = () => {
    try {
        works = require('../db/data.json');
        return works;
    } catch (error) {
        console.log('There isnot records.');
        return;
    }
}

const update = (description, complete = true) => {
    works = require('../db/data.json');
    let index = works.findIndex(data => data.description === description)
    if (index >= 0) {
        works[index].complete = complete;
        saveDB();
        return true;
    }
    return false;
}

const remove = (description) => {
    works = require('../db/data.json');
    let index = works.findIndex(data => data.description === description)
    if (index >= 0) {
        works.splice(index, 1);
        saveDB()
        return true;
    }
    return false;

}

module.exports = {  
    create,
    read,
    update,
    remove  
}