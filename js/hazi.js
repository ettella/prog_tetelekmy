let nevek = ["Rómeó", "Péter", "Éva", "Lajos", "Júlia","Eszter", "Arnold", "Fruzsina", "Gáspár"];


function kiir(){
    // nevek.forEach((x)=>{x.length > 0});
    // document.getElementById("kiir").innerHTML = nevek;
    //más megoldás:

    let kiiratott = nevek.valueOf();
    document.getElementById("kiir").innerHTML = kiiratott;
}


function hanyadik(){
    let hanyadikNev = nevek.indexOf("Júlia");

    document.getElementById("hanyadik").innerHTML = hanyadikNev;
}

function rendezes(){
    nevek.sort()
    document.getElementById("abc").innerHTML = nevek;
}


function eldontes(){

    let van = false;

    for(let i = 0; i < nevek.length && !van; i++)
    {
        if(nevek[i] === "Gáspár" )
         van = true;
    }
    document.getElementById("eldont").innerHTML = van?"Van ilyen elem":"Nincs ilyen elem";

}



function legrovidebbNev(){
    let nev = nevek[0]

    for(let i = 1; i < nevek.length; i++)
    {
        if(nevek[i] > nev)
        nev = nevek[i]
    }

    document.getElementById("legrovidebb").innerHTML = nev;
}


function valasztas(){
    // let db = 0;

    // for(let i = 0; i < tomb.length; i++)
    // {
    //     if(nevek[i] === "A")
    //      db++;
    // }
    // document.getElementById("valasztott").innerHTML = db;


}


function valogatas(){
    let negyVagyOt = [];

    for(let i = 0; i < nevek.length; i++)
    {
        if(nevek[i].length == 4 || nevek[i].length == 5 )
         negyVagyOt.push(nevek[i]);
    }
    
    document.getElementById("valogatott").innerHTML = negyVagyOt;

}

