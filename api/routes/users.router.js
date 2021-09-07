const {Router} = require("express")
const {get_users, create_user, update_user, delete_user} = require("../controllers/users.controller")
const {is_request_body, check_user_validity, check_user_id} = require("../middlewares/users.middlewares")

const usersRouter = Router()

usersRouter.get("/users", get_users)
usersRouter.post("/users", is_request_body, check_user_validity, create_user)
usersRouter.put("/users", is_request_body, check_user_validity, check_user_id, update_user)
usersRouter.put("/users/delete", check_user_id, delete_user)

module.exports = usersRouter
