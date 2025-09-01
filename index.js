// Point d'entrée principal de l'application.

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Bienvenue à la Gestion d&#39;Inventaire Legacy!');
});

app.listen(port, () => {
  console.log(`Serveur à l&#39;écoute sur http://localhost:${port}`);
});