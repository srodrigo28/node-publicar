const loginUser = (email, password, onSuccess, onError) => {
    setTimeout( () => {
        const error = false;
        
        if(error) {
            return onError("Erro na conexão do banco.")   
        }

        console.log("Usuário verificado com banco de dados!");
        onSuccess({email});
    }, 3000) 
}

const user = loginUser(
    "amandaoliveira@test.com", 
    "123", 
    (user) => {
    console.log("usuário logado com sucesso!")
    console.log(user)
}, (error) => { console.log(error) })