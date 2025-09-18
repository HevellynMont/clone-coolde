function calcular(){
    let velocidade = Number(window.document.querySelector('#velocidade').value);
    let resultado = document.getElementById('resultado');
    resultado.innerHTML += `<p>Sua velocidade atual é de <strong>${velocidade} Km/h</strong></p>`;
    if(velocidade > 60){
        resultado.innerHTML += `<p>Velocidade acima do permitido</p>`;
    }
    
}