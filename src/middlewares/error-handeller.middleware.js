
const errorHandeller = (error, req, res, next) => {
    if (error.status === 404) {
        return res.status(404).json({
            status: false,
            errors: {
                message: error.message
            }
        })
    }

    if (error.status === 400) {
        return res.status(400).json({
            status: false,
            errors: {
                message: "Bad request."
            }
        })
    }

    if (error.status === 401) {
        return res.status(401).json({
            status: false,
            errors: {
                message: "You have no permission."
            }
        })
    }

    return res.status(500).json({
        status: false,
        errors: {
            message: "Internal server error."
        }
    })
}


module.exports = { errorHandeller }