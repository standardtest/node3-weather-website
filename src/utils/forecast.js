const request = require('request')
const forecast = (latitude, longitude, callback) => {
 const url = 'https://api.darksky.net/forecast/36c45dab8ab06b35d47c646b17ca8929/'+ latitude + ',' + longitude

 request({url, json:true}, (error, {body})=>{
    if(error){
        callback("Unable to connect to weather server", undefined)
    }else if(body.error){
        callback('Unable to find Location', undefined)
    }else{
        callback(undefined, body.daily.data[0].summary + 'It is currently '+ body.currently.temperature + ' degrees out. There is a ' + body.currently.precipProbability + ' % chance of Rain')
    }
 })
}

module.exports = forecast