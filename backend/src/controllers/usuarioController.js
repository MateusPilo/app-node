const Usuario = require('../models/users')();

module.exports = () => {

    // Funcão que busca um ou varios usuarios 
    let get = (data) => {

        return new Promise(async(resolve,reject) => {
            try {
                let result;
    
                if (data && data.id) {
                    result  = await Usuario.findById(data.id);
                } else {
                    result  = await Usuario.findAll();
                }

                resolve(result);
            } catch (error) {
                console.log(`Erro pessoa não indentificada`)
                reject(error.message);
            }
        });
    }

    return {
        get:get
    }
}