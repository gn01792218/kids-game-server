
import { Router } from 'express'
import { Todo } from '../modules/exampleModules'
const router = Router()

let todos:Todo[] = []

router.get('/',(req, res)=>{
    res.status(200).json({ todos })
})

router.post('/todo',(req, res) => {
    const newTodo:Todo = {
        id:crypto.randomUUID(),
        text: req.body.text
    } 

    todos.push(newTodo)

    res.status(201).json({message:'Added Todo',todo:newTodo,todos})
})

router.put('/todo/:todoId',(req, res) => {
    const toDoId = req.params.todoId
    const toDoIndex = todos.findIndex(todo => todo.id === toDoId)
    if( toDoIndex ) {
        todos[toDoIndex] = {
            id:todos[toDoIndex].id,
            text:req.body.text
        }
        return res.status(200).json({message:'Update todo', todos})
    }

    res.status(404).json({message:`Could not find todo for id:${toDoId}`})
})

router.delete('/todo/:todoId',(req, res) => {
    todos = todos.filter(todo => todo.id !== req.params.todoId)
    res.status(200).json({message:'Delete todo',todos})
})

export default router