const express = require("express")
const { v4: uuidv4 } = require("uuid")

const customers = []
const app = express()

app.use(express.json())

app.post("/account", (req, res) => {
  const { cpf, nome } = req.body
  const id = uuidv4()

  customers.push({
    cpf, 
    nome,
    id,
    statement: []
  })

  return res.status(201).send()
})

app.listen(3333, () => console.log("Server is Running"))