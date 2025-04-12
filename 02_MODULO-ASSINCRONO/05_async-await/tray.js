const loginUser = (email, password) => {
    // Retorne uma Promise
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            const error = false;
            
            if(error) {
                reject("Erro na conexão ao banco.")
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
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve({ id: "1", name: "Node Start", duration: "3h"})
        }, 2000)
    });
}

const getUserData = async () => {
    try{
        console.log("Carregando os dados ... \n")
        const user = await loginUser("maria sivla", "123456");
        const videos = await getUserVideos()
        const detalhes = await getUserVideoDetails()
        // console.log(user)
        console.log("Dados do usuário: ", user)
        console.log("Videos do usuário: ", videos)
        console.log("Detalhes videos: ", detalhes)
    }catch(error){
        console.log("Deu ruim: ", error)
    }
}

// getUserData() .then( () => {
//     console.log("Carregado com sucesso")
// })

const init = async () => {
    await getUserData();
    console.log("Carregado com sucesso")
};
init();

// async function getUserData2() {} // exemplo