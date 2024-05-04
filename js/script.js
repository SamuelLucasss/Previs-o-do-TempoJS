const key = "aa5825e2dc0994123475b0023c2df5fd";

function trocarDadosNaTela(dados) {
    console.log(dados);
    document.getElementById("temp-city").innerHTML = "Tempo em " + dados.name;
    document.querySelector(".graus").innerHTML = Math.floor(dados.main.temp) + "°C";
    document.getElementById("img-temp").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
    document.getElementById("previsao").innerHTML = dados.weather[0].description;
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%";
    document.getElementById("input-cidade").value = "";
};

async function buscarDados(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json());

    if(!cidade) {
        alert("Insira uma cidade Válida");
        document.getElementById("input-cidade").value = "";
        return;
    };
    trocarDadosNaTela(dados);
};

function buscarCidade() {
    const cidade = document.getElementById("input-cidade").value;
    buscarDados(cidade);
};
