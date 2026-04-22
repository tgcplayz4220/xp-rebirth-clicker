let xpButton = document.getElementById("xpButton")
let addXpButton = document.getElementById("addXpButton")
let rebirthButton = document.getElementById("rebirthButton")

let xpText = document.getElementById("xpText")
let addXpText = document.getElementById("addXpText")
let rebirthsText = document.getElementById("rebirthText")

let xp = 0
let rebirthMultiplier = 1
let rebirths = 0
let additionalXp = 1
let additionalXpCost = 50
let rebirthCost = 10000

function displayXP(){
    xpText.innerText = "You have " + xp + " XP."
}

function displayAdditionalXP(){
    addXpText.innerText = "Your click power per XP is " + additionalXp + "."
}

function displayRebirths(){
    rebirthsText.innerText = "You have " + rebirths + " rebirths, which gives you a x" + rebirthMultiplier + " bonus multiplier."
}

function updateUI(){
    displayXP()
    displayAdditionalXP()
    displayRebirths()
}

xpButton.addEventListener("click", function() {
    xp += additionalXp * rebirthMultiplier
    updateUI()
})

addXpButton.addEventListener("click", function() {
    if(xp >= additionalXpCost){
        xp = xp - additionalXpCost
        additionalXp = additionalXp + 1
        updateUI()
    }
})

rebirthButton.addEventListener("click", function() {
    if(xp >= rebirthCost){
        xp = xp - rebirthCost
        additionalXp = 1
        rebirthMultiplier = rebirthMultiplier + 1
        rebirths++
        updateUI()
    }
})
