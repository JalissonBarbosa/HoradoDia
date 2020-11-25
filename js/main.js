function carregar() {
    var mensagem = document.getElementById("mensagem");
    var foto = document.getElementById("imagem");

    var data = new Date()
    var hora = data.getHours()
    //var hora = 10  ----> Aqui você pode testar com horário predefinido!
    mensagem.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        imagem.src = './img/manha.png'
        document.body.style.background = '#b89ea0';
    } else if (hora >= 12 && hora <= 18) {
        imagem.src = './img/tarde.png'
        document.body.style.background = '#d76716';
    } else {
        imagem.src = './img/noite.png'
        document.body.style.background = '#4f3d57';
    }


}
