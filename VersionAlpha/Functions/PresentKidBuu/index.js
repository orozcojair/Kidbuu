/*
If you are using Lambda functions in conjunction with API Gateway
you can use my 'Done' module to make sure that your response has 
the approriate headers for CORS.
Uncomment the lines below
 */
// const d = require('./Done').done

exports.handler = (event, context, callback) => {
    var kidBuu = {
        Race: 'Majin',
        Gender: 'Male',
        Age: 'Unknown',
        BattleCry: '"Me Buu, kill you!"'
    }

    // if (err) {
    //     d({ 'errorMessage': 'This function has failed' }, null, callback)
    // } else {
    //     d(null, data, callback)
    // }

    callback(null, {
        kidBuu
    })
}