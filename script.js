let player={
    name:"pradeep",
    chips:200
}

let cards=[]
let sum=0
let hasBlackJack=false
let isAlive=false
let message=""

let messageEL=document.getElementById("message-el")
let sumEL=document.getElementById("sum-el")
let cardsEL=document.getElementById("cards-el")
let playerEl=document.getElementById("player-el")
playerEl.textContent=player.name+" $ "+player.chips
function getRandomCard(){
    let randomnum=Math.floor(Math.random()*13)+1
    if(randomnum>10){
        return 10
    }else if(randomnum ===1){
        return 11
    }else{
        return randomnum
    }
}

function startgame(){
    isAlive=true
    let num1=getRandomCard()
    let num2=getRandomCard()
    cards=[num1,num2]
    sum=num1 + num2
    rendergame()
}

function rendergame(){ 

    cardsEL.textContent="Cards :- "
    for(let i=0;i<cards.length;i++) {
        cardsEL.textContent +=cards[i] + " "
    }

    sumEL.textContent="Sum :- "+sum
    
    if(sum<21){
        message="Do you want to take new card"
    }else if(sum==21){ 
        message="You'Ve won"
        hasBlackJack=true  
    }else{
        message="You are out of the game"
        isAlive=false
    }   
    // console.log(hasBlackJack) 
    // console.log(isAlive)
    messageEL.textContent=message
}

function newcard(){
    if(isAlive=== true && hasBlackJack==false){
        let card=getRandomCard()
        sum+=card
        cards.push(card)
        console.log(cards)
        rendergame()

    }
    
}