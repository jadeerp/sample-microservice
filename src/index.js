const express = require('express');
const app = express();

const port = process.env.PORT || 3000
const host = process.env.HOST || '0.0.0.0'

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res, next) => {
  res.status(200).send({ status: 'UP' })
})

app.listen(port, host, () => {
  console.log("Sample Microservice is running on ", port)
});