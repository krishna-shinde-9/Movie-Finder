
const searchBtn = document.querySelector("#searchBtn")
let moviePoster  = document.querySelector("#moviePoster")
let movieTitle  = document.querySelector("#movieTitle")
let movieYear  = document.querySelector("#movieYear")
let movieGenre  = document.querySelector("#movieGenre")
let moviePlot  = document.querySelector("#moviePlot")
let movieRating  = document.querySelector("#movieRating")
let textplot =  document.querySelector("#plot ")
let movieCard  = document.querySelector("#movieCard")
let apiKey ="a7657dc"



searchBtn.addEventListener("click",(e)=>{
let input  =  document.querySelector('#movieInput').value
if(input===""){
alert("enter valid data !! ")

}
 
let url = `http://www.omdbapi.com/?t=${input}&apikey=${apiKey}`
 
fetch(url)
.then((resolve)=> resolve.json())
.then((data)=>{

console.log(data);
 
moviePoster.src  = data.Poster	
movieTitle.textContent = `Movie Title : ${data.Title.toUpperCase()}`
movieYear.textContent =  ` 📅 Year:  ${data.Year }`
movieGenre.textContent = `🎭 Genre:  ${data.Genre}	`
moviePlot.textContent  = `${textplot.innerText} ${ data.Plot}`
movieRating.textContent =`⭐ IMDB Rating:  ${data.imdbRating} ⭐ `

}).catch((error)=> {
    
    movieCard.innerHTML = `<h1> MOVIE NOT FOUND "${input}" </h1>`
 
 
})
    e.stopPropagation()
})
 