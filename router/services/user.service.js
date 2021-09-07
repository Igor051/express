// service - те саме, що і models - це файли де виконується робота з базами даних

let data_base = ["user 1","user 2"]

module.exports = {
    get_users:()=>{
        return JSON.stringify(data_base)
    }
}
