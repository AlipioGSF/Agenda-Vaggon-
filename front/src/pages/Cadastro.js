import { Button, Paper, TextField } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/User";
import Axios from 'axios';

export function Cadastro() {
  const { login, setLogin, senha, setSenha, setIsLogged } =
    useContext(UserContext);

    const handleClickButton =  () => {
        Axios.post("http://localhost:5000/cadastrar",{
          login: login,
          senha:senha
        }).then((response) => {
          console.log(response);
        });
        setIsLogged(true);
       
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
          <h1 style={{ textAlign: "center" }}>CADASTRE-SE</h1>
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
              to="/agenda"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button
                variant="contained"
                color="info"
                onClick={handleClickButton}
              >
                Cadastrar
              </Button>
            </Link>
          </div>

          <p style={{ textAlign: "center" }}>
            Já possui cadastro? <Link to="/login">Clique Aqui</Link>
          </p>
        </div>
      </Paper>
    </div>
  );
}
