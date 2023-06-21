import express from 'express'  //ts 中可以使用import語法
import bodyParser from 'body-parser'
import TodoExampleRoutes from './routes/exampleRESTAPI'
const app = express()
app.use(bodyParser.json)
app.use(TodoExampleRoutes)
app.listen(3000)