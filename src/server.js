port = 3003

const express = require('express')
const db = require('./database/db')
const app = express()
const itemController = require('./controllers/item')

app.use(express.json())

db.sync(() => console.log(`Banco de dados conectado: ${process.env.DB_NAME}`));

app.listen(port, () => {
    console.log(`Servidor iniciado! Porta: ${port}`)
})

app.get('/items', (req, res, next) => {
    itemController.listItems().then((items) => res.send(items))
    .catch((err) => {
      console.log('Erro na consulta', JSON.stringify(err))
      return res.send(err)
    });
});


app.get('/items/:id', (req, res, next) => {
    itemController.getItem(req.params.id).then((items) => res.send(items))
    .catch((err) => {
      console.log('Erro na consulta', JSON.stringify(err))
      return res.send(err)
    });
})

app.delete('/items/:id', (req, res, next) => {
    
        itemController.deleteItem(req.params.id).then(() => res.send("Deletado"))
        .catch((err) => {
          console.log('Erro na consulta', JSON.stringify(err))
          return res.send(err)
        });
        
   
})

app.post('/items', (req, res, next) => {
    itemController.createItem({
        nome: req.body.nome,
        valor: req.body.valor
    })
    .then((item) => res.send(item))
    .catch((err) => {
      console.log('Erro no cadastro do item', JSON.stringify(err))
      return res.status(400).send(err)
    })
})