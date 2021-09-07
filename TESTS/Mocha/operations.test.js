const assert = require("assert")  // стандартний Node.js модуль
const {multiply, AsyncMultiply} = require("./operations")

// Мocha надає функцію it(), котра 2 параметром приймає колбек,
// для тестування синхронних ф-й в колбек нічого не передаємо
it("should multiply 2 numbers", function () {
    let expected = 15
    assert.equal(15, multiply(3, 5))
})

// щоб протестувати асинхронну ф-ю треба передати done в колбек, і викликати його після тесту
it("should ASYNC multiply 2 numbers", function (done) {
    let expected = 15
    AsyncMultiply(3, 5).then((value) => {
        assert.equal(expected, value)
        done()
    })

})