async function data() {
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {  
            resolve("data recived");
        }, 2000);
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