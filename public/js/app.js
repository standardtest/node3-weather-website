console.log('Client side javascript file is loaded')



const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector("#massage-1")
const messageTwo = document.querySelector("#message-2")

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ""
    //console.log(location)
    fetch('http://localhost:3000/weather?address='+location).then((response) => {
    //console.log(response)
    response.json().then((data) =>{
        //console.log(data)
        if(data.error){
            //console.log(data.error)
            messageOne.textContent = data.error
           
        }else{
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast
        }
        
    })
})
})
