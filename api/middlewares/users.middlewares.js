const {check_user_id} = require("../service/users.service")

module.exports = {
    is_request_body: (req, res, next) => {
        try {
            if (Object.keys(req.body).length === 0) {
                throw new Error("request body is missing")
            } else {
                next()
            }
        } catch (e) {
            res.sendStatus(400)
        }
    },
    check_user_validity: (req, res, next) => {
        try {
            const name = req.body.name
            const age = req.body.age
            if (typeof name !== "string" || typeof age !== "number") {
                throw new Error("bad request")
            } else if (name.trim().length === 0) {
                throw new Error("bad request")
            } else {
                next()
            }
        } catch (e) {
            res.sendStatus(400)
        }
    },
    check_user_id: (req, res, next) => {
        try {
            if (check_user_id(req.body.id)) {
                next()
            }else{
                throw new Error("bad user id")
            }
        } catch (e) {
            res.sendStatus(400)
        }

    }

}