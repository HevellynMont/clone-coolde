let a = window.document.getElementById('area');
a.addEventListener('click', clicar);
a.addEventListener('mouseenter', entrar);
a.addEventListener('mouseout', sair);

function clicar(){
    a.innerText = 'Clicou';

}
function entrar(){
    a.innerText = 'Entrou';

}
function sair(){
    a.innerText = 'Saiu';

}