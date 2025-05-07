import React from "react";

const NotFoundPage = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404</h1>
      <p>Página não encontrada</p>
      <a href="/" style={{ color: "blue", textDecoration: "underline" }}>
        Voltar para a página inicial
      </a>
    </div>
  );
};

export default NotFoundPage;
