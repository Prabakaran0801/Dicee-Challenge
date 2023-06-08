// the randomnumber function 

const firstRandomNum = Math.floor(Math.random() * 6) + 1

// the dice image loding function for player1:

const player1DiceeImage = "images/dice" + firstRandomNum + ".png";

document.querySelectorAll('img')[0].setAttribute('src', player1DiceeImage);



const secondRandomNum = Math.floor(Math.random() * 6) + 1

// the dice image loding function for player2:

const player2DiceeImage = "images/dice" + secondRandomNum + ".png";

document.querySelectorAll('img')[1].setAttribute('src', player2DiceeImage);


// if conditions:

if(firstRandomNum > secondRandomNum){
    document.querySelector('h2').innerHTML='player1 is won'
} else if(firstRandomNum < secondRandomNum){
    document.querySelector('h2').innerHTML='player2 is won'
}else{
    document.querySelector('h2').innerHTML="It's draw! "
}

