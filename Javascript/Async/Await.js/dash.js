async function login() {
    return new Promise((resolve,reject) => {
      setTimeout(()  => {
       resolve("login succesfull");
      },2000);
    });
}

async function main() {
    try {
        let result = await login();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

    main();
