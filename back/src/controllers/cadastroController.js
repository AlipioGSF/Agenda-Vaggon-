const {connection} = require('../database/db');



exports.cadastrar = (req, res, next) => {
    const {login, senha} = req.body;
    console.log("check");

    let query = "INSERT INTO usuario (login, senha) VALUES (?, ?)"

    try{
        connection.query(query,[login, senha], (err, result) => {
            if(err !==null){
                console.log(err);
            }
            console.log("Usuario "+ login +" cadastrado");
        });
    }catch(e){
        console.log(e);
    }

    next();
};

exports.cadastrado = (req,res,next) => {
    const query = `SELECT id FROM agenda.usuario WHERE login ='${user}'` 

    try{
        connection.query(query, (err, result) => {
            if(err !== null) console.log(err);
            else{
                result.map((userId) =>{
                    if(userId){
                        return userId.id
                    }else{
                        return null;
                    }
                })
            }
        }) 

    }catch(e){
        console.log(e);
    }
}