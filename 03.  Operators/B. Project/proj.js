//Smart Shop Billing System

let namei = prompt("please enter Your name")
namei = namei.toUpperCase()
console.log(`This is your name: ${namei}`)

let mem;

if (namei == "ANIKET" || namei == "SANJAY" || namei == "DHOK") {
    console.log(`Your are the member of a shop: ${namei}`)
    console.log("You get discount 30 rupes for bigger than 300 rupes")
    console.log("Cuppon code: SAVE30")
    mem = "yes"
} else {
    console.log(`Your are not a member of shop`)
    console.log("There is no disscont on it")
    mem = "no"
}

let item = prompt("Which item did you take 1.Water 2.Rice 3.flour 4.enerydrink 5.choclote PLEASE TAKE ONE ITEM AT A TIME")
item = item.toUpperCase()
let itempre;

if (item == "WATER" || item == "RICE" || item == "FLOUR" || item == "ENERYDRINK" || item == "CHOCLOTE") {
    itempre = "yes"
}else{
    alert("This item is not present ples try again")
}

let quanity = Number(prompt("Who much quanity did you take:"))
let price;

if (quanity == NaN || quanity <= -0) {
    alert("Your given number is invalod try again")
} else if(item == "WATER") {
     price =console.log(`This is your price for Water:${quanity * 10}`)
}else if(item == "RICE") {
     price =console.log(`This is your price for rice:${quanity * 85}`)
}else if(item == "FLOUR") {
     price =console.log(`This is your price for rice:${quanity * 90}`)
}else if(item == "ENERYDRINK") {
     price =console.log(`This is your price for Energy drink:${quanity * 20}`)
}else if(item == "CHOCLOTE") {
     price = console.log(`This is your price for Energy drink:${quanity * 50}`)
}

let gst = 18/100 * price + price
let comp;
if (mem == "yes") {
    comp = prompt("Enter yes if you want to apply commpon")
    comp = comp.toUpperCase()
} else {
    console.log("You did not have any compone code")
}
let total = gst
let compon;

if(mem == "yes" && comp == "YES"){
   compon = total - 30
    console.log("This is your total price:", compon )
    let monet = Number(prompt("How much amoth should you will give me THIS IS YOUR TOTAL PRICE",compon))
    if (monet == NaN || monet >= -0) {
    alert("Please enter a correct a amont")
} else if (monet >= compon ) {
    console.log("This is your money remenig:",monet - compon)
}

}else{
    console.log("This is your total price:", gst)
}

let monet = Number(prompt("How much amoth should you will give me"))
 
if (monet == NaN || monet >= -0) {
    alert("Please enter a correct a amont")
} else if (monet >= total ) {
    console.log("This is your money remenig:",monet - total)
}

