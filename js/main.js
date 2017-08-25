function loadDoc() {

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var array = JSON.parse(this.responseText);
      for (var i in array.client) {
        console.log(array.client[i]);
         $("#table").append("<tr class='nom'><td>" + array.client[i].nom
         + "</td><td>" + array.client[i].prenom  + "</td> " + "<td>"
         + array.client[i].age + "</td></tr>")

      //   function tableau (nom, prenom, age){
      //     this.nom=nom,
      //     this.prenom=prenom,
      //     this.age=age,
      //     this.getName=function(){
      //
      //     };
      //
      // };
      }

//   function tableau (nom, prenom, age){
      //     this.nom=nom,
      //     this.prenom=prenom,
      //     this.age=age,
      //     this.getName=function(){
      //

    }
  };
  xhttp.open("GET", "text.JSON", true);
  xhttp.send();
}
