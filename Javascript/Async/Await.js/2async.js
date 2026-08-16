async function login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Login successful");
        }, 2000);
    });
}

async function getUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("User data received");
        }, 2000);
    });
}

async function Data() {
    try {
        let result1 = await login();
        console.log(result1);

        let result2 = await getUserData();
        console.log(result2);

    } catch (error) {
        console.log(error);
    }
}

Data();