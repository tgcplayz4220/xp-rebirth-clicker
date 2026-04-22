let xpButton = document.getElementById("xpButton")

let addXpButton = document.getElementById("addXpButton")
let addXpBy5Button = document.getElementById("addXpBy5Button")
let addXpBy20Button = document.getElementById("addXpBy20Button")
let addXpBy50Button = document.getElementById("addXpBy50Button")
let addXpBy100Button = document.getElementById("addXpBy100Button")
let addXpBy1000Button = document.getElementById("addXpBy1000Button")

let rebirthButton = document.getElementById("rebirthButton")
let rebirthButton2 = document.getElementById("rebirth2Button")
let rebirthButton5 = document.getElementById("rebirth5Button")
let rebirthButton10 = document.getElementById("rebirth10Button")

let autoclickButton = document.getElementById("autoclickerButton")

let xpText = document.getElementById("xpText")
let addXpText = document.getElementById("addXpText")
let rebirthsText = document.getElementById("rebirthText")

let xp = 0
let rebirthMultiplier = 1
let rebirths = 0
let additionalXp = 1

// Costs
let additionalXpCost = 50
let additionalXpCostBy5 = 500
let additionalXpCostBy20 = 2000
let additionalXpCostBy50 = 5000
let additionalXpCostBy100 = 10000
let additionalXpCostBy1000 = 100000

let rebirthCost = 10000
let rebirth2Cost = 25000
let rebirth5Cost = 75000
let rebirth10Cost = 250000

function displayXP(){
    xpText.innerText = "You have " + xp + " XP."
}

function displayAdditionalXP(){
    addXpText.innerText = "Your click power per XP is " + additionalXp + "."
}

function displayRebirths(){
    rebirthsText.innerText = "You have " + rebirths + " rebirths, multiplier x" + rebirthMultiplier
}

function updateUI(){
    displayXP()
    displayAdditionalXP()
    displayRebirths()
}

// Main click
xpButton.addEventListener("click", function() {
    xp += additionalXp * rebirthMultiplier
    updateUI()
})

// +1 XP
addXpButton.addEventListener("click", function() {
    if(xp >= additionalXpCost){
        xp -= additionalXpCost
        additionalXp += 1
        updateUI()
    } else{
        alert("Not enough XP! You need 50 XP to buy this!")
    }
})

// +5 XP
addXpBy5Button.addEventListener("click", function() {
    if(xp >= additionalXpCostBy5){
        xp -= additionalXpCostBy5
        additionalXp += 5
        updateUI()
    } else{
        alert("Not enough XP! You need 500 XP to buy this!")
    }
})

// +20 XP
addXpBy20Button.addEventListener("click", function() {
    if(xp >= additionalXpCostBy20){
        xp -= additionalXpCostBy20
        additionalXp += 20
        updateUI()
    } else{
        alert("Not enough XP! You need 2,000 XP to buy this!")
    }
})

// +50 XP
addXpBy50Button.addEventListener("click", function() {
    if(xp >= additionalXpCostBy50){
        xp -= additionalXpCostBy50
        additionalXp += 50
        updateUI()
    } else{
        alert("Not enough XP! You need 5,000 XP to buy this!")
    }
})

// +100 XP
addXpBy100Button.addEventListener("click", function() {
    if(xp >= additionalXpCostBy100){
        xp -= additionalXpCostBy100
        additionalXp += 100
        updateUI()
    } else{
        alert("Not enough XP! You need 10,000 XP to buy this!")
    }
})

// +1000 XP
addXpBy1000Button.addEventListener("click", function() {
    if(xp >= additionalXpCostBy1000){
        xp -= additionalXpCostBy1000
        additionalXp += 1000
        updateUI()
    } else{
        alert("Not enough XP! You need 100,000 XP to buy this!")
    }
})

// Rebirth
rebirthButton.addEventListener("click", function() {
    if(xp >= rebirthCost){
        xp = 0
        additionalXp = 1
        rebirthMultiplier += 1
        rebirths++
        updateUI()
    } else{
        alert("Not enough XP! You need 10,000 XP to buy this!")
    }
}) 

// Rebirth x2
rebirthButton2.addEventListener("click", function() {
    if(xp >= rebirth2Cost){
        xp = 0
        additionalXp = 1
        rebirthMultiplier += 2
        rebirths = rebirths + 2
        updateUI()
    } else{
        alert("Not enough XP! You need 25,000 XP to buy this!")
    }
}) 

// Rebirth x5
rebirthButton5.addEventListener("click", function() {
    if(xp >= rebirth5Cost){
        xp = 0
        additionalXp = 1
        rebirthMultiplier += 5
        rebirths = rebirths + 5
        updateUI()
    } else{
        alert("Not enough XP! You need 75,000 XP to buy this!")
    }
}) 

// Rebirth x10
rebirthButton10.addEventListener("click", function() {
    if(xp >= rebirth10Cost){
        xp = 0
        additionalXp = 1
        rebirthMultiplier += 10
        rebirths = rebirths + 10
        updateUI()
    } else{
        alert("Not enough XP! You need 250,000 XP to buy this!")
    }
}) 

// Standard Autoclicker
autoclickButton.addEventListener("click", function() {
    alert("Purchase failed, the autoclicker is coming soon!")
    updateUI()
}) 
