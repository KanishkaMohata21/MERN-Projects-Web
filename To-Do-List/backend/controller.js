const schema = require('./schema')

module.exports.getTasks=async(req,res)=>{
    const tasks = await schema.find()
    res.send(tasks)
}

module.exports.saveTasks=(req,res)=>{
    const {tasks} = req.body
    schema.create({tasks})
    .then(data=>{
        console.log("Saved")
        res.status(201).send(data)
    })
    .catch((e)=>console.log(e))
}

module.exports.updateTasks=(req,res)=>{
    const {id} = req.params
    const {tasks} = req.body
    schema.findByIdAndUpdate(id,{tasks})
    .then(()=>{
        res.send("Updated Successfully")
    })
    .catch((e)=>console.log(e))
}

module.exports.deleteTasks=(req,res)=>{
    const {id} = req.params
    schema.findByIdAndDelete(id)
    .then(()=>{
        res.send("Deleted Successfully")
    })
    .catch((e)=>console.log(e))
}