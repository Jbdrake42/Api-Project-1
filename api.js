

const url = "https://ghibliapi.herokuapp.com/films"

let movieChoice = document.querySelector('section')
let factBTN = document.querySelector('fact_BTN')

fact_BTN.addEventListener('click', fetchMovie) //when button is clicked it call the fetchMovie function

function fetchMovie(e){
    fetch(url)
    .then(function(results){
        console.log('ajkfkafhkh')
        return results.json()
       })
       .then(function(json){
           console.log(json)
         displayResults(json)
       })
       


}

function randomNumber(min, max){
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min
    return result
}


function displayResults(e){

    while (movieChoice.firstChild) { 
        movieChoice.removeChild(movieChoice.firstChild);}

        let random = randomNumber(0,20)
       
       
        let imgArr = []
        let CastleInSkyimg = './images/01-castleInTheSky.jpg'
        imgArr.push(CastleInSkyimg)
        let grave = './images/02-GraveOfTheFirflies.jpg'
        imgArr.push(grave)
        let totoro = './images/03-Totoro.jpg'
        imgArr.push(totoro)
        let kiki= './images/04-KikisDelvivery.jpg'
        imgArr.push(kiki)
        let yesterday= './images/05-OnlyYesterday.jpg'
        imgArr.push(yesterday)
        let porco= './images/06-PorcoHires.jpg'
        imgArr.push(porco)
        let poko= './images/07-pokoHires.jpg'
        imgArr.push(poko)
        let whisper= './images/08-Whisper.jpg'
        imgArr.push(whisper)
        let monononoke= './images/09-Mononoke.jpg'
        imgArr.push(monononoke)
        let yamada= './images/10-yamada.jpg'
        imgArr.push(yamada)
        let spirited= './images/11-Spirited.jpg'
        imgArr.push(spirited)
        let theCat= './images/12-TheCatReturns.jpg'
        imgArr.push(theCat)
        let howls= './images/13-HowlsMovingCastle.jpg'
        imgArr.push(howls)
        let talesFrom= './images/14-TalesFromEarthsea.jpg'
        imgArr.push(talesFrom)
        let Ponyo= './images/15-Ponyo.jpg'
        imgArr.push(Ponyo)
        let Arrietty= './images/16-arrietty.jpg'
        imgArr.push(Arrietty)
        let fromUp= './images/17-FromUpOnPoppyHill.jpg'
        imgArr.push(fromUp)
        let theTale= './images/18-TheTaleOfThePrincessKaguya.jpg'
        imgArr.push(theTale)
        let theWind= './images/19-TheWindRises.jpg'
        imgArr.push(theWind)
        let When= './images/20-WhenMarnieWasThere.jpg'
        imgArr.push(When)
        let TheRed= './images/21-RedTurtle.jpg'
        imgArr.push(TheRed)
let title = document.createElement('h1')
title.innerText = e[random].title

let image = document.createElement('img')

image.src = imgArr[random]

let director = document.createElement('h2')
director.innerHTML = `Director: ${e[random].director}`

let producer = document.createElement('h2')
producer.innerText =`Producer: ${e[random].producer}`

let releaseDate = document.createElement('h3')
releaseDate.innerText = `Release Date: ${e[random].release_date}`

let runningTime = document.createElement('h3')
runningTime.innerText =`Running Time: ${e[random].running_time} minutes`

let synopsis = document.createElement('h3')
synopsis.innerText = `Synopsis`

let description = document.createElement('p')
description.innerText = e[random].description

movieChoice.appendChild(title)
movieChoice.appendChild(image)
movieChoice.appendChild(director)
movieChoice.appendChild(producer)
movieChoice.appendChild(releaseDate)
movieChoice.appendChild(runningTime)
movieChoice.appendChild(synopsis)
movieChoice.appendChild(description)





}