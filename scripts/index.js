function enviarEmail() {
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;
  
  var link = "mailto:adryane.fernandes.dev@gmail.com?subject=" + subject + "&body=" + message;
  window.location.href = link;
}