function carregar() {
    var mensagem = document.getElementById("mensagem");
    var foto = document.getElementById("imagem");

    var data = new Date()
    // var hora = data.getHours()
    var hora = 20
    mensagem.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia!
        imagem.src = './img/manha.png'
        document.body.style.background = '#b89ea0';
    } else if (hora >= 12 && hora <= 18) {
        //Boa tarde!
        imagem.src = './img/tarde.png'
        document.body.style.background = '#d76716';
    } else {
        //Boa noite!
        imagem.src = './img/noite.png'
        document.body.style.background = '#4f3d57';
    }


}
