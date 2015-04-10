// Stwórz tablicę złożoną z 10 elementów i wyświetl je w konsoli po kolei

var tablicaimion = ["Anita", "Angelika", "Wiktoria", "Aleksandra", "Elżbieta", "Wiktor", "Sebastian", "Małgorzata", "Damian", "Daniel"];

for (var i = 0; i < tablicaimion.length; i++)
{
 console.log(tablicaimion[i]);
}

// Wyświetl w konsoli liczby parzyste od 0 do 100

for (var i = 0; i =< 100; i+=2)
{
  console.log(i);
}

// Wyświetl w konsoli liczby od 100 do 1
for (var i = 100; i >= 0; i--)
{
  console.log(i);
}

// * Stwórz tablicę, a następnie przy pomocą pętli stwórz tablicę zawierającą te same elementy w odwrotnej kolejności. Wyświetl je w alercie.

var tablica = [0, 1, 2, 3, 4, 5];
var returnTablica = [];
for (var i = tablica.length-1; i>=0;i--){
console.log(i);
returnTablica.push(tablica[i]);
}
alert(returnTablica);
// ** Za pomocą pętli policz silnię z dowolnej, podanej liczby

function silniazzero(liczba) {
  if(liczba === 0){
    return 1;
  }
var silnia = 1;
for (var i = 1; i <= liczba; i++) {
silnia *= i;
  };
  return silnia;
}
var liczba = prompt("Wpisz liczbę!");
console.log(silniazzero(liczba));

// Stwórz obiekt i wyświetl na stronie wszystkie jego elementy w formacie: "(klucz) wynosi (wartość)". Funkcji nie wywołuj w konsoli

var apartament = {home: "mine", bed: "big", carpet: "white"};

for (klucz in apartament) {
  document.write(klucz + " is "  + apartament[klucz] + "<br>");
};


// stwórz tablicę zawierającą 3 obiekty. Wyświetl na stronie wszystkie elementy wszystkich obiektów, zaznaczając którego obiektu elementy są wyświetlone. Funkcji nie wywołuj w konsoli
var show = function(){
var I = {feeling: "confused", showing: "smiling"};
var he = {feeling: "love", showing: "sadness"};
var we = {feeling: "blue", showing: "awarness"};

var everything = [I, he, we];

for (var i = 0; i < everything.length; i++){
  document.write("<br>" + "element " + i + " is contained ");
  for (var key in everything[i]){
    document.write(" " + key + " is the same that " + everything[i][key] + "<br>");
  }
}
}
show();

// Stwórz tablicę złożoną z 10 kolejnych wielokrotności liczby 5 za pomocą pętli while
var multipleOf5 = function(){

  i = 1;
  multi = [];

  while (i<=10){
    multi.push(5 * i);
    i++;
  }
  console.log(multi);

}
multipleOf5();
// Wyświetl w konsoli liczby parzyste od 0 do 100 za pomocą pętli while
var evenNumbers = function(){

i = 0;

while (i<=100) {
  console.log(i);
  i+=2;
  }
}
evenNumbers();
// * Pobieraj od użytkownika liczby tak długo, aż wpiszę liczbę większą niż 50. Wtedy wyświetl tablicę złożoną z wpisanych dotychczas liczb na stronie

var arrayLessThen50 = function(){

  var pobieraj = prompt("Give me a number!");
  var pobrane = [];

  while (pobieraj < 50) {
  pobrane.push(pobieraj);
  pobieraj = prompt("Give me a number!");
}
};
arrayLessThen50();

// Wypisz na stronie elementy poniższej tablicy do elementu "stop" włącznie.
// var myArray = ['uczę', 'się', 'programować', 'stop', 'lubię', 'to']
var stopArray = function(){

  var myArray = ['uczę', 'się', 'programować', 'stop', 'lubię', 'to'];
  var i = -1;

  do {
    i++;
    console.log(myArray[i]);
  }
  while(myArray[i]!='stop');
};

stopArray();

// Pobieraj od użytkownika liczby tak długo, aż wpiszę liczbę większą niż 50. Wtedy wyświetl tablicę złożoną z wpisanych dotychczas liczb na stronie z ostatnią włącznie

var including50 = function(){
    var pobieraj = prompt("Give me a number!");
    var pobrane = [];

  do {
    pobrane.push(pobieraj);
    pobieraj = prompt("Give me a number!");
  }

    while (pobrane[pobrane.length - 1] < 50);
    console.log(pobrane);
};
  including50();

// Poproś użytkownika o wpisanie imienia i godziny. W alercie wyświetl użytkownikowi powitanie wraz z imieniem. Jeśli godzina wpisana przez użytkownika jest od 6 do 12, powitanie powinno brzmieć "dzień dobry", od 12 do 18 "Jak mija dzień?", od 18 do północy "Dobry wieczór", a od północy do 6 "idź spać!!!"
var nameAndHour = function(){
var name = prompt("What's your name?");
var hour = prompt("What time is it?");

switch(true) {
  case(hour >= 6 && hour < 12):
    alert("Dzień dobry " + name + "!!!");
    break;
  case (hour >= 12 && hour < 18):
    alert("Jak mija dzień " + name + "???");
    break;
  case (hour >= 18 && hour < 24):
    alert("Dobry wieczor " + name + "!!!");
    break;
  case (hour >= 0 && hour < 6):
    alert("Idź spać " + name + "!!!");
    break;
  }
};
nameAndHour();
