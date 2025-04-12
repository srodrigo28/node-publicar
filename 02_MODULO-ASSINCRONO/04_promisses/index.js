const loginUser = (email, password) => {
    // Retorne uma Promise
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            const error = false;
            
            if(error) {
                reject("Erro na conexõ ao banco.")
            }
            resolve( {email, password } )
        }, 3000);
    });
}
const getUserVideos = () => {
    return new Promise((resolve, reject) => {
        const error = false;

        if(error){
            return reject("Erro ao tentar recuperar os videos.")
        }

        setTimeout( () => {
            resolve( ["video_1", "video_2", "video_3"]);
        }, 2000)
    })
}
const getUserVideoDetails = () => {
    const error = false;

    if(error){
        return reject("Erro ao tentar recuperar os videos.")
    }
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve({ id: "1", name: "Node Start", duration: "3h"})
        }, 2000)
    });
}

// consumindo
const user = loginUser("aline_sousa@terra.com", "123456")
    .then((user) => {
        console.log("usuário logado com sucesso!");
        console.log("Dados do usuário: ", user)

        return getUserVideos();
    })
    .then((videos) => {
        console.log("Vídeos do usuário recuperados com sucesso!", videos)
    })
    .then((getUserVideoDetails) => {
        console.log("Detalhes do video do usuário: ", getUserVideoDetails)
    })
    .catch( (errorMessage) => {
        console.log(errorMessage);
    });