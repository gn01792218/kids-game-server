import express from 'express'  //ts 中可以使用import語法
import bodyParser from 'body-parser'
import cors from 'cors'
import openaiRoutes from './routes/openAI'
// import TodoExampleRoutes from './routes/exampleRESTAPI'
const app = express()
const port = process.env.PORT || 3000
app.use(cors())
app.use(bodyParser.json())
app.use('/openai',openaiRoutes)
// app.use(TodoExampleRoutes)
app.listen(port,()=>console.log(`監聽${port}}`))