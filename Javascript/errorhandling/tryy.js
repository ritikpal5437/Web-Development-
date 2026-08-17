// let a =prompt  ("enter 1 no.")
// let b =prompt ("enter 2 no.")
// try{let sum = parseInt(a)+parseInt(b)

// } catch(error) {
//     console.error("An error occurred:", error);
// }console.log("sum is",sum)
let a = prompt("Enter first number")

let b = prompt("Enter second number")
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry this is not allowed")
}

let sum = parseInt(a) + parseInt(b)

function main(){ 
    let x = 1;
    try {
        console.log("The sum is ", sum * x)
        return true
        
    } catch (error) {
        console.log("Error ")
        return false
    } 
    finally{
        console.log("files are being closed and db connection is being closed")
    }
  
}

let c = main()