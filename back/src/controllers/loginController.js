const {connection} = require('../database/db');
exports.logar = (req, res, next) =>{    
    const {login, senha} = req.body;
    const query = "SELECT login, senha FROM  agenda.usuario";
       
    try{
        connection.query(query, [login, senha], (err, result) => {
            if(err)console.log(err);
            return result;
        })
    }catch(e){
        console.log(e);
    }
    next();
}

exports.logado = (req, res) => {
    const {login} = req.params
    console.log("logado");


    const query = `SELECT id FROM agenda.usuario WHERE login = '${login}'`

    try{
        connection.query(query,(err, result)=> {
            if(err!==null) return console.log(err);
            result.map((userId) =>{
                console.log(userId);
                res.send(userId);
            })
            });
    }catch(e){
        console.log(e);
    }
};
