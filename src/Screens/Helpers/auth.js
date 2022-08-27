export const authToken = () => {
    const userToken = JSON.parse(localStorage.getItem('userToken'));
    console.log(userToken,"userToken ")

    if( userToken === null ){
        console.log(userToken,"userToken === null")
        return undefined;
       
    }
    else {
        return  userToken.userToken;
    }
}

// export const refreshToken = () => {
//     const userToken = JSON.parse(localStorage.getItem('userToken'));
//     if( userToken === null ){
//         console.log(userToken,"userToken === null")
//         return undefined;
//     }
//     else {
//         return userToken.userToken;
//     }
// }