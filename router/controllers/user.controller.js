const user_service = require("../services/user.service")

// в контроллері прописуємо логіку, що є в колбеку (фінальному обробнику)
module.exports = {
    getUserForId: (req, res) => {
        const users = user_service.get_users()
        res.end(users)
    },

    createUser: (req, res) => {
        res.end("user created")
    }
}