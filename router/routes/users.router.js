const {Router} = require("express")

const controller = require("../controllers/user.controller")
const middleware = require("../middlewares/user.middlewares")

const usersRouter = Router()

usersRouter.get("/:id", controller.getUserForId)
usersRouter.post("/", middleware.check_property_name, controller.createUser)

module.exports = usersRouter