import Calendario from "../components/Calendario";
import { Atividade } from "../components/Atividade/Atividade";
import { CriarAtividade } from "../components/CriarAtividade";
import {useState} from 'react';

export function Agenda() {

  return (
    <>
      <div
        style={{
          display: "grid",
          justifyContent: "center",
          gridTemplateColumns: "20vw 40vw",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "93vh",
            // background: "#123",
            paddingTop: "1.1px",
            display: "grid",
            gridTemplateRows: "10vh auto",
            justifyContent: "center",
            borderRight: "2px solid #D3D3D3",
          }}
        >
          <CriarAtividade />
          <Calendario />
        </div>
        <div
          style={{
            width: "100%",
            height: "93vh",
            // background: "#439",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            overflowY: "scroll",
          }}
        >
          <Atividade />
        </div>
      </div>
    </>
  );
}
