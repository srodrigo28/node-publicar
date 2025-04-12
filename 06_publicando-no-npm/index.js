export const FormData = (data) => {
    if(data){
        const dataCriada = new Date(data);
        const dataFormatada = dataCriada.toLocaleDateString('pt-BR', {
            timeZone: 'UTC',
        });
        return dataFormatada;
    }else{
        console.log("data exemplo: ", '2024-10-31'  )
    }
}

export const FormMoeda = (valorFormat) => {
    if(valorFormat){
        return valorFormat.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL'
        });
    }else{
        console.log("Exemplo: ", "100.99" );
    }
}

export const FormText = (text, size) => {
    if(FormText){
        return text.substring(0, size) + '...';;
    }else{
        console.log("Exemplo: ", "texto para formatar", "tamanho da string" );
    }
}