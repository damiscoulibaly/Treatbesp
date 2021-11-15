var table = document.createElement('table');
var thead = document.createElement('thead');
var tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);
document.getElementById('list').appendChild(table);

inicial();

var cmb = document.getElementById('cmbSistema');
var btn = document.getElementById('buscar');
var btnlimpar = document.getElementById('limpar');
var list = document.getElementById('list');
var control = 0;

btn.addEventListener('click', buscar);
btnlimpar.addEventListener('click', limpar);


function buscar(){

    control = 1;

    switch (cmb.value){
        case '0':
            console.log("Alto Tietê!!!");
            alto();
            break;
        
        case '1':
            console.log("Cantareira!!!");
            cantareira();
            break;

        case '2':
            console.log("Guarapiranga!!!");
            guarapiranga();
            break;

        case '3':
            console.log("Marsilac!!!");
            marsilac();
            break;

        case '4':
            console.log("Oriental!!!");
            oriental();
            break;

        case '5':
            console.log("Rio Claro!!!");
            rio_claro();
            break;
    }
}

function inicial(){
    
    var table = document.createElement('table');
    var thead = document.createElement('thead');
    var tbody = document.createElement('tbody');

    table.appendChild(thead);
    table.appendChild(tbody);
    document.getElementById('list').appendChild(table);


    var l1 = document.createElement('tr');
    var h0 = document.createElement('th');
    h0.innerHTML = "Mês";
    var h1 = document.createElement('th');
    h1.innerHTML = "Turbidez";
    var h2 = document.createElement('th');
    h2.innerHTML = "Cor Aparente";
    var h3 = document.createElement('th');
    h3.innerHTML = "Cloro Residual Livre";
    var h4 = document.createElement('th');
    h4.innerHTML = "Coliforme Total";
    var h5 = document.createElement('th');
    h5.innerHTML = "E.Coli";

    l1.appendChild(h0);
    l1.appendChild(h1);
    l1.appendChild(h2);
    l1.appendChild(h3);
    l1.appendChild(h4);
    l1.appendChild(h5);
    thead.appendChild(l1);

}

function limpar(){
    if (control == 1) {
        var lista = document.getElementById('list');

        lista.innerText = "";

        control = 0;
        alert("Campo limpo!!!");

        
        
        inicial();
    } else {
        alert("Sem dados para limpar!!!");
    }

}

function alto(){

    let l2 = document.createElement('tr');
    let jan2 = document.createElement('td');
    jan2.innerHTML = "Janeiro";
    let tur2 = document.createElement('td');
    tur2.innerHTML = "614";
    let cor2 = document.createElement('td');
    cor2.innerHTML = "189";
    let clo2 = document.createElement('td');
    clo2.innerHTML = "614";
    let col2 = document.createElement('td');
    col2.innerHTML = "614";
    let eco2 = document.createElement('td');
    eco2.innerHTML = "614";

    l2.appendChild(jan2);
    l2.appendChild(tur2);
    l2.appendChild(cor2);
    l2.appendChild(clo2);
    l2.appendChild(col2);
    l2.appendChild(eco2);
    tbody.appendChild(l2);


    let l3 = document.createElement('tr');
    let fev3 = document.createElement('td');
    fev3.innerHTML = "Fevereiro";
    let tur3 = document.createElement('td');
    tur3.innerHTML = "593";
    let cor3 = document.createElement('td');
    cor3.innerHTML = "182";
    let clo3 = document.createElement('td');
    clo3.innerHTML = "593";
    let col3 = document.createElement('td');
    col3.innerHTML = "593";
    let eco3 = document.createElement('td');
    eco3.innerHTML = "593";

    l3.appendChild(fev3);
    l3.appendChild(tur3);
    l3.appendChild(cor3);
    l3.appendChild(clo3);
    l3.appendChild(col3);
    l3.appendChild(eco3);
    tbody.appendChild(l3);


    let l4 = document.createElement('tr');
    let mar4 = document.createElement('td');
    mar4.innerHTML = "Março";
    let tur4 = document.createElement('td');
    tur4.innerHTML = "597";
    let cor4 = document.createElement('td');
    cor4.innerHTML = "183";
    let clo4 = document.createElement('td');
    clo4.innerHTML = "597";
    let col4 = document.createElement('td');
    col4.innerHTML = "597";
    let eco4 = document.createElement('td');
    eco4.innerHTML = "597";

    l4.appendChild(mar4);
    l4.appendChild(tur4);
    l4.appendChild(cor4);
    l4.appendChild(clo4);
    l4.appendChild(col4);
    l4.appendChild(eco4);
    tbody.appendChild(l4);


    let l6 = document.createElement('tr');
    let abr6 = document.createElement('td');
    abr6.innerHTML = "Abril";
    let tur6 = document.createElement('td');
    tur6.innerHTML = "586";
    let cor6 = document.createElement('td');
    cor6.innerHTML = "181";
    let clo6 = document.createElement('td');
    clo6.innerHTML = "586";
    let col6 = document.createElement('td');
    col6.innerHTML = "583";
    let eco6 = document.createElement('td');
    eco6.innerHTML = "583";

    l6.appendChild(abr6);
    l6.appendChild(tur6);
    l6.appendChild(cor6);
    l6.appendChild(clo6);
    l6.appendChild(col6);
    l6.appendChild(eco6);
    tbody.appendChild(l6);


    let l5 = document.createElement('tr');
    let mai5 = document.createElement('td');
    mai5.innerHTML = "Maio";
    let tur5 = document.createElement('td');
    tur5.innerHTML = "587";
    let cor5 = document.createElement('td');
    cor5.innerHTML = "184";
    let clo5 = document.createElement('td');
    clo5.innerHTML = "587";
    let col5 = document.createElement('td');
    col5.innerHTML = "587";
    let eco5 = document.createElement('td');
    eco5.innerHTML = "587";

    l5.appendChild(mai5);
    l5.appendChild(tur5);
    l5.appendChild(cor5);
    l5.appendChild(clo5);
    l5.appendChild(col5);
    l5.appendChild(eco5);
    tbody.appendChild(l5);
    

    let l7 = document.createElement('tr');
    let jun7 = document.createElement('td');
    jun7.innerHTML = "Junho";
    let tur7 = document.createElement('td');
    tur7.innerHTML = "590";
    let cor7 = document.createElement('td');
    cor7.innerHTML = "261";
    let clo7 = document.createElement('td');
    clo7.innerHTML = "590";
    let col7 = document.createElement('td');
    col7.innerHTML = "589";
    let eco7 = document.createElement('td');
    eco7.innerHTML = "589";

    l7.appendChild(jun7);
    l7.appendChild(tur7);
    l7.appendChild(cor7);
    l7.appendChild(clo7);
    l7.appendChild(col5);
    l7.appendChild(eco7);
    tbody.appendChild(l7);


















}

function cantareira(){

    let l2 = document.createElement('tr');
    let jan2 = document.createElement('td');
    jan2.innerHTML = "Janeiro";
    let tur2 = document.createElement('td');
    tur2.innerHTML = "792";
    let cor2 = document.createElement('td');
    cor2.innerHTML = "273";
    let clo2 = document.createElement('td');
    clo2.innerHTML = "792";
    let col2 = document.createElement('td');
    col2.innerHTML = "790";
    let eco2 = document.createElement('td');
    eco2.innerHTML = "790";

    l2.appendChild(jan2);
    l2.appendChild(tur2);
    l2.appendChild(cor2);
    l2.appendChild(clo2);
    l2.appendChild(col2);
    l2.appendChild(eco2);
    tbody.appendChild(l2);


    let l3 = document.createElement('tr');
    let fev3 = document.createElement('td');
    fev3.innerHTML = "Fevereiro";
    let tur3 = document.createElement('td');
    tur3.innerHTML = "793";
    let cor3 = document.createElement('td');
    cor3.innerHTML = "269";
    let clo3 = document.createElement('td');
    clo3.innerHTML = "793";
    let col3 = document.createElement('td');
    col3.innerHTML = "793";
    let eco3 = document.createElement('td');
    eco3.innerHTML = "793";

    l3.appendChild(fev3);
    l3.appendChild(tur3);
    l3.appendChild(cor3);
    l3.appendChild(clo3);
    l3.appendChild(col3);
    l3.appendChild(eco3);
    tbody.appendChild(l3);


    let l4 = document.createElement('tr');
    let mar4 = document.createElement('td');
    mar4.innerHTML = "Março";
    let tur4 = document.createElement('td');
    tur4.innerHTML = "797";
    let cor4 = document.createElement('td');
    cor4.innerHTML = "279";
    let clo4 = document.createElement('td');
    clo4.innerHTML = "797";
    let col4 = document.createElement('td');
    col4.innerHTML = "797";
    let eco4 = document.createElement('td');
    eco4.innerHTML = "797";

    l4.appendChild(mar4);
    l4.appendChild(tur4);
    l4.appendChild(cor4);
    l4.appendChild(clo4);
    l4.appendChild(col4);
    l4.appendChild(eco4);
    tbody.appendChild(l4);


    let l6 = document.createElement('tr');
    let abr6 = document.createElement('td');
    abr6.innerHTML = "Abril";
    let tur6 = document.createElement('td');
    tur6.innerHTML = "808";
    let cor6 = document.createElement('td');
    cor6.innerHTML = "284";
    let clo6 = document.createElement('td');
    clo6.innerHTML = "807";
    let col6 = document.createElement('td');
    col6.innerHTML = "804";
    let eco6 = document.createElement('td');
    eco6.innerHTML = "804";

    l6.appendChild(abr6);
    l6.appendChild(tur6);
    l6.appendChild(cor6);
    l6.appendChild(clo6);
    l6.appendChild(col6);
    l6.appendChild(eco6);
    tbody.appendChild(l6);


    let l5 = document.createElement('tr');
    let mai5 = document.createElement('td');
    mai5.innerHTML = "Maio";
    let tur5 = document.createElement('td');
    tur5.innerHTML = "792";
    let cor5 = document.createElement('td');
    cor5.innerHTML = "276";
    let clo5 = document.createElement('td');
    clo5.innerHTML = "793";
    let col5 = document.createElement('td');
    col5.innerHTML = "792";
    let eco5 = document.createElement('td');
    eco5.innerHTML = "792";

    l5.appendChild(mai5);
    l5.appendChild(tur5);
    l5.appendChild(cor5);
    l5.appendChild(clo5);
    l5.appendChild(col5);
    l5.appendChild(eco5);
    tbody.appendChild(l5);
    

    let l7 = document.createElement('tr');
    let jun7 = document.createElement('td');
    jun7.innerHTML = "Junho";
    let tur7 = document.createElement('td');
    tur7.innerHTML = "805";
    let cor7 = document.createElement('td');
    cor7.innerHTML = "454";
    let clo7 = document.createElement('td');
    clo7.innerHTML = "805";
    let col7 = document.createElement('td');
    col7.innerHTML = "802";
    let eco7 = document.createElement('td');
    eco7.innerHTML = "802";

    l7.appendChild(jun7);
    l7.appendChild(tur7);
    l7.appendChild(cor7);
    l7.appendChild(clo7);
    l7.appendChild(col5);
    l7.appendChild(eco7);
    tbody.appendChild(l7);

}

function guarapiranga(){

    let l2 = document.createElement('tr');
    let jan2 = document.createElement('td');
    jan2.innerHTML = "Janeiro";
    let tur2 = document.createElement('td');
    tur2.innerHTML = "801";
    let cor2 = document.createElement('td');
    cor2.innerHTML = "229";
    let clo2 = document.createElement('td');
    clo2.innerHTML = "803";
    let col2 = document.createElement('td');
    col2.innerHTML = "801";
    let eco2 = document.createElement('td');
    eco2.innerHTML = "801";

    l2.appendChild(jan2);
    l2.appendChild(tur2);
    l2.appendChild(cor2);
    l2.appendChild(clo2);
    l2.appendChild(col2);
    l2.appendChild(eco2);
    tbody.appendChild(l2);


    let l3 = document.createElement('tr');
    let fev3 = document.createElement('td');
    fev3.innerHTML = "Fevereiro";
    let tur3 = document.createElement('td');
    tur3.innerHTML = "832";
    let cor3 = document.createElement('td');
    cor3.innerHTML = "211";
    let clo3 = document.createElement('td');
    clo3.innerHTML = "831";
    let col3 = document.createElement('td');
    col3.innerHTML = "832";
    let eco3 = document.createElement('td');
    eco3.innerHTML = "832";

    l3.appendChild(fev3);
    l3.appendChild(tur3);
    l3.appendChild(cor3);
    l3.appendChild(clo3);
    l3.appendChild(col3);
    l3.appendChild(eco3);
    tbody.appendChild(l3);


    let l4 = document.createElement('tr');
    let mar4 = document.createElement('td');
    mar4.innerHTML = "Março";
    let tur4 = document.createElement('td');
    tur4.innerHTML = "803";
    let cor4 = document.createElement('td');
    cor4.innerHTML = "211";
    let clo4 = document.createElement('td');
    clo4.innerHTML = "805";
    let col4 = document.createElement('td');
    col4.innerHTML = "804";
    let eco4 = document.createElement('td');
    eco4.innerHTML = "804";

    l4.appendChild(mar4);
    l4.appendChild(tur4);
    l4.appendChild(cor4);
    l4.appendChild(clo4);
    l4.appendChild(col4);
    l4.appendChild(eco4);
    tbody.appendChild(l4);


    let l6 = document.createElement('tr');
    let abr6 = document.createElement('td');
    abr6.innerHTML = "Abril";
    let tur6 = document.createElement('td');
    tur6.innerHTML = "809";
    let cor6 = document.createElement('td');
    cor6.innerHTML = "222";
    let clo6 = document.createElement('td');
    clo6.innerHTML = "810";
    let col6 = document.createElement('td');
    col6.innerHTML = "805";
    let eco6 = document.createElement('td');
    eco6.innerHTML = "805";

    l6.appendChild(abr6);
    l6.appendChild(tur6);
    l6.appendChild(cor6);
    l6.appendChild(clo6);
    l6.appendChild(col6);
    l6.appendChild(eco6);
    tbody.appendChild(l6);


    let l5 = document.createElement('tr');
    let mai5 = document.createElement('td');
    mai5.innerHTML = "Maio";
    let tur5 = document.createElement('td');
    tur5.innerHTML = "834";
    let cor5 = document.createElement('td');
    cor5.innerHTML = "209";
    let clo5 = document.createElement('td');
    clo5.innerHTML = "834";
    let col5 = document.createElement('td');
    col5.innerHTML = "825";
    let eco5 = document.createElement('td');
    eco5.innerHTML = "825";

    l5.appendChild(mai5);
    l5.appendChild(tur5);
    l5.appendChild(cor5);
    l5.appendChild(clo5);
    l5.appendChild(col5);
    l5.appendChild(eco5);
    tbody.appendChild(l5);
    

    let l7 = document.createElement('tr');
    let jun7 = document.createElement('td');
    jun7.innerHTML = "Junho";
    let tur7 = document.createElement('td');
    tur7.innerHTML = "810";
    let cor7 = document.createElement('td');
    cor7.innerHTML = "227";
    let clo7 = document.createElement('td');
    clo7.innerHTML = "811";
    let col7 = document.createElement('td');
    col7.innerHTML = "808";
    let eco7 = document.createElement('td');
    eco7.innerHTML = "808";

    l7.appendChild(jun7);
    l7.appendChild(tur7);
    l7.appendChild(cor7);
    l7.appendChild(clo7);
    l7.appendChild(col5);
    l7.appendChild(eco7);
    tbody.appendChild(l7);

}

function marsilac(){

    let l2 = document.createElement('tr');
    let jan2 = document.createElement('td');
    jan2.innerHTML = "Janeiro";
    let tur2 = document.createElement('td');
    tur2.innerHTML = "11";
    let cor2 = document.createElement('td');
    cor2.innerHTML = "7";
    let clo2 = document.createElement('td');
    clo2.innerHTML = "11";
    let col2 = document.createElement('td');
    col2.innerHTML = "11";
    let eco2 = document.createElement('td');
    eco2.innerHTML = "11";

    l2.appendChild(jan2);
    l2.appendChild(tur2);
    l2.appendChild(cor2);
    l2.appendChild(clo2);
    l2.appendChild(col2);
    l2.appendChild(eco2);
    tbody.appendChild(l2);


    let l3 = document.createElement('tr');
    let fev3 = document.createElement('td');
    fev3.innerHTML = "Fevereiro";
    let tur3 = document.createElement('td');
    tur3.innerHTML = "11";
    let cor3 = document.createElement('td');
    cor3.innerHTML = "6";
    let clo3 = document.createElement('td');
    clo3.innerHTML = "11";
    let col3 = document.createElement('td');
    col3.innerHTML = "11";
    let eco3 = document.createElement('td');
    eco3.innerHTML = "11";

    l3.appendChild(fev3);
    l3.appendChild(tur3);
    l3.appendChild(cor3);
    l3.appendChild(clo3);
    l3.appendChild(col3);
    l3.appendChild(eco3);
    tbody.appendChild(l3);


    let l4 = document.createElement('tr');
    let mar4 = document.createElement('td');
    mar4.innerHTML = "Março";
    let tur4 = document.createElement('td');
    tur4.innerHTML = "11";
    let cor4 = document.createElement('td');
    cor4.innerHTML = "5";
    let clo4 = document.createElement('td');
    clo4.innerHTML = "11";
    let col4 = document.createElement('td');
    col4.innerHTML = "11";
    let eco4 = document.createElement('td');
    eco4.innerHTML = "11";

    l4.appendChild(mar4);
    l4.appendChild(tur4);
    l4.appendChild(cor4);
    l4.appendChild(clo4);
    l4.appendChild(col4);
    l4.appendChild(eco4);
    tbody.appendChild(l4);


    let l6 = document.createElement('tr');
    let abr6 = document.createElement('td');
    abr6.innerHTML = "Abril";
    let tur6 = document.createElement('td');
    tur6.innerHTML = "11";
    let cor6 = document.createElement('td');
    cor6.innerHTML = "7";
    let clo6 = document.createElement('td');
    clo6.innerHTML = "11";
    let col6 = document.createElement('td');
    col6.innerHTML = "11";
    let eco6 = document.createElement('td');
    eco6.innerHTML = "11";

    l6.appendChild(abr6);
    l6.appendChild(tur6);
    l6.appendChild(cor6);
    l6.appendChild(clo6);
    l6.appendChild(col6);
    l6.appendChild(eco6);
    tbody.appendChild(l6);


    let l5 = document.createElement('tr');
    let mai5 = document.createElement('td');
    mai5.innerHTML = "Maio";
    let tur5 = document.createElement('td');
    tur5.innerHTML = "12";
    let cor5 = document.createElement('td');
    cor5.innerHTML = "6";
    let clo5 = document.createElement('td');
    clo5.innerHTML = "13";
    let col5 = document.createElement('td');
    col5.innerHTML = "12";
    let eco5 = document.createElement('td');
    eco5.innerHTML = "12";

    l5.appendChild(mai5);
    l5.appendChild(tur5);
    l5.appendChild(cor5);
    l5.appendChild(clo5);
    l5.appendChild(col5);
    l5.appendChild(eco5);
    tbody.appendChild(l5);
    

    let l7 = document.createElement('tr');
    let jun7 = document.createElement('td');
    jun7.innerHTML = "Junho";
    let tur7 = document.createElement('td');
    tur7.innerHTML = "11";
    let cor7 = document.createElement('td');
    cor7.innerHTML = "8";
    let clo7 = document.createElement('td');
    clo7.innerHTML = "11";
    let col7 = document.createElement('td');
    col7.innerHTML = "11";
    let eco7 = document.createElement('td');
    eco7.innerHTML = "11";

    l7.appendChild(jun7);
    l7.appendChild(tur7);
    l7.appendChild(cor7);
    l7.appendChild(clo7);
    l7.appendChild(col5);
    l7.appendChild(eco7);
    tbody.appendChild(l7);

}

function oriental(){

    let l2 = document.createElement('tr');
    let jan2 = document.createElement('td');
    jan2.innerHTML = "Janeiro";
    let tur2 = document.createElement('td');
    tur2.innerHTML = "10";
    let cor2 = document.createElement('td');
    cor2.innerHTML = "6";
    let clo2 = document.createElement('td');
    clo2.innerHTML = "10";
    let col2 = document.createElement('td');
    col2.innerHTML = "10";
    let eco2 = document.createElement('td');
    eco2.innerHTML = "10";

    l2.appendChild(jan2);
    l2.appendChild(tur2);
    l2.appendChild(cor2);
    l2.appendChild(clo2);
    l2.appendChild(col2);
    l2.appendChild(eco2);
    tbody.appendChild(l2);


    let l3 = document.createElement('tr');
    let fev3 = document.createElement('td');
    fev3.innerHTML = "Fevereiro";
    let tur3 = document.createElement('td');
    tur3.innerHTML = "11";
    let cor3 = document.createElement('td');
    cor3.innerHTML = "5";
    let clo3 = document.createElement('td');
    clo3.innerHTML = "11";
    let col3 = document.createElement('td');
    col3.innerHTML = "11";
    let eco3 = document.createElement('td');
    eco3.innerHTML = "11";

    l3.appendChild(fev3);
    l3.appendChild(tur3);
    l3.appendChild(cor3);
    l3.appendChild(clo3);
    l3.appendChild(col3);
    l3.appendChild(eco3);
    tbody.appendChild(l3);


    let l4 = document.createElement('tr');
    let mar4 = document.createElement('td');
    mar4.innerHTML = "Março";
    let tur4 = document.createElement('td');
    tur4.innerHTML = "11";
    let cor4 = document.createElement('td');
    cor4.innerHTML = "7";
    let clo4 = document.createElement('td');
    clo4.innerHTML = "11";
    let col4 = document.createElement('td');
    col4.innerHTML = "11";
    let eco4 = document.createElement('td');
    eco4.innerHTML = "11";

    l4.appendChild(mar4);
    l4.appendChild(tur4);
    l4.appendChild(cor4);
    l4.appendChild(clo4);
    l4.appendChild(col4);
    l4.appendChild(eco4);
    tbody.appendChild(l4);


    let l6 = document.createElement('tr');
    let abr6 = document.createElement('td');
    abr6.innerHTML = "Abril";
    let tur6 = document.createElement('td');
    tur6.innerHTML = "11";
    let cor6 = document.createElement('td');
    cor6.innerHTML = "7";
    let clo6 = document.createElement('td');
    clo6.innerHTML = "11";
    let col6 = document.createElement('td');
    col6.innerHTML = "11";
    let eco6 = document.createElement('td');
    eco6.innerHTML = "11";

    l6.appendChild(abr6);
    l6.appendChild(tur6);
    l6.appendChild(cor6);
    l6.appendChild(clo6);
    l6.appendChild(col6);
    l6.appendChild(eco6);
    tbody.appendChild(l6);


    let l5 = document.createElement('tr');
    let mai5 = document.createElement('td');
    mai5.innerHTML = "Maio";
    let tur5 = document.createElement('td');
    tur5.innerHTML = "12";
    let cor5 = document.createElement('td');
    cor5.innerHTML = "6";
    let clo5 = document.createElement('td');
    clo5.innerHTML = "13";
    let col5 = document.createElement('td');
    col5.innerHTML = "12";
    let eco5 = document.createElement('td');
    eco5.innerHTML = "12";

    l5.appendChild(mai5);
    l5.appendChild(tur5);
    l5.appendChild(cor5);
    l5.appendChild(clo5);
    l5.appendChild(col5);
    l5.appendChild(eco5);
    tbody.appendChild(l5);
    

    let l7 = document.createElement('tr');
    let jun7 = document.createElement('td');
    jun7.innerHTML = "Junho";
    let tur7 = document.createElement('td');
    tur7.innerHTML = "11";
    let cor7 = document.createElement('td');
    cor7.innerHTML = "8";
    let clo7 = document.createElement('td');
    clo7.innerHTML = "11";
    let col7 = document.createElement('td');
    col7.innerHTML = "11";
    let eco7 = document.createElement('td');
    eco7.innerHTML = "11";

    l7.appendChild(jun7);
    l7.appendChild(tur7);
    l7.appendChild(cor7);
    l7.appendChild(clo7);
    l7.appendChild(col5);
    l7.appendChild(eco7);
    tbody.appendChild(l7);

}

function rio_claro(){

    let l2 = document.createElement('tr');
    let jan2 = document.createElement('td');
    jan2.innerHTML = "Janeiro";
    let tur2 = document.createElement('td');
    tur2.innerHTML = "235";
    let cor2 = document.createElement('td');
    cor2.innerHTML = "81";
    let clo2 = document.createElement('td');
    clo2.innerHTML = "235";
    let col2 = document.createElement('td');
    col2.innerHTML = "235";
    let eco2 = document.createElement('td');
    eco2.innerHTML = "235";

    l2.appendChild(jan2);
    l2.appendChild(tur2);
    l2.appendChild(cor2);
    l2.appendChild(clo2);
    l2.appendChild(col2);
    l2.appendChild(eco2);
    tbody.appendChild(l2);


    let l3 = document.createElement('tr');
    let fev3 = document.createElement('td');
    fev3.innerHTML = "Fevereiro";
    let tur3 = document.createElement('td');
    tur3.innerHTML = "210";
    let cor3 = document.createElement('td');
    cor3.innerHTML = "70";
    let clo3 = document.createElement('td');
    clo3.innerHTML = "210";
    let col3 = document.createElement('td');
    col3.innerHTML = "210";
    let eco3 = document.createElement('td');
    eco3.innerHTML = "210";

    l3.appendChild(fev3);
    l3.appendChild(tur3);
    l3.appendChild(cor3);
    l3.appendChild(clo3);
    l3.appendChild(col3);
    l3.appendChild(eco3);
    tbody.appendChild(l3);


    let l4 = document.createElement('tr');
    let mar4 = document.createElement('td');
    mar4.innerHTML = "Março";
    let tur4 = document.createElement('td');
    tur4.innerHTML = "213";
    let cor4 = document.createElement('td');
    cor4.innerHTML = "67";
    let clo4 = document.createElement('td');
    clo4.innerHTML = "213";
    let col4 = document.createElement('td');
    col4.innerHTML = "213";
    let eco4 = document.createElement('td');
    eco4.innerHTML = "213";

    l4.appendChild(mar4);
    l4.appendChild(tur4);
    l4.appendChild(cor4);
    l4.appendChild(clo4);
    l4.appendChild(col4);
    l4.appendChild(eco4);
    tbody.appendChild(l4);


    let l6 = document.createElement('tr');
    let abr6 = document.createElement('td');
    abr6.innerHTML = "Abril";
    let tur6 = document.createElement('td');
    tur6.innerHTML = "215";
    let cor6 = document.createElement('td');
    cor6.innerHTML = "71";
    let clo6 = document.createElement('td');
    clo6.innerHTML = "215";
    let col6 = document.createElement('td');
    col6.innerHTML = "215";
    let eco6 = document.createElement('td');
    eco6.innerHTML = "215";

    l6.appendChild(abr6);
    l6.appendChild(tur6);
    l6.appendChild(cor6);
    l6.appendChild(clo6);
    l6.appendChild(col6);
    l6.appendChild(eco6);
    tbody.appendChild(l6);


    let l5 = document.createElement('tr');
    let mai5 = document.createElement('td');
    mai5.innerHTML = "Maio";
    let tur5 = document.createElement('td');
    tur5.innerHTML = "212";
    let cor5 = document.createElement('td');
    cor5.innerHTML = "68";
    let clo5 = document.createElement('td');
    clo5.innerHTML = "212";
    let col5 = document.createElement('td');
    col5.innerHTML = "212";
    let eco5 = document.createElement('td');
    eco5.innerHTML = "212";

    l5.appendChild(mai5);
    l5.appendChild(tur5);
    l5.appendChild(cor5);
    l5.appendChild(clo5);
    l5.appendChild(col5);
    l5.appendChild(eco5);
    tbody.appendChild(l5);
    

    let l7 = document.createElement('tr');
    let jun7 = document.createElement('td');
    jun7.innerHTML = "Junho";
    let tur7 = document.createElement('td');
    tur7.innerHTML = "210";
    let cor7 = document.createElement('td');
    cor7.innerHTML = "195";
    let clo7 = document.createElement('td');
    clo7.innerHTML = "210";
    let col7 = document.createElement('td');
    col7.innerHTML = "210";
    let eco7 = document.createElement('td');
    eco7.innerHTML = "210";

    l7.appendChild(jun7);
    l7.appendChild(tur7);
    l7.appendChild(cor7);
    l7.appendChild(clo7);
    l7.appendChild(col5);
    l7.appendChild(eco7);
    tbody.appendChild(l7);

}