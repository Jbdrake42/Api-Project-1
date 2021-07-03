

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
        let CastleInSkyimg = './Images/01-castleInTheSky.jpg'
        imgArr.push(CastleInSkyimg)
        let grave = './Images/02-GraveOfTheFirflies.jpg'
        imgArr.push(grave)
        let totoro = './Images/03-Totoro.jpg'
        imgArr.push(totoro)
        let kiki= './Images/04-KikisDelvivery.jpg'
        imgArr.push(kiki)
        let yesterday= './Images/05-OnlyYesterday.jpg'
        imgArr.push(yesterday)
        let porco= './Images/06-PorcoHires.jpg'
        imgArr.push(porco)
        let poko= './Images/07-pokoHires.jpg'
        imgArr.push(poko)
        let whisper= './Images/08-Whisper.jpg'
        imgArr.push(whisper)
        let monononoke= './Images/09-Mononoke.jpg'
        imgArr.push(monononoke)
        let yamada= './Images/10-yamada.jpg'
        imgArr.push(yamada)
        let spirited= './Images/11-Spirited.jpg'
        imgArr.push(spirited)
        let theCat= './Images/12-TheCatReturns.jpg'
        imgArr.push(theCat)
        let howls= './Images/13-HowlsMovingCastle.jpg'
        imgArr.push(howls)
        let talesFrom= './Images/14-TalesFromEarthsea.jpg'
        imgArr.push(talesFrom)
        let Ponyo= './Images/15-Ponyo.jpg'
        imgArr.push(Ponyo)
        let Arrietty= './Images/16-arrietty.jpg'
        imgArr.push(Arrietty)
        let fromUp= './Images/17-FromUpOnPoppyHill.jpg'
        imgArr.push(fromUp)
        let theTale= './Images/18-TheTaleOfThePrincessKaguya.jpg'
        imgArr.push(theTale)
        let theWind= './Images/19-TheWindRises.jpg'
        imgArr.push(theWind)
        let When= './Images/20-WhenMarnieWasThere.jpg'
        imgArr.push(When)
        let TheRed= './Images/21-RedTurtle.jpg'
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