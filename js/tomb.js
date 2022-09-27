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



//házi: átlagoláselemek átlaga a tömbben