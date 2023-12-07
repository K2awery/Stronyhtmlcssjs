f = document.getElementById("form");
w = document.getElementById("wypluwacz");
b = "</br>"
f.name.addEventListener("change", function(e){
  walid(this);
});
f.surname.addEventListener("change", function(e){
    walid(this);
});
f.dob.addEventListener("change", function(e){
    walid(this);
  });
  f.children.addEventListener("change", function(e){
      walid(this);
    });
      f.shoe_size.addEventListener("change", function(e){
        walid(this);
      });
      f.level.addEventListener("change", function(e){
          walid(this);});
function walid(v){
 if(v.value.length > 3){
   w.innerHTML+= v.name +":";
    w.innerHTML+= v.value +b;
    v.style.color ="#fff";
    v.style.backgroundColor ="blue";
 }else{


    v.style.color="blue";
    v.style.backgroundColor="red";
 }
}




    //osoba={
   // imie:"Ksawery",
   // nazwisko:"kaplanek",
   // wiek: 17,
//dodajZnak: function(){
//let dane = "<b>" + this.imie+"</b><br>";
// dane = "<b>" + this.nazwisko+"</b><br>";
 //dane = "<b>" + this.wiek+"</b><br>";
//return dane;
//}
//}
//w.innerHTML=f.name.value;