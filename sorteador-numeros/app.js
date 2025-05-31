function sortear(){
    let quantidade = parseInt(document.getElementById('Quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    if (de >= ate){
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        return;
    }
    if (quantidade > (ate - de + 1)){
        alert ('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Até o número". Verifique!');
        return;
    }

    /* let numero = obterNumeroAleatorio(de, ate);
    alert(numero); */

    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);

        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
            alert('Tentando obter número inédito');
        }

        sorteados.push(numero);

    }

        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;
        alterarStatusBotao();
    }

    function obterNumeroAleatorio(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;


    }
    
    function alterarStatusBotao(){

        let botao = document.getElementById('btn-reiniciar');

        if (botao.classList.contains('container__botao-desabilitado')){
            botao.classList.remove('container__botao-desabilitado');
            botao.classList.add('container__botao');
            
        } else {
            botao.classList.remove('container__botao');
            botao.classList.add('container__botao-desabilitado');

        }

    }


    function reiniciar() {
        document.getElementById('Quantidade').value = '';
        document.getElementById('de').value = '';
        document.getElementById('ate').value = '';
        document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
        alterarStatusBotao();
        
        }

function sortear(){
    let quantidade = document.getElementById('quantidade').value;
    let de = document.getElementById('de').value;
    let ate = document.getElementById('ate').value;
    
    alert(`Quantidade: ${quantidade}`);
    alert(`Do número: ${de}`);
    alert(`Até o número: ${ate}`);

    }
