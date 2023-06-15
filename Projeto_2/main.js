const form = document.getElementById('dados')
let linhas = ''
const imgcelular = '<img class=imagem src="./celular.png"alt="Imagem de celular">'
const imgtelefone = '<img class=imagem src="./telefone.png"alt="Imagem de telefone">'

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputnomecontato = document.getElementById('contato')
    const inputddd = document.getElementById('ddd')
    const inputnumerocontato = document.getElementById('telefone')

    let linha = '<tr>'
    linha += `<td>${inputnomecontato.value}</td>`
    linha += `<td>${inputddd.value + ` ` + inputnumerocontato.value}</td>`
    linha += `<td>${inputnumerocontato.value > 99999999 ? imgcelular : imgtelefone}</td>`
    linha += `</tr>`

    linhas += linha

    const tabela = document.querySelector('tbody')
    tabela.innerHTML = linhas
    inputnomecontato.value = ''
    inputddd.value = ''
    inputnumerocontato.value = ''
})