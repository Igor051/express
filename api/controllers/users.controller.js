const {get_users, create_user, update_user, delete_user} = require("../service/users.service")

module.exports = {
    get_users: (req, res) => {
        res.send(get_users())
    },
    create_user: (req, res) => {
        const users = create_user(req.body)
        res.send(users)
    },
    update_user: (req, res) => {
       update_user(req.body)
        res.send("user updated")
    },
    delete_user:(req,res)=>{
        delete_user(req.body.id)
        res.send("user deleted")
    }
}