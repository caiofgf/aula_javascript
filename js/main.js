/*function soma (n1, n2) {
    return n1 + n2
}

function setReplace (frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome)
}

function validaIdade(idade) {
    var validar
    if (idade >= 18) validar = true
    else validar = false
    return validar
}

alert(soma(5, 10))
alert(setReplace ("Grande Vitor", "Vitor", "Caio"))
var idade = prompt("Qual sua idade?")
console.log(validaIdade(idade))*/

function botao() {
    document.getElementById('agradecimento').innerHTML = "<b>Obrigado por clicar</b>"
}

function redireciona() {
    window.open("https://www.google.com") //abre em outra guia
    window.location.href = "https://www.globo.com" //abre na mesma guia
}

function troca(elemento) {
    elemento.innerHTML = "Já viu, hein"
}

function volta(elemento) {
    elemento.innerHTML = "Passe o mouse aqui"
}

function carrega() {
    alert("Página carregada")
}

function muda(elemento) {
    console.log(elemento.value)
}