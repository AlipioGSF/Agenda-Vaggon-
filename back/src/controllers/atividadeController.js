const {connection} = require('../database/db');

exports.criarAtividade = (req, res, next) =>{
    const {nome, dataInicio, dataTermino, status, userId} = req.body;

    const insert = "INSERT INTO atividade (nome, dataInicio, dataTermino, status, usuarioId) VALUES (?,?,?,?,?)";
    const selectUser = `SELECT id FROM agenda.usuario WHERE id = ${userId}`;


    try{
        const user = connection.query(selectUser, (err, result) => {if(err) console.log(err)});
        console.log(user.login);
        connection.query(insert,[nome, dataInicio, dataTermino, status, userId], (err, result) => {
            if(userId !== user.id) {
                console.log("Usuário não existe, não foi possivel criar a atividade");
                return;     
            }else{
                console.log("atividade criada com sucesso");
            }
        });


    }catch(e){
        console.log(e)
    }

    next();

}