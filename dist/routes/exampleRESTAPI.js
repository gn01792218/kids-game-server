"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
let todos = [];
router.get('/', (req, res) => {
    res.status(200).json({ todos });
});
router.post('/todo', (req, res) => {
    const body = req.body;
    const newTodo = {
        id: new Date().toISOString(),
        text: body.text
    };
    todos.push(newTodo);
    res.status(201).json({ message: 'Added Todo', todo: newTodo, todos });
});
router.put('/todo/:todoId', (req, res) => {
    const toDoParams = req.params;
    const body = req.body;
    const toDoIndex = todos.findIndex(todo => todo.id === toDoParams.todoId);
    if (toDoIndex >= 0) {
        todos[toDoIndex] = {
            id: todos[toDoIndex].id,
            text: body.text
        };
        return res.status(200).json({ message: 'Update todo', todos });
    }
    res.status(404).json({ message: `Could not find todo for id:${toDoParams.todoId}` });
});
router.delete('/todo/:todoId', (req, res) => {
    todos = todos.filter(todo => todo.id !== req.params.todoId);
    res.status(200).json({ message: 'Delete todo', todos });
});
exports.default = router;
