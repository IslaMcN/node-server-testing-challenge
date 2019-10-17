const db = require('../data/dbConfig');
module.exports = {
    insert,
    update,
    remove,
    getAll,
    findById
};
async function insert(fam){
    const [id] = await db('McFields').insert(fam, 'id');
    return db('McFields')
    .where({id})
    .first();
}
async function update(id, change){
    return null;
}
function remove(id){
    return null;
}
function getAll(){
    return db('McFields');
}
function findById(id){
    return null;
}