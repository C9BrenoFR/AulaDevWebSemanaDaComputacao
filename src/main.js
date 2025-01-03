let select = 0;
const nav2 = document.getElementById("sidebar2");
const nav2_conteudo = document.getElementById("lista-pacotes");
const nav3 = document.getElementById("sidebar3");
const nav3_conteudo = document.getElementById("pacote-conteudo");
let aberto = 0;


const argentina = [
    { nome: "Plano Familiar p/ 4 pessoas", preco: "R$ 2000,00", parcelas: "12x de R$200,00" },
    { nome: "Plano casal", preco: "R$ 1200,00", parcelas: "12x de R$120,00" },
    { nome: "Plano Individual", preco: "R$ 699,90", parcelas: "12x de R$69,90" },
    { nome: "Plano customizado", preco: "A combinar", parcelas: "" }
];

const cuba = [
    { nome: "Plano Familiar p/ 4 pessoas", preco: "R$ 2500,00", parcelas: "12x de R$250,00" },
    { nome: "Plano casal", preco: "R$ 1400,00", parcelas: "12x de R$140,00" },
    { nome: "Plano Individual", preco: "R$ 899,90", parcelas: "12x de R$89,90" },
    { nome: "Plano customizado", preco: "A combinar", parcelas: "" }
];

const indonesia = [
    { nome: "Plano Familiar p/ 4 pessoas", preco: "R$ 3000,00", parcelas: "12x de R$300,00" },
    { nome: "Plano casal", preco: "R$ 1800,00", parcelas: "12x de R$180,00" },
    { nome: "Plano Individual", preco: "R$ 1199,00", parcelas: "12x de R$119,90" },
    { nome: "Plano customizado", preco: "A combinar", parcelas: "" }
];

const italia = [
    { nome: "Plano Familiar p/ 4 pessoas", preco: "R$ 3500,00", parcelas: "12x de R$350,00" },
    { nome: "Plano casal", preco: "R$ 2300,00", parcelas: "12x de R$230,00" },
    { nome: "Plano Individual", preco: "R$ 1799,00", parcelas: "12x de R$179,90" },
    { nome: "Plano customizado", preco: "A combinar", parcelas: "" }
];

const franca = [
    { nome: "Plano Familiar p/ 4 pessoas", preco: "R$ 4000,00", parcelas: "12x de R$400,00" },
    { nome: "Plano casal", preco: "R$ 3200,00", parcelas: "12x de R$320,00" },
    { nome: "Plano Individual", preco: "R$ 2699,90", parcelas: "12x de R$269,90" },
    { nome: "Plano customizado", preco: "A combinar", parcelas: "" }
];

function janela(aux, id) {
    switch (aux) {
        case 0:
            nav2_conteudo.innerHTML = "";
            document.getElementById(id).innerHTML = "Argentina"
            nav2.style.opacity = "1"
            document.getElementById("body").style.backgroundImage = "var(--bg-argentina)"
            contador = 0;
            argentina.forEach(element => {
                nav2_conteudo.innerHTML += "<button class='pacote-btn' id='" + element.nome + "' onclick='janela2(0, " + contador + ")'>" + element.nome + "</button>"
                contador++;
            });
            nav3.style.opacity = "0"
            aberto++;
            break;
        case 1:
            nav2_conteudo.innerHTML = "";
            document.getElementById(id).innerHTML = "Cuba"
            nav2.style.opacity = "1"
            document.getElementById("body").style.backgroundImage = "var(--bg-cuba)"
            contador = 0;
            cuba.forEach(element => {
                nav2_conteudo.innerHTML += "<button class='pacote-btn' id='" + element.nome + "' onclick='janela2(1, " + contador + ")'>" + element.nome + "</button>"
                contador++;
            });
            nav3.style.opacity = "0"
            aberto++;
            break;

        case 2:
            nav2_conteudo.innerHTML = "";
            document.getElementById(id).innerHTML = "Indonésia"
            nav2.style.opacity = "1"
            document.getElementById("body").style.backgroundImage = "var(--bg-indonesia)"
            contador = 0;
            indonesia.forEach(element => {
                nav2_conteudo.innerHTML += "<button class='pacote-btn' id='" + element.nome + "' onclick='janela2(2, " + contador + ")'>" + element.nome + "</button>"
                contador++;
            });
            nav3.style.opacity = "0"
            aberto++;
            break;

        case 3:
            nav2_conteudo.innerHTML = "";
            document.getElementById(id).innerHTML = "Itália"
            nav2.style.opacity = "1"
            document.getElementById("body").style.backgroundImage = "var(--bg-italia)"
            contador = 0;
            italia.forEach(element => {
                nav2_conteudo.innerHTML += "<button class='pacote-btn' id='" + element.nome + "' onclick='janela2(3, " + contador + ")'>" + element.nome + "</button>"
                contador++;
            });
            nav3.style.opacity = "0"
            aberto++;
            break;

        case 4:
            nav2_conteudo.innerHTML = "";
            document.getElementById(id).innerHTML = "França"
            nav2.style.opacity = "1"
            document.getElementById("body").style.backgroundImage = "var(--bg-franca)"
            contador = 0;
            franca.forEach(element => {
                nav2_conteudo.innerHTML += "<button class='pacote-btn' id='" + element.nome + "' onclick='janela2(4, " + contador + ")'>" + element.nome + "</button>"
                contador++;
            });
            nav3.style.opacity = "0"
            aberto++;
            break;

        default:
            console.log("Invalid option selected");
    }
}
function janela2(aux, id) {
    if (aberto > 0) {
        switch (aux) {
            case 0:
                nav3_conteudo.innerHTML = "";
                nav3.style.opacity = "1";
                nav3_conteudo.innerHTML += "<section>" + argentina[id].nome + "</section><section>" + argentina[id].preco + "</section><button>" + argentina[id].parcelas + "</section>";
                break;
            case 1:
                nav3_conteudo.innerHTML = "";
                nav3.style.opacity = "1";
                nav3_conteudo.innerHTML += "<section>" + cuba[id].nome + "</section><section>" + cuba[id].preco + "</section><section>" + cuba[id].parcelas + "</section>";
                break;
            case 2:
                nav3_conteudo.innerHTML = "";
                nav3.style.opacity = "1";
                nav3_conteudo.innerHTML += "<section>" + indonesia[id].nome + "</section><section>" + indonesia[id].preco + "</section><section>" + indonesia[id].parcelas + "</section>";
                break;
            case 3:
                nav3_conteudo.innerHTML = "";
                nav3.style.opacity = "1";
                nav3_conteudo.innerHTML += "<section>" + italia[id].nome + "</section><section>" + italia[id].preco + "</section><section>" + italia[id].parcelas + "</section>";
                break;
            case 4:
                nav3_conteudo.innerHTML = "";
                nav3.style.opacity = "1";
                nav3_conteudo.innerHTML += "<section>" + franca[id].nome + "</section><section>" + franca[id].preco + "</section><section>" + franca[id].parcelas + "</section>";
                break;
            default:
                console.log("Invalid option selected");
        }
    }
}

document.addEventListener('click', function (event) {
    const nav1 = document.getElementById("sidebar");

    if (nav1 && !nav1.contains(event.target) &&
        nav2 && !nav2.contains(event.target) &&
        nav3 && !nav3.contains(event.target)) {
        nav2.style.opacity = "0";
        nav3.style.opacity = "0";
        document.getElementById("body").style.backgroundImage = "var(--bg-default)"
        aberto = 0;
    }
});