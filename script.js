const button = window.document.querySelector('input#calcular');
const resultado = window.document.getElementById('result');


function poupanca(){
    const nome = window.document.getElementById('nome').value;
    var valor_mensal = window.document.querySelector('input#valor_mensal').value;
    var jurus = window.document.querySelector('input#jurus').value;
    var prestacoes = window.document.querySelector('input#prestacoes').value;

    if (nome == '' || valor_mensal == '' || jurus == '' || prestacoes == '')
    {
    window.alert('Erro! Por favor preencha todos os campos!');
    }
    else
    {
    var valor_mensal = parseInt(window.document.querySelector('input#valor_mensal').value);
    var jurus = parseInt(window.document.querySelector('input#jurus').value);
    var prestacoes = parseInt(window.document.querySelector('input#prestacoes').value);

        const valor_poupado = (((((1 + jurus/100)**prestacoes)- 1)/(jurus/100))*valor_mensal).toFixed(2)

        resultado.innerHTML = `<p>${nome}, se você aplicar R$${valor_mensal}, à taxa de juros de ${jurus}% ao mês, durante ${prestacoes} meses, acumulará uma poupança de R$${valor_poupado.replace('.',',')}</p>`
    }

}
button.addEventListener('click', poupanca);