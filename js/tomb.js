var tomb = [99, 18, 25, 3, 8, 110, 37, -2, 112];

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


function megSzamol(){
    let db = 0;

    for(let i = 0; i < tomb.length; i++)
    {
        if(tomb[i] >= 70 )
         db++;
    }
    document.getElementById("db").innerHTML = db;
}


function eldontes(){
    let van = false;

    for(let i = 0; i < tomb.length && !van; i++)
    {
        if(tomb[i] < 0 )
         van = true;
    }
    document.getElementById("dont").innerHTML = van?"Van ilyen elem":"Nincs ilyen elem";
}


function kivalogatas(){
    let paros = [];

    for(let i = 0; i < tomb.length; i++)
    {
        if(tomb[i] % 2 == 0 )
         paros.push(tomb[i]);
    }
    document.getElementById("paros").innerHTML = paros;
}

//alap alg - rendezés:




//házi: átlagoláselemek átlaga a tömbben