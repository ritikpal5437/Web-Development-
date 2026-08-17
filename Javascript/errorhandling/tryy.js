let a =prompt  ("enter 1 no.")
let b =prompt ("enter 2 no.")
try{let sum = parseInt(a)+parseInt(b)

} catch(error) {
    console.error("An error occurred:", error);
}console.log("sum is",sum)