let answer = prompt("Enter your value:");
console.log(answer)
answer = answer.toUpperCase()
let his = []

if (answer === "TRUE" || answer === "FALSE") {
    console.log(`This is a your value: ${answer}`)

    console.log("This is a Boolean values",Boolean(answer))


    if (answer === "TRUE") { console.log(`Your given value is a ${answer} value is: 1`)
                             console.log(`This is a typeof value: ${typeof true}`)}
    else{ console.log(`Your given value is a ${answer} value is: 0`) 
        console.log(`This is a typeof value: ${typeof false}`)}

    let pri = answer
    pri="abx321"
    if (pri === answer) { console.log("Given value is a Reference value:", answer)}
    else{ console.log("Give value is a Primitive value:", answer) }

    if (answer === "TRUE") {console.log(`Your give value is ${answer}: 🔛`)}
    else { console.log(`Your give value is ${answer}: 📴`)}

} 
else if(answer === "UNDEFINED"){
    console.log(`This is a your value: ${answer}`)

    console.log(`This is a typeof value: ${typeof answer}`)

    console.log(`This is a Boolean values: ${Boolean(answer)}`)

    let pri = answer
    pri="abx321"
    if (pri === answer) { console.log("Given value is a Reference value:", answer)}
    else{ console.log("Give value is a Primitive value:", answer) }

    console.log(`Your give value is a ${answer}: 🤷`)
    
}
else if(answer === "NULL"){
    console.log(`This is a your value: ${answer}`)

    console.log(`This is a typeof value: ${typeof answer}`)
    console.log(`typeof null give us object this is a historic bug its can fix if we fix that millons of website stop working`)

    console.log(`This is a Boolean values: ${Boolean(answer)}`)

    let pri = answer
    pri="abx321"
    if (pri === answer) { console.log("Given value is a Reference value:", answer)}
    else{ console.log("Give value is a Primitive value:", answer) }

    console.log(`Your give value is a ${answer}: 🕳️`)
}
else if(answer === "SYMBOLE"){
    console.log(`This is a your value: ${answer}`)

    console.log(`This is a typeof value: ${typeof answer}`)

    console.log(`This is a Boolean values: ${Boolean(answer)}`)

    let pri = answer
    pri="abx321"
    if (pri === answer) { console.log("Given value is a Reference value:", answer)}
    else{ console.log("Give value is a Primitive value:", answer) }

    console.log(`Your give value is a ${answer}: 🔑`)
}
else if(answer === "BIGINT"){
    console.log(`This is a your value: ${answer}`)

    console.log(`This is a typeof value: ${typeof answer}`)

    console.log(`This is a Boolean values: ${Boolean(answer)}`)

    let pri = answer
    pri="abx321"
    if (pri === answer) { console.log("Given value is a Reference value:", answer)}
    else{ console.log("Give value is a Primitive value:", answer) }

    console.log(`Your give value is a ${answer}: 🐘`)
}
else if(answer !== "" && !isNaN(answer)){
    console.log(`This is your given value: ${answer}`)

    console.log(`This is a typeof value: ${typeof answer}`)

    console.log(`This is a Boolean values: ${Boolean(answer)}`)

    let pri = answer
    pri="abx321"
    if (pri === answer) { console.log("Given value is a Reference value:", answer)}
    else{ console.log("Give value is a Primitive value:", answer) }

    console.log(`Your give value is a ${answer}: 🔢`)
}
else if(answer !== "" && !isNaN(answer)){
    console.log(`This is your given value: ${answer}`)

    console.log(`This is a typeof value: ${typeof answer}`)

    console.log(`This is a Boolean values: ${Boolean(answer)}`)

    let pri = answer
    pri="abx321"
    if (pri === answer) { console.log("Given value is a Reference value:", answer)}
    else{ console.log("Give value is a Primitive value:", answer) }

    console.log(`Your give value is a ${answer}: 🔤`)
}
else if(answer === "[]"){
    console.log(`This is your given value: ${answer}`)

    console.log(`This is a typeof value: ${typeof answer}`)

    console.log(`This is a Boolean values: ${Boolean(answer)}`)

    let pri = answer
    pri="abx321"
    if (pri === answer) { console.log("Given value is a Reference value:", answer)}
    else{ console.log("Give value is a Primitive value:", answer) }

    console.log(`Your give value is a ${answer}: 📦`)
}
else if(answer === "{}"){
    console.log(`This is your given value: ${answer}`)

    console.log(`This is a typeof value: ${typeof answer}`)

    console.log(`This is a Boolean values: ${Boolean(answer)}`)

    let pri = answer
    pri="abx321"
    if (pri === answer) { console.log("Given value is a Reference value:", answer)}
    else{ console.log("Give value is a Primitive value:", answer) }

    console.log(`Your give value is a ${answer}: 🗂️`)
}
else if(answer === "function"){
    console.log(`This is your given value: ${answer}`)

    console.log(`This is a typeof value: ${typeof answer}`)

    console.log(`This is a Boolean values: ${Boolean(answer)}`)

    let pri = answer
    pri="abx321"
    if (pri === answer) { console.log("Given value is a Reference value:", answer)}
    else{ console.log("Give value is a Primitive value:", answer) }

    console.log(`Your give value is a ${answer}: ⚙️`)
}

