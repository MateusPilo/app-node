module.exports = () => {

    var express = require('express');
    var router = express.Router();

    var Usuario = require('../models/users')();
    var jwt  = require('jsonwebtoken');
    var bcrypt = require('bcryptjs');

    var config = require('../../config/default');

    let register = (data) => {

        return new Promise(async(resolve,reject)=>{
            try {
                
                data.password = bcrypt.hashSync(data.password,8);

                let result = await Usuario.create(data);
                console.log('User - created successfully');

                var token = await jwt.sign({id:result.id},config.secret,{
                    expiresIn:86400
                })

                
                result = {auth: true, token: token};

                resolve(result);

            } catch (error) {
                console.log(`User - unabled to create [${error.message}]`);   
                reject(error.message);
            }
        });
    }


    let me = (data) => {


        return new Promise(async(resolve,reject) => {
            try {
                
                var token = data['x-access-token'];
                

                if(!token)    
                    reject('Nenhum token fornecido');
                
                jwt.verify(token,config.secret,function(err,decodificado){
                    if(err)
                        reject('Falha ao autenticar token');

                    let result = Usuario.findById(decodificado.id);

                    resolve(result);
                });
                
            } catch (error) {
                console.log(`Unable to verifing token[${error}]`);
                reject(error.message);
            }
        });
    }


    let login = (data) => {
        return new Promise(async(resolve,reject)=>{
            try {
                let user = await Usuario.findOne({
                    where:{email:data.email}
                });

                if(!user)
                    reject('Nenhum usuário encontrado');
                var passwordIsValid = bcrypt.compareSync(data.password,user.password);

                if(!passwordIsValid)
                    reject('Senha invalida !');
                
                var token = jwt.sign({id:user.id},config.secret,{
                    expiresIn:86400
                })

                resolve({auth:true,token:token});
                
            } catch (error) {
                console.log(error.message);
                reject(erro.message);
            }
        })
    }

   

    return {register: register,me:me, login:login}

}
