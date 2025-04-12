const loginUser = (email, password, onSuccess, onError) => {
    setTimeout(() => {
        const error = false;

        if (error) {
            return onError("Erro na conexão do banco.")
        }

        console.log("Usuário verificado com banco de dados!");
        onSuccess({ email });
    }, 3000)
}

const getUserVideos = (onSuccess) => {
    setTimeout(() => {
        onSuccess(["video_1", "video_2", "video_3"]);
    }, 2000);
}

const getUserVideoDetails = (onSuccess, onError) => {
    setTimeout( () => {
        onSuccess({ id: "1", name: "Node Start", duration: "3h"})
    }, 2000)
}

const user = loginUser(
    "amandaoliveira@test.com",
    "123",
    (user) => {
        console.log("usuário logado com sucesso!")
        console.log(user);

        getUserVideos( (videos) =>{
            console.log("Vídeos do usuário recuperados com sucesso! ", videos)

            getUserVideoDetails( (video) => {
                console.log("Detalhes do vídeo 1 do usuário: ", video)
            }, 2000)
        })
    },
    (error) => {
        console.log(error)
    }
)