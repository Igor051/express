const fs = require("fs")
const path = require("path")

module.exports = {
    get_users: () => {
        return fs.readFileSync(path.join(process.cwd(), "db", "users.json"), "utf8")
    },
    create_user: (user) => {
        const json_obj = fs.readFileSync(path.join(process.cwd(), "db", "users.json"), "utf8")
        const users = JSON.parse(json_obj)
        const users_id = users.map(user => user.id)
        let max_id = Math.max.apply(Math, users_id)
        users.push({
            id: max_id + 1,
            name: user.name,
            age: user.age
        })
        fs.writeFileSync(path.join(process.cwd(), "db", "users.json"), JSON.stringify(users))
        return users
    },
    check_user_id(id) {
        const json_obj = fs.readFileSync(path.join(process.cwd(), "db", "users.json"), "utf8")
        const users = JSON.parse(json_obj)
        return users.find((item) => {
            return item.id === id
        })
    },
    update_user(user) {
        const json_obj = fs.readFileSync(path.join(process.cwd(), "db", "users.json"), "utf8")
        const users = JSON.parse(json_obj)
        for (let i = 0; i < users.length; i++) {
            if (users[i].id === user.id) {
                users[i] = user
            }
        }
        fs.writeFileSync(path.join(process.cwd(), "db", "users.json"), JSON.stringify(users))
    },
    delete_user(id) {
        const json_obj = fs.readFileSync(path.join(process.cwd(), "db", "users.json"), "utf8")
        const users = JSON.parse(json_obj)
        const users_after_deleted = users.filter((item) => {
            console.log(item.id);
            console.log(id);
            return item.id !== id
        })
        fs.writeFileSync(path.join(process.cwd(), "db", "users.json"), JSON.stringify(users_after_deleted))
    }
}