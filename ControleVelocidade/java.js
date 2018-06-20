var h1 = document.getElementById('h1');
var p = document.getElementById('speed');
var range = document.getElementById('range');
var counter = document.getElementById('counter')
var intervalo;
var num = 0;
var ativo = false;

var roda = () => {
    if(!p.innerText.includes('?')) {
        if (ativo) {
            clearInterval(intervalo);
            ativo = false;
        } else {
            intervalo = setInterval(() => {
                if(num >= 360){
                    num = 0;    
                }
                h1.style.transform = 'rotate(' + num + 'deg)';
                num += getSpeed(()=>{counter.value})
            }, 1)
            ativo = true;
        }   
    } else {
        alert('por favor defina um valor para a velocidade')
    }
}
var getSpeed = (cont) => {
        var num = getValorAtual() / 100;
        console.log(num);
        return num
}
var getValorAtual = () => {
    return parseInt(range.value);
}

var mostraValor = () => {
    p.innerText= 'velocidade: ' + range.value;
}