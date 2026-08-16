async function getData() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users/1");

    console.log(response);
}

getData();