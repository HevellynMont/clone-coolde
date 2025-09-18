function carregar() {
    let msg = window.document.getElementById('campo1');
    let img = window.document.getElementById('imagem');
    let data = new Date();
    let hora = data.getHours();
 
    msg.innerHTML = `Agora são ${hora} horas.`;
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'assets/image/manhã-fotor-20250917124717.png';
        document.body.style.background = '#8b9264';
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        img.src = 'assets/image/tarde-fotor-20250917124651.png';
        document.body.style.background = '#9f6f5b';
    } else {
        //BOA NOITE
        img.src = 'assets/image/noite-fotor-20250917124821.png';
        document.body.style.background = '#002a52';
    }
}
