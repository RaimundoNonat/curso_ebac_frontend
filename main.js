document.addEventListener('DOMContentLoaded', function () {
    const nomeElemento = document.querySelector('#nome');
    const userNameElemento = document.querySelector('#userName');
    const avatarElemento = document.querySelector('#avatar');
    const seguindoElemento = document.querySelector('#seguindo');
    const seguidoresElemento = document.querySelector('#seguidores');
    const repositorioElemento = document.querySelector('#repositorio');
    const linkElemento = document.querySelector('#link');

    fetch('https://api.github.com/users/raimundononat')
        .then(function (res) {
            return res.json();
        })
        .then(function (json) {
            nomeElemento.innerText = json.name;
            userNameElemento.innerText = `@${json.login}`;
            avatarElemento.src = json.avatar_url;
            seguindoElemento.innerText = json.following;
            seguidoresElemento.innerText = json.followers;
            repositorioElemento.innerText = json.public_repos;
            linkElemento.href = json.html_url;
        })

})
