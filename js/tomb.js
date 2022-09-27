var tomb = [99, 18, 25, 3, 8, 110, 37, 26, 112];

function tombKiir(){
    let span = document.getElementById("tomb-elemei");
    for(let i =0; i < tomb.length; i++){
        span.innerHTML += tomb[i] + ". ";
    }
}

function osszegzes(){
    let osszeg = 0;
    for(let i = 0; i< tomb.length; i++){
        osszeg += tomb[i];
    }

    document.getElementById("osszeg").innerHTML = osszeg;
}


function maxKivalasztas(){
    let max = tomb[0]

    for(let i = 1; i < tomb.length; i++)
    {
        if(tomb[i] > max)
        max = tomb[i]
    }
    document.getElementById("max").innerHTML = max;
}




function kivalasztas(szam){
    let index = -1;

    for(let i = 0; i < tomb.length && index == -1; i++)
    {
        if(tomb[i] == szam)
        index = i;
    }
    document.getElementById("index").innerHTML = index;
}




//házi: átlagoláselemek átlaga a tömbben