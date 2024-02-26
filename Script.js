//FUNÇÃO
function carregando() {
    //CRIAÇÃO DAS VARIAVEIS
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    // VARIAVEL DO DIA ATUAL
    var data = new Date()
    //VARIAVEL DA HORA ATUAL
    var hora = data.getHours()
    //MSG NO NAVEGADOR
    msg.innerHTML = `Agora são ${hora} horas!`

    if (hora >= 0 && hora < 12) {
        //Bom dia!
        img.src = 'manha.jpg'
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde!
        img.src = 'tarde.jpg'
    } else {
        //Boa noite!
        img.src = 'noite.jpg'
    }
}

