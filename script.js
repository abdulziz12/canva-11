



let input = document.querySelector(".input")
let btn = document.querySelector(".btn")
let info = document.querySelector(".info")
let appId ="4707df42c5530134bc27471740299a68";

btn.addEventListener("click", function(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
)
    .then(res => res.json())
    .then(data => {
        let card = document.createElement("div")
        let img = document.createElement("img")
        let h2 = document.createElement("h2")
        let p1 = document.createElement("p")
        let p2 = document.createElement("p")
        let p3 = document.createElement("p")
        let p4 = document.createElement("p")
        img.src = "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
        h2.innerHTML = "Joy nomi: "+data.name
        p1.innerHTML = "Havo harorati: " + (Math.round(data.main.temp - 273.15)) 
        p2.innerHTML = "Ob-havo: " +data.weather[0].main
        p3.innerHTML = "Namlik: " +data.main.humidity
        p4.innerHTML = "Shamol tezligi: " +data.wind.speed
card.append(img, h2,p1,p2,p3,p4)
info.appendChild(card)
        
    })


    for(let i = 0; i<10; i++){
        console.log("hello world");
    }
})