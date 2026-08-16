// async function data() {
//     return new Promise((resolve, reject) => {
//         resolve("data recived");
//         setTimeout(() => {  
            
//         }, 2000);
//     });
// }

// async function main() {
//     try {
//         let result = await data();
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// }

// main();
async function data() {
    return new Promise((resolve, reject) => {
       
        setTimeout(() => {  
             reject("server error");
        }, 3000);
    });
}

async function main() {
    try {
        let result = await data();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

main();