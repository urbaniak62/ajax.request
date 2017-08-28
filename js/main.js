function loadDoc() {

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var array = JSON.parse(this.responseText);
      $("#table").text(" ");
      /*------------------boucle recuperation select----------*/

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


/*----------------triage selon le select---------*/

      function trier(a,b){
        var select=document.getElementById("listClient").value;
        console.log(select);
        if (  a[select] < b[select]) {
          return -1;
        }
        else {
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
