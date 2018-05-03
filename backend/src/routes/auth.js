module.exports = () => {

    var express = require('express');
    var router = express.Router();
    var controller = require('../controllers/AuthController')();
    var VerifyToken = require('../middleware/middlewareJWT');
    
    let register = async(req,res,next) => {
        try {
            console.log(req.body);
            let result = await controller.register(req.body);
            res.json(result);
            
        } catch (error) {
            res.status(500).send({
                message:error
            });
        }

    }


    let me = async(req,res,next) => {
        try {
            
            let result = await controller.me(req.headers);
            res.json(result);
            
        } catch (error) {
            res.status(500).send({
                message:error
            });
        }

    }


    
    let login = async(req,res,next) => {
        try {
            
            let result = await controller.login(req.body);
            res.json(result);
            
        } catch (error) {
            res.status(500).send({
                message:error
            });
        }

    }


     
    let logout = async(req,res,next) => {
        try {
            
            let result = {auth:false,token:null};
            res.json(result);
            
        } catch (error) {
            res.status(500).send({
                message:error
            });
        }

    }


    router.post('/register',register);
    router.get('/me',VerifyToken,me);
    router.post('/login',login);
    router.get('/logout',logout);


    return router;
}