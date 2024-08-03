const model = require("../models/tododatabase");

module.exports.getToDo = async (req, res) => {
    const toDos = await model.find();
    res.send(toDos);
};

module.exports.saveToDo = (req, res) => {
    const { toDo } = req.body;
    model.create({ todo: toDo }) // Corrected field name
        .then(data => {
            console.log("Saved..");
            res.status(201).send(data);
        })
        .catch((err) => console.log(err));
};

module.exports.updateToDo = (req, res) => {
    const { id } = req.params;
    const { toDo } = req.body;
    model.findByIdAndUpdate(id, { todo: toDo }) // Corrected field name
        .then(() => {
            res.send("Updated");
        })
        .catch((err) => console.log(err));
};

module.exports.deleteToDo = (req, res) => {
    const { id } = req.params;
    model.findByIdAndDelete(id)
        .then(() => {
            res.send("Deleted");
        })
        .catch((err) => console.log(err));
};
