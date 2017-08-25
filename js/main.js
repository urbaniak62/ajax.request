function loadDoc() {

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var array = JSON.parse(this.responseText);
      // triage par age-----------
      var val=document.getElementsByTagName("option");
      // for (var i = 0; i < val.length; i++) {
      //   console.log(val[i].value);
      //   val[i].addEventListener("click",function(){
      //     console.log(val[i].value)
      //   });
      // }


      for (let i = 0; i < val.length; i++) {
       val[i].addEventListener("click",function(){
         console.log(val[i].value);
       })
      }


      function trier(a,b){
        // if (a.age < b.age) {
        //   return -1;
        //
        // }
        if (a.prenom < b.prenom) {
          return -1;
        }
        else if (a.prenom > b.prenom) {
          return 1;
        }
        // if (a.nom < b.nom) {
        //   return -1;
        // }
        // else if (a.nom > b.nom) {
        //   return 1;
        // }
      }
      array.client.sort(trier);

      // array.client.sort(function(a,b){
      //     return a.age - b.age;
      // });
      for (var i in array.client) {
        console.table(array.client[i]);
         $("#table").append("<tr class='nom'><td>" + array.client[i].nom
         + "</td><td>" + array.client[i].prenom  + "</td> " + "<td>"
         + array.client[i].age + "</td></tr>")

      }


    }
  };
  xhttp.open("GET", "text.JSON", true);
  xhttp.send();
}
