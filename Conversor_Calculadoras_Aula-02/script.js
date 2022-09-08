const moedas = {
    real: '1',
    euro: '5.1955',
    dolar: '5.2487',
    iene: '0.0367',
    bitcoin: '99306.45'
}

const simbolo = {
    real: 'R$',
    euro: '€',
    dolar: 'US$',
    iene: '¥',
    bitcoin: 'BTC'
}

function Converter() {
    let valorElemento = document.getElementById('valor');
    let moedaParaConverter = document.getElementById('moedaParaConverter')
    let moedaConvertida = document.getElementById('moedaConvertida')
    let valorConvertido = document.getElementById('valorConvertido')
    let valorCalculado = Calcular(Number(moedas[moedaParaConverter.value]), Number(moedas[moedaConvertida.value]), Number(valorElemento.value));

    valorConvertido.innerText = `Total = ${valorCalculado} ${simbolo[moedaConvertida.value]}`;
}

function Calcular(moedaParaConverter, moedaConvertida, valor) {
    if (moedaParaConverter == moedaConvertida) {
        return valor;
    } else {
        let conversao = moedaParaConverter / moedaConvertida
        conversao *= valor;
        return conversao.toFixed(2)
    }
}

// ------------------------

function ConverterKm(){
    let valorElemento = document.getElementById('valorKm');
    let valorConvertido = document.getElementById('valorKmConvertido')



    valorConvertido.innerText = Number(valorElemento.value) * 9500000000000 + ' KM';

}

// ----------------------------

function ConverterTemperaturas() {
    
    let valorCelsius = document.getElementById('valorCelsius');
    let valorFarenheit = document.getElementById('farenheit');
    let valorKelvin = document.getElementById('kelvin');
    
    valorFarenheit.innerText = ((Number(valorCelsius.value) * 9/5) + 32) + 'ºF' ;
    valorKelvin.innerText = Number(valorCelsius.value + 273,15) + ' K';

}