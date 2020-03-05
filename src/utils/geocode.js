const request = require('request')

const geocode = (address, callback)=>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?proximity=-74.70850,40.78375&access_token=pk.eyJ1Ijoic3RhbmRhcmRkZW1vIiwiYSI6ImNrN2J4NWxraDAwZWMzb214Y3RlaTAzN2UifQ.yvTpc68jewBwLIg1mCFP-A'

    request( {url, json:true}, (error, {body})=>{
        if(error){
            callback('Unable to connect to location!',undefined)
        }else if(body.features.length === 0){
            callback('Unable to find location .Try another search', undefined)
        }else{
            callback(undefined, {
                latitude: body.features[0].center[0],
                longitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode