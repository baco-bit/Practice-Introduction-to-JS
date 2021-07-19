let guests = prompt('How many people are coming to your wedding?');

function getPrice(guests){
    let cost = 0;
    var number = parseInt(guests)
 if(number <= 50){
    return precio = 4000
 }else if (number <= 100){
    return precio = 10000
 }else if(number <= 200){
    return precio = 15000
 }else (number >= 200)
    return precio = 20000
 
}

let price = getPrice(guests);
console.log('Your wedding will cost '+price+' dollars');