const express = require('express')
const app = express()
const port = 15692

app.get('/', (req, res) =>
  res.send('Greetings from Heartland...')
)

app.listen(port, () =>
  console.log(`App running on port ${port}.`)
)
