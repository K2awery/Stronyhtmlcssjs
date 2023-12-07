
function funkcja() {
  
    imie= document.getElementById("imie").value;
     nazwisko=document.getElementById("nazwisko").value;
      adres = document.getElementById("adres").value;
      miasto = document.getElementById("misto").value;
     
      kp = document.getElementById("kp").value;
    pesel = document.getElementById("pesel").value;
      data = document.getElementById("data").value;
      
  pesel=pesel*1;
   
      
      b = " ";
      if(imie.length < 3) { b += "błąd "}
      document.getElementById("a").innerHTML = b;
     
       b = " ";
      if(nazwisko.length < 3) { b += "błąd "}
      document.getElementById("b").innerHTML = b;
      b = " ";
      if(adres.length < 2) { b += "błąd "}
      document.getElementById("c").innerHTML = b;
      b = " ";
      if(miasto.length < 2) { b += "błąd "}
      document.getElementById("d").innerHTML = b;
    b1 = " ";
      if(kp.length < 2) { b1 += "błąd "}
      document.getElementById("e").innerHTML = b1;
    b2 = " ";
      if(pesel.lenght <1 ) { b2 += "błąd "}
      document.getElementById("f").innerHTML = b2;
     
    function sprawdzKodPocztowy(kp) {
    // Wzorzec kodu pocztowego w Polsce
  kp = /^[0-9]{2}-[0-9]{3}$/;
  
    // Testuj tekst względem wzorca
    if (regex.test(kp)) {
      console.log('Kod pocztowy jest poprawny.');
    } else {
      console.log('Niepoprawny kod pocztowy.');
    }
  }
  
  }