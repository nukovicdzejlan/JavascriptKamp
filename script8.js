//Que
// Klasa(10,'K') > polja: Celzius,Farenhajt,Kelvin
// 4 metode :
// (C * 9/5 )+ 32 // Iz C u F
// C + 273.15  // IZ C u K
// (F - 32) * 9/5  // Iz F u C
// K - 273.15  // IZ K U C

let konvertovaneVrednosti = new Konvertor(10,'C')
class Konvertor{
    constructor(vrednost,skala){
        if(skala === 'C'){
            this.celzijus=vrednost
            this.farenhajt=this.uFarenhajt(vrednost)
            this.kelvin=this.uKelvin(vrednost)
        } else if (skala=== 'K'){
            this.kelvin=vrednost
            this.celzijus=this.izKelvinUCelzius(vrednost)
            this.farenhajt=this.uFarenhajt(this.celzijus)
        } else if (skala === 'F'){
            this.farenhajt = vrednost
            this.celzijus = this.izFarUCelzius(vrednost)
            this.kelvin = this.uKelvin(this.celzijus)
        }
    }

    uFarenhajt(celzijusVrednost){
        return (celzijusVrednost* 9/5) + 32
    }
    uKelvin(celzijusVrednost){
        return celzijusVrednost + 273.15
    }

    izFarUCelzius(farenhajtVrednost){
       return (farenhajtVrednost-32) * 9/5
    }

    izKelvinUCelzius(kelvinVrednost){
        return kelvinVrednost - 273.15
    }
}


// let rezultat = new Klasa(10,'C')
// console.log(rezultat);
// //[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// // fibonaci(6) - > 5

// function fibonaci(n){
//     let niz= [0,1]
//     for(let i = 2;i<=n;i++){
//         const a=niz[i-1]
//         const b=niz[i-2]

//         niz.push(a+b)
//     }
//     return niz[n]
// }

// class Red { 
//     red = []

//     dodaj(vrednost){
//        return this.red.unshift(vrednost)
//     }
//     obrisi(){
//        return this.red.pop()
//     }
//     pogledaj(){
//         return this.red[this.red.length-1]
//     }
// }

// let mojRed1 = new Red()
// mojRed1.dodaj(1)
// mojRed1.dodaj(2)
// mojRed1.dodaj(3)
// let mojRed2 = new Red()
// mojRed2.dodaj('a')
// mojRed2.dodaj('b')
// mojRed2.dodaj('c')


// class Pletenje{
//     finalniRed = new Red()
//     constructor(red1,red2){
//         while(red1.pogledaj() || red2.pogledaj()){
//             if(red1.pogledaj()){
//             this.finalniRed.dodaj(red1.obrisi())
//             }

//             if(red2.pogledaj()){
//                 this.finalniRed.dodaj(red2.obrisi())
//             }
//         }
//     }
// }



// function domaci(red1, red2) {
//     const q = new Red();
  
//     while (red1.pogledaj() || red2.pogledaj()) {
//       if (red1.pogledaj()) {
//         q.dodaj(red1.obrisi());
//       }
  
//       if (red2.pogledaj()) {
//         q.dodaj(red2.obrisi());
//       }
//     }
  
//     return q;
//   }
//   console.log(domaci(mojRed1,mojRed2));
// funkcija(a,b) >>> [1,a,2,a,3,a]

// class Temperatura {
//     constructor(vrednost, skala) {
//         if (skala === 'C') {
//             this.celzijus = vrednost;
//             this.farenhajt = this.uFahrenheit(vrednost);
//             this.kelvin = this.uKelvin(vrednost);
//         } else if (skala === 'F') {
//             this.farenhajt = vrednost;
//             this.celzijus = this.uCelzijusIzF(vrednost);
//             this.kelvin = this.uKelvin(this.celzijus);
//         } else if (skala === 'K') {
//             this.kelvin = vrednost;
//             this.celzijus = this.uCelzijusIzK(vrednost);
//             this.farenhajt = this.uFahrenheit(this.celzijus);
//         } else {
//             console.log('greska');
//         }
//     }

//     uFahrenheit(celzijusVrednost) {
//         return celzijusVrednost * 9/5 + 32;
//     }

//     uCelzijusIzF(farenhajtVrednost) {
//         return (farenhajtVrednost - 32) * 5/9;
//     }

//     uKelvin(celzijusVrednost) {
//         return celzijusVrednost + 273.15;
//     }

//     uCelzijusIzK(kelvinVrednost) {
//         return kelvinVrednost - 273.15;
//     }
// }

// const temp = new Temperatura(0, 'C');
// console.log(temp.celzijus); 
// console.log(temp.farenhajt); 
// console.log(temp.kelvin); 

//Artikl i Korpa
//Artikl polja: ime , cena , kolicina
//Korpa polja: listaArtikala
//Korpa metode: dodaj(), ukloni(), naplati()-> zbir cene i kolicine svih proizvoda
let lista = ['Muhammed','Salih','Amina']
lista.includes()

lista.indexOf('Amina') // > 2
lista.findIndex(artikal => artikal.ime === 'banana') // index

lista.filter(artikal => artikal.ime !== 'banana')

class Artikal{
    constructor(ime,cena,kolicina){
        this.ime=ime
        this.cena=cena
        this.kolicina=kolicina
    }
}

let banana = new Artikal('banana',10,10)