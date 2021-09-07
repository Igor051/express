const request = require('supertest');
const app = require("./app")
const assert = require("assert");

it("test string", function (done) {
    request(app)
        .get("/")
        .expect("resp")
        .expect(200)
        .expect("Content-Length", "4")
        .end(done)
})

it("test object", function (done) {
    request(app)
        .get("/user")
        .expect(function (response) {
            assert.deepEqual(response.body, {name: "Vasya", age: 15})
        })
        .end(done)
})

it("test error", function (done) {
    request(app)
        .get("/error")
        .expect("bad request")
        .expect(400)
        .end(done)
})

it("test write", function (done) {
    request(app)
        .get("/write")
        .expect("write 1\nwrite 2\nwrite 3\n")
        .expect("Count-of-writes", "3")
        .end(done)
})

