

async function login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("login succesful");
        }, 1000);
    });


}
async function userdata() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("user data failed");
        }, 2000);
    });


}
async function main() {
    try {
        let result1 = await login();
        console.log(result1);

        let result2 = await userdata();
        console.log(result2);
    }
    catch (error){
            console.log(error);

        }
    
    }
    
    main();