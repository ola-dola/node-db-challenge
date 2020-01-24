const db = require('../data/db-config');

function find(table) {
    if (table === 'resources') {
        return db('resources');
    } else if ( table === 'projects') {
        return db('projects');
    } else {
        return null;
    }
}

module.exports = {
    find
}