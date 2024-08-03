const { Router } = require("express");
const { getToDo, saveToDo, updateToDo, deleteToDo } = require("../controller/controller");

const router = Router();

router.get("/get", getToDo);
router.post("/save", saveToDo);
router.put("/update/:id", updateToDo);
router.delete("/delete/:id", deleteToDo);

module.exports = router;
