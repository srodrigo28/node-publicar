const loginUser = (email,password, callback) => {
    setTimeout( () => {
        console.log("Usuário verificado cno banco de dados!");
        callback({email});
    }, 3000) 
}

const user = loginUser("amandaoliveira@test.com", "123", (user) => {
    console.log(user)
})