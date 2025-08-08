const express = require("express");
const app = express();

// Middleware para redirecionar todas as requisições
app.use((req, res) => {
  // Constrói a nova URL com www, mantendo o caminho e os parâmetros
  const newUrl = "https://pazbibleschool.com" + req.originalUrl;
  res.redirect(301, newUrl); // Redireciona permanentemente com status 301
});

// Inicia o servidor na porta 3000 (ou qualquer porta que preferir)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
