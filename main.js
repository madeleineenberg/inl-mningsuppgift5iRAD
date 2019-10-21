//Madeleine Enberg FEND19

const grid = document.querySelector(".grid")
const rowX = 25
const rowY = 25

function createBoard(x, y){
    for(let i = 0; i < x; i++){
        const row = document.createElement("div")
        grid.appendChild(row)
        for(let j = 0; j < y; j++){
            const button = document.createElement("button")
            row.appendChild(button)  
        }
    }
}

createBoard(rowX, rowY)

const reloadbtn = document.querySelector(".reload-btn")
reloadbtn.addEventListener("click", function(event){
    location.reload()
    count--
    counter.textContent = `${count} drag har gjorts`
    event.currentTarget.disabled = false

})



let turns = true
const player1 ="❌"
const player2 ="⭕️"
let count = 0
const counter = document.querySelector(".count")


const boardBtn = document.querySelectorAll("button")
for(let i = 0; i < boardBtn.length; i++){
    boardBtn[i].addEventListener("click", function(event){
        if(turns){
            event.currentTarget.textContent = player1
            document.querySelector(".playerturns").textContent = "Nu är det ⭕️ tur att spela" 
            count++
            counter.textContent = `${count} drag har gjorts`
            event.currentTarget.disabled = true
            turns = false
    
        }
    
        else{
            event.currentTarget.textContent = player2
            document.querySelector(".playerturns").textContent = "Nu är det ❌ tur att spela"
            count++
            counter.textContent = `${count} drag har gjorts`
            event.currentTarget.disabled = true
            turns = true
        }

    })
}

