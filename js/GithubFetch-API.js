const perfil = document.getElementById("gh-profile");
fetch(`https://api.github.com/repos/Iago-Peres/Portfolio-IagoPeres`)
    .then(response => response.json())
    .then(data => {

        console.log(data)

        perfil.innerHTML = `
        <img src="${data.owner.avatar_url}" alt="${data.login}">
        <h3>${data.owner.login}</h3>
        <a href="${data.html_url}" target="_blank">Perfil GitHub</a>`;
    })
    .catch(error => {
        console.error("Error:", error);
        perfil.innerHTML = "Error fetching GitHub profile data.";
    });