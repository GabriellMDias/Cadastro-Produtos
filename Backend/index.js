const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const db = require('./src/queries')

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Sistema de cadastro de produtos com Node.Js, Express and PostgreSQL' })
})

app.get('/produtos', db.getProducts)
app.get('/produtos/:id', db.getProductById)
app.post('/produtos', db.createProduct)
app.put('/produtos/:id', db.updateProduct)
app.delete('/produtos/:id', db.deleteProduct)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
