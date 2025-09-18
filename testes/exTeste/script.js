function clicar(){
    let produto = window.prompt('Que produto você está comprando?')
    let valorProduto = Number(window.prompt(`Quanto custa ${produto} que você está comprando?`))
    let valorPago = Number(window.prompt(`Qual foi o valor que você deu para pagar ${produto}?`))
    window.alert(`Você comprou ${produto} que custou R$: ${valorProduto.toFixed(2).replace(".", ",")}.` + '\nDeu ' + `${valorPago.toFixed(2).replace(".", ",")} e vai receber R$: ${valorPago.toFixed(2) - valorProduto.toFixed(2)} de troco.` + '\nVolte Sempre!')

}

/*onclick => disparado quando recebe um click
ondblclick => disparado quando click duplo
onmouseover => disparado quando o mouse está sobre
onmouseout => disparado quando o mouse sai do objeto
onmousemove => disparado quando o mouse é movido no elemento
onmousedown => disparado quando o click do botão for pressionado
onmouseup = > disparado quando o click do mouse é solto
onfocus => disparado quando o elemento recebe o foco. Válido para input
onchange => disparado quando há uma mudança no conteúdo. "Ao mudar"
onblur => disparado quando o elemento perde o foco
onkeydown => disparado quando uma tecla é pressionada 
onkeypress => disparado quando uma tecla é pressionada e solta
onkeyup => disparado quando uma tecla é solta sobre o elemento
onload => disparado quando a página terminou de ser carregada. Body
onresize => disparado quando há um redimencionamento da janela */