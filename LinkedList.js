class Node {
  constructor(data, next = null) {
    this.data = data; // Inicijalizuje podatak koji će čvor da čuva
    this.next = next; // Referenca na sledeći čvor u listi, podrazumevano je null
  }
}

class LinkedList {
  constructor() {
    this.head = null; // Inicijalizuje početak liste kao null (prazna lista)
  }

  insertFirst(data) {
    const node = new Node(data, this.head); // Kreira novi čvor sa datim podatkom i postavlja referencu na trenutnu glavu liste
    this.head = node; // Novi čvor postaje glava liste
  }

  size() {
    let counter = 0; // Brojač koji će da drži broj čvorova u listi
    let node = this.head; // Počinje od glave liste

    while (node) {
      // Dok god ima čvorova u listi
      counter++; // Povećava brojač
      node = node.next; // Pomiče se na sledeći čvor
    }

    return counter; // Vraća ukupan broj čvorova
  }

  getFirst() {
    return this.head; // Vraća prvi čvor u listi (glava liste)
  }

  getLast() {
    if (!this.head) {
      // Ako lista nema čvorova, vraća null
      return null;
    }

    let node = this.head; // Počinje od glave liste
    while (node) {
      if (!node.next) {
        // Ako nema sledećeg čvora, to je poslednji čvor
        return node; // Vraća taj čvor
      }
      node = node.next; // Pomiče se na sledeći čvor
    }
  }

  clear() {
    this.head = null; // Brisanje svih čvorova tako što se glava postavi na null
  }

  removeFirst() {
    if (!this.head) {
      // Ako nema čvorova u listi, nema šta da se obriše
      return;
    }

    this.head = this.head.next; // Glava liste postaje sledeći čvor, brišući time trenutnu glavu
  }

  removeLast() {
    if (!this.head) {
      // Ako nema čvorova, nema šta da se obriše
      return;
    }

    if (!this.head.next) {
      // Ako postoji samo jedan čvor, postavlja glavu na null
      this.head = null;
      return;
    }

    let previous = this.head; // Prethodni čvor
    let node = this.head.next; // Trenutni čvor
    while (node.next) {
      // Dok god postoji sledeći čvor
      previous = node; // Azurira prethodni čvor
      node = node.next; // Pomiče se na sledeći čvor
    }
    previous.next = null; // Briše referencu na poslednji čvor, time brišući poslednji čvor
  }

  insertLast(data) {
    const last = this.getLast(); // Dohvata poslednji čvor

    if (last) {
      last.next = new Node(data); // Ako poslednji čvor postoji, dodaje novi čvor na kraj
    } else {
      this.head = new Node(data); // Ako ne postoji, novi čvor postaje glava liste
    }
  }

  getAt(index) {
    let counter = 0; // Brojač za praćenje indeksa
    let node = this.head; // Počinje od glave liste

    while (node) {
      // Dok god ima čvorova
      if (counter === index) {
        // Ako je brojač jednak indeksu, vraća trenutni čvor
        return node;
      }

      counter++; // Povećava brojač
      node = node.next; // Pomiče se na sledeći čvor
    }
    return null; // Ako indeks nije validan, vraća null
  }

  removeAt(index) {
    if (!this.head) {
      // Ako nema čvorova, nema šta da se obriše
      return;
    }

    if (index === 0) {
      // Ako je indeks 0, briše glavu liste
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1); // Dohvata prethodni čvor
    if (!previous || !previous.next) {
      // Ako prethodni čvor ne postoji ili nema sledeći čvor, prekida funkciju
      return;
    }
    previous.next = previous.next.next; // Postavlja referencu prethodnog čvora na čvor koji se nalazi za dva mesta napred, preskačući time čvor koji treba da se obriše
  }
}

//


deleteMiddle(){ 
  if(!this.head)return

let slow= this.head
let fast= this.head
let prev=null

while(fast&&fast.next){
  prev=slow
  slow=slow.next
  fast=fast.next.next
}
if(prev){
  prev.next=slow.next
}
else{
  this.head=null
}
}