// Modulo responsavel por conter todas as rotas Relacionadas a pessoa.
module.exports = () => {

    // Requisição para a instancia do express
    const express = require('express');
    // Objeto de Rotas do express
    const router = express.Router();
    // Objeto de controller onde fica toda a parte de busca e inserção ao banco de dados
    const controller = require('../controllers/usuarioController')();

    
    /**
     * Função relacionada com o verbo GET de pessoas
     * @param {Object} req 
     * @param {*} res 
     * @param {*} next 
     * @return Todas as pessoas cadastradas
     */
    let get = async(req, res, next) =>{

        try {

            let result =  await controller.get();
            res.json(result);

        } catch (error) {
            res.status(500).send({
                 message:error 
                });
        }

    }

    
    /**
     * Função relacionada ao verbo GET de pessoas pelo ID
     * @param {Object} req 
     * @param {*} res 
     * @param {*} next
     * @return Retorna uma pessoa com base no id da mesma 
     */
    let getById = async(req,res,next) => {
        try {
            let result = await controller.get(req.params);
            res.json(result);
            
        } catch (error) {
            res.status(500).send({
                message:error
            })
        }
    }


    let post = async(req,res,next) => {
        try {
            
        } catch (error) {
            
        }
    }

    router.get('/',get);
    router.get('/:id', getById);
    router.post('/',post);

    return router;
}