//informação de perfil + link
const perfil = document.getElementById("gh-profile");
fetch(`https://api.github.com/repos/Iago-Peres/Portfolio-IagoPeres`)
    .then(response => response.json())
    .then(data => {
        perfil.innerHTML = `
        <img src="${data.owner.avatar_url}" alt="${data.login}">
        <h3>${data.owner.login}</h3>
        <a href="${data.owner.html_url}" target="_blank">Perfil GitHub</a>`;
    })
    .catch(error => {
        console.error("Error:", error);
        perfil.innerHTML = "Error fetching GitHub profile data.";
    });
//lista projetos + info
const projeto = document.getElementById("projetos");
fetch(`https://api.github.com/users/Iago-Peres/repos`)
    .then(response => response.json())
    .then(data => {
        data.forEach(repo => {
            console.log(repo.name)
            let card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
            <h3>${repo.name}</h3>
            <p>${repo.description}</p>
            <a href="${repo.html_url}" target="_blank" class="repo-link">Visitar repositório no GitHub</a>`;
            projeto.appendChild(card);
        });
    })
    .catch(error => {
        console.error("Error:", error);
        projeto.innerHTML = "Error: " + error.message;
    });