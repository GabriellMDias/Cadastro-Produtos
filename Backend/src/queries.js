const Pool = require('pg').Pool
const pool = new Pool({
	  user: 'userdb',
	  host: 'localhost',
	  database: 'userdb',
	  password: '123456',
	  port: 5432,
})

const getProducts = (request, response) => {
	  pool.query('SELECT * FROM produto', (error, results) => {
		      if (error) {
			            throw error
			          }
		      response.status(200).json(results.rows)
		    })
}

const getProductById = (request, response) => {
	  const id = parseInt(request.params.id)

	  pool.query('SELECT * FROM produto WHERE id_produto = $1', [id], (error, results) => {
		      if (error) {
			            throw error
			          }
		      response.status(200).json(results.rows)
	})
}

const createProduct = (request, response) => {
	  const { descricao, stock, categoria } = request.body

	  pool.query('INSERT INTO produto (descricao, stock, categoria) VALUES ($1, $2, $3) RETURNING *', [descricao, stock, categoria], (error, results) => {
		      if (error) {
			            throw error
			          }
		      response.status(201).send(`Product added: ${descricao}`)
		    })
}

const updateProduct = (request, response) => {
	  const id = parseInt(request.params.id)
	  const { descricao, stock, categoria } = request.body

	  pool.query(
		      'UPDATE produto SET descricao = $1, stock = $2, categoria = $3 WHERE id_produto = $4',
		      [descricao, stock, categoria, id],
		      (error, results) => {
			            if (error) {
					            throw error
					          }
			            response.status(200).send(`Product modified with ID: ${id}`)
			          }
		    )
}

const deleteProduct = (request, response) => {
	  const id = parseInt(request.params.id)

	  pool.query('DELETE FROM produto WHERE id_produto = $1', [id], (error, results) => {
		      if (error) {
			            throw error
			          }
		      response.status(200).send(`Product deleted with ID: ${id}`)
		    })
}

module.exports = {
	  getProducts,
	  getProductById,
	  createProduct,
	  updateProduct,
	  deleteProduct,
}
