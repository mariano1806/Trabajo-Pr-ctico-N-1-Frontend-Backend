const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

//GET
app.get('/saludo/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  res.send(`Hola, ${nombre}!`);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
