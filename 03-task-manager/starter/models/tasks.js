const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name: String,
    completed: Boolean,
})

// the first arguement is the singular name of the collection your model is for
// so the collection is going to be a collection of tasks
const Task = mongoose.model('Task', TaskSchema)
module.exports = Task