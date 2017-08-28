function loadDoc() {

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var array = JSON.parse(this.responseText);

      var val=document.getElementsByTagName("option");
      // for (var i = 0; i < val.length; i++) {
      //   console.log(val[i].value);
      //   val[i].addEventListener("click",function(){
      //     console.log(val[i].value)
      //   });
      // }

/*------------------boucle recuperation select----------*/

      for (let i = 0; i < val.length; i++) {
      val[i].addEventListener("click",function(){
         console.log(val[i].value);

       })
     }

/*----------------triage selon le select---------*/

      function trier(a,b){
        if (a.age < b.age) {
          return -1;

        }
        else {
          return 1;
        }
        if (a.prenom < b.prenom) {
          return -1;
        }
        else if (a.prenom > b.prenom) {
          return 1;
        }
        if (a.nom < b.nom) {
          return -1;
        }
        else if (a.nom > b.nom) {
          return 1;
        }
      }
      array.client.sort(trier);

/*--------------affichage JSON creation tableau-----------*/

      for (var i in array.client) {
        console.log(array.client[i]);
         $("#table").append("<tr class='nom'><td>" + array.client[i].nom
         + "</td><td>" + array.client[i].prenom  + "</td> " + "<td>"
         + array.client[i].age + "</td></tr>")

      }


    }
  };
  xhttp.open("GET", "text.JSON", true);
  xhttp.send();
}
