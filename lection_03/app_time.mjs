

import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/hours', (req, res) => {
  res.send(new Date().getHours().toString())
})

app.get('/minutes', (req, res) => {
  res.send(new Date().getMinutes().toString())
})

app.get('/seconds', (req, res) => {
  res.send(new Date().getSeconds().toString())
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})