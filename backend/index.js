const connectToMongo=require('./db');
connectToMongo();
const express = require('express')
const app = express(  )
const port = 3000
app.use(express.json()); //for using request.body
///available routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})
