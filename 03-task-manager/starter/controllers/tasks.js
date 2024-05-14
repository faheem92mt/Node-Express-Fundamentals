// Model (MVC) --- schema
const Task = require('../models/tasks')

const getAllTasks = (req,res) => {
    res.send('get all tasks')
}

// sending json data and getting back that json data
const createTask = async (req,res) => {
    const task = await Task.create(req.body)
    res.status(201).json({task})
}

// getting back the :id from the url
const getTask = (req,res) => {
    res.json({id: req.params.id})
}

const updateTask = (req,res) => {
    res.send('update task')
}

const deleteTask = (req,res) => {
    res.send('delete task')
}

module.exports = {
 getAllTasks,
 createTask,
 getTask,
 updateTask,
 deleteTask   
}