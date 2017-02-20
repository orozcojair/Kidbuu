'user strict'
const function_name = '/Functions/PresentKidBuu'

const function_path = './VersionAlpha' + function_name
const function_event = function_path + '/event.json'

const lambda_fn = require(function_path)
//context is not really required outside of Lambda environment,
//but still needs to be passed
const context = {}
const event = require(function_event)

lambda_fn.handler(event, context, function (err, data) {
    if (err)
        console.log(JSON.stringify(err))
    if (data)
        console.log(JSON.stringify(data))
})
