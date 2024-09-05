const token = false 

function verify_user(request, response, next) {
    if(token) {
        next()
    } else {
        response.status(401).send('Unauthorized')
    }
}
module.exports = verify_user