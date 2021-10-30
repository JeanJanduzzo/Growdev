alert("Hello world!");

var nome = "Jean Janduzzo";
var cargo = "Ajudante das Meninas Super Poderosas";

var nomehtml = document.getElementById("nome-no-html");
var cargohtml = document.getElementById("cargo-no-html");
var texto1 = document.getElementById("texto-1");
var texto2 = document.getElementById("texto-2");

function colocarnomenohtml(nome){
    nomehtml.innerHTML = nome;
}

function colocarcargonohtml(cargo){
    cargohtml.innerHTML = cargo;
}

function cliquenofoimal(){
    console.log("clicou foi mal");
    texto2.style.display = "block";
    texto1.style.display = "none";
}

function cliquenosobre(){
    console.log("clicou sobre");
    texto1.style.display = "block";
    texto2.style.display = "none";
}

colocarnomenohtml(nome);
colocarcargonohtml(cargo);

