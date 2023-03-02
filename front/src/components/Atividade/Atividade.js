import "./Atividade.scss";

export function Atividade() {
  return (
    <div className="atividade">
      <div className="atividadeHeader">
        <p>ID</p>
        <p className="nomeAtividade">NOME</p>
      </div>
      <div className="conteudo">
        <p>Descrição</p>
        <li id="status">Status</li>
      </div>
    </div>
  );
}
