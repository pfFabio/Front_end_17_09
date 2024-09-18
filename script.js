const result = document.getElementById("result")
const question = document.getElementById("question")
const OPEN_API_KEY = "sua key aki"


function leitura(event){
    if(question.value && event.key == "Enter" ){
        let pergunta = question.value
        question.innerHTML = ''
        fetch("https://api.openai.com/v1/completions", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + OPEN_API_KEY,
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                prompt: pergunta,
                max_tokens: 2048, // Tamanho da Resposta
                temperature: 0.5, // Criatividade da Resposta
            }),  
        })
        .then(response => response.json())
        .then(info => {
            result.innerHTML = 'info'
            console.log(info)

        })
            
    }
}