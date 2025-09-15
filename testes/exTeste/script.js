function clicar(){
    let produto = window.prompt('Que produto você está comprando?')
    let valorProduto = Number(window.prompt(`Quanto custa ${produto} que você está comprando?`))
    let valorPago = Number(window.prompt(`Qual foi o valor que você deu para pagar ${produto}?`))
    window.alert(`Você comprou ${produto} que custou R$: ${valorProduto.toFixed(2).replace(".", ",")}.` + '\nDeu ' + `${valorPago.toFixed(2).replace(".", ",")} e vai receber R$: ${valorPago.toFixed(2) - valorProduto.toFixed(2)} de troco.` + '\nVolte Sempre!')

}