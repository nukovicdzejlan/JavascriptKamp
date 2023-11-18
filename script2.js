let ucenik = {
    ime: "Muhammed",
    prezime:"Besirovic",
    godine:0
}
ucenik['godine']++
ucenik['ocena']=1


// "asd"="dsa"
let b={a:1,s:1,d:1}
let a={a:1,s:1,d:1}
// let a={d:1,s:1,a:1}
if(a===b){
    console.log('jednako');
} else{
    console.log('nije');
}


function izbrojKaraktere(string1,string2){
    let mapaKaraktera = {}
    for(let slovo of string1){
        if(mapaKaraktera[slovo]){
            mapaKaraktera[slovo]++
        } else {
            mapaKaraktera[slovo]= 1
        }
    }
    let najvecaVrednost = 2
    let najcesciKarakter = "a"
    //"aasd" > {a:2,s:1,d:1}
    for(let kljuc in mapaKaraktera){
       if(mapaKaraktera[kljuc]>najvecaVrednost){
        najvecaVrednost=mapaKaraktera[kljuc]
        najcesciKarakter=kljuc
       }
    }

    return {najvecaVrednost,najcesciKarakter}
}

// let recenica = "iausdshdihaiaaaoosodu9888888"
// console.log(izbrojKaraktere(recenica));