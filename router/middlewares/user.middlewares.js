module.exports = {
    check_property_name: (req, res, next) => {
        try {
            if (req.body.name) {
                next()
            } else {
                throw new Error("no property \"name\" at request body")
            }
        } catch (e) {
            res.status(400).end(e.message)
        }

    }
}