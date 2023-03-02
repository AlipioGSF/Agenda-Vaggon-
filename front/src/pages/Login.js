import { Button, Paper, TextField } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/User";
import Axios from 'axios';

export function Login() {
  const { login, setLogin, senha, setSenha, setIsLogged, id, setId} =
    useContext(UserContext);

    const handleClickButton = async () => {
      console.log("logando...")
       Axios.post("http://localhost:5000/logar",{
        login: login,
        senha:senha
      }).then((response) => {
        console.log(response.data);
      });
      await Axios.get(`http://localhost:5000/logado/${login}`)
      .then(res => console.log(res));
      console.log(`O id do usuario é ${id}`);
      console.log("KKKKKKKKK");
  }


  return (
    <div
      style={{
        width: "100%",
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper elevation={3}>
        <div
          style={{
            width: "400px",
            height: "300px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            padding: "15px",
            borderRadius: "4px",
          }}
        >
          <h1 style={{ textAlign: "center" }}>LOGIN</h1>
          <hr />
          <TextField
            autoFocus
            margin="dense"
            id="login"
            label="Login"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setLogin(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="senha"
            label="Senha"
            type="password"
            fullWidth
            variant="standard"
            onChange={(e) => setSenha(e.target.value)}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Link
              to={`/agenda/?${login}`}
              style={{ textDecoration: "none", color: "inherit" }}
              onClick={() => setIsLogged(true)}
            >
              <Button variant="contained" color="info" onClick={handleClickButton}>
                Login
              </Button>
            </Link>
          </div>

          <p style={{ textAlign: "center" }}>
            Não possui cadastro? <Link to="/cadastro">Clique Aqui</Link>
          </p>
        </div>
      </Paper>
    </div>
  );

}