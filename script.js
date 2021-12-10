const $body = document.querySelector('#container')
const $img = document.createElement('img')
const $id = document.createElement('p')
const $url = document.createElement('a')
$body.insertAdjacentElement('beforeend', $img)
$body.insertAdjacentElement('beforeend', $id)
$body.insertAdjacentElement('beforeend', $url)

const dadosgit = fetch('https://api.github.com/users/LilDrikks')
    .then(function(respostadoservidor) {
        console.log(respostadoservidor.json().then(function(git) {
            console.log(git)
            const $fotogit = git.avatar_url
            const $logingit = ['Login: ' + git.login, ' ID: ' + git.id]
            const $urlPerfil = git.html_url


            $url.href = $urlPerfil
            $url.innerText = 'Link para o GitHub'
            $img.src = $fotogit
            $id.innerText = $logingit[0] + $logingit[1]

        }))


    })