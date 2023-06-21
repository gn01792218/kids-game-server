import express from 'express'  //ts 中可以使用import語法
import bodyParser from 'body-parser'
import TodoExampleRoutes from './routes/exampleRESTAPI'
const app = express()
const port = process.env.PORT || 3000
app.use(bodyParser.json())
app.use(TodoExampleRoutes)
app.listen(port,()=>console.log(`監聽${port}}`))