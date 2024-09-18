const conteudo = document.getElementById("conteudo")

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            console.log(element.title)
            let linha = document.createElement("div")
            linha.innerHTML = element.title + "<br><br>"
            conteudo.appendChild(linha)
        })
    })