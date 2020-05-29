// percorrer tds as tabelas do banco e deletar

const {sequelize} = require("../../src/app/models")


module.exports = ()=>{
    return Promise.all(Object.keys(sequelize.models).map(key=>{ // destroy eliminar algum tipo de dado
        return sequelize.models[key].destroy({truncate:true,force:true})
    }));
}

// colocar td  o return em uma unica Promise