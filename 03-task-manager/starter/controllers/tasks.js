const getAllTasks = (req,res) => {
    res.send('get all tasks')
}

// sending json data and getting back that json data
const createTask = (req,res) => {
    res.json(req.body)
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