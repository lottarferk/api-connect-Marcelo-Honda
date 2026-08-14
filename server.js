const express = require('express')
const app = express()
const PORT = 3000

app.use(express.json())

let usuarios = []
let nextId = 1

app.post('/api/usuarios', (req, res) => {
const { nome, email } = req.body

if (!nome || !email) {
return res.status(400).json({ error: { message: 'Nome e email são obrigatórios' } })
}

const novoUsuario = { id: nextId, nome, email }
usuarios.push(novoUsuario)
nextId++

return res.status(201).json({ data: novoUsuario })
})

app.get('/api/usuarios', (req, res) => {
return res.status(200).json({ data: usuarios })
})

app.get('/api/usuarios/:id', (req, res) => {
const id = parseInt(req.params.id)
const usuario = usuarios.find(u => u.id === id)

if (!usuario) {
return res.status(404).json({ error: { message: 'Usuário não encontrado' } })
}

return res.status(200).json({ data: usuario })
})

app.listen(PORT, () => {
console.log('Servidor rodando na porta ' + PORT)
})