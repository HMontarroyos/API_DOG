//https://dog.ceo/api/breeds/image/random

var bt = document.querySelector('.button')
var image = document.querySelector('.photo')

bt.addEventListener('click', function () {


    var url = "https://dog.ceo/api/breeds/image/random"

    fetch(url)
        .then(result => result.json())
        .then(jsonObject => {
            console.log(jsonObject)
            image.src = jsonObject.message
        })
        .catch(error => console.log(error))

})

