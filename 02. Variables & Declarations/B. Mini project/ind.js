let vname = prompt("Enter a Variable name")
console.log(`This is your variable name: ${vname}`)

let value = prompt("Enter a value of a give variable")
console.log(`This is a your given: ${value}`)

let variable = prompt("Enter which variable should you want var let const")
console.log(`This is your given variable: ${variable}`)


console.log(`${variable} ${vname} = ${value}`)

let change = prompt("If you want to change a value enter it or remove the present value Skip it")
console.log(`This is a your next value : ${change}`)


if (variable === "var") {
    console.log("Your variable can change value because you choise is var")
    console.log("1. Var is fuction scoped its not a block scoped its leack outside the block")
    console.log("2. var has a no Temporal Dead Zone it will give undefined")
    console.log("3. We can Redeclar the value with same name and variable it will not give error")
    console.log("4. We can Reassignment allowed means we can change value")
    console.log("5. var is fuction its did not new variable after every loop")

    console.log(`This is your new value: ${variable} ${vname} = ${change}`)

    let cvname=prompt("Did you want create a new variable with a same name and variable if YES type Yes if NO type NO")
    if (cvname === "yes") {
        let chvalue = prompt(`Give us a new value`)
        console.log(`This is your new value: ${variable} ${vname} = ${chvalue}`)
    } else {
        console.log(`ok if want to exit exit or restart`)
    }

} else if(variable === "let"){
    console.log("Your variable can change value because your choise is let")
    console.log("1. let is a block scoped it will not leack outside a block")
    console.log(`2. let has a Temporal Dead Zone it will give a ReferenceError: Cannot access ${vname} before initialization`)
    console.log(`3. let has No Redeclartion in the same scope means if your in global scope your variable is declartion you cannot redeclaration in same sccope otherwise it will give SyntaxError: Identifier ${vname} has already been declared`)
    console.log(`4. let has Reassignment allowed we can change vlaue `)
    console.log(`5. let is block scoped its did new variable after every loop`)

    console.log(`This is your new value: ${variable} ${vname} = ${change}`)
        let cvname=prompt("Did you want create a new variable with a same name and variable if YES type Yes if NO type NO")
    if (cvname === "yes") {
        console.log(`No you cannot do that in a let variable `)
    } else {
        console.log(`ok if want to exit exit or restart`)
    }
}else if(variable === "const"){
    console.log("Your variable can not change because your choise is const")
    console.log(`1. const is a block scoped it will not leack outside a block`)
    console.log(`2. const has a Temporal Dead Zone it will give a ReferenceError: ${vname} is not defined`)
    console.log(`3. const has a No Redeclartion in the (same scope)`)
    console.log(`4. const has a No Reassignment other wise TypeError: Assignment to constant variable.`)
    console.log(`5. const has a No Reassignment that why we cannot take in loop otherwise it will give error`)

    console.log("You can not change a value because its a const variable")
}


