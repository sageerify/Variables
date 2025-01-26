function login(username, password) {
    return new Promise((resolve, reject) => {
        console.log('login is working');
        if (username == 'ali' && password == '123456') {
            resolve(username)
        }
        else {
            reject('username or password is not matched')
        }
    })
}
function displayData(username) {
    return new Promise((resolve, reject) => {
        console.log('displaying data');
        resolve("hello" + username);
    })
}
// login('ali', '123456').then((data) => {
//     console.log(data);
//     displayData(data).then((res) => {
//         console.log(res);
//     })
// })
// .catch((err)=>{
//     console.log(err)
// })
async function doThis() {
    try {
        const data = await login('al', '123456');
        console.log('hello');
        console.log(data);
        const res = await displayData(data);
        console.log(res);
    }
    catch (err) {
        console.log(err);
    }

}

doThis();
