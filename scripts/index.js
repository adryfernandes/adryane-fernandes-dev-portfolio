function enviarEmail() {
  var assunto = document.getElementById("assunto").value;
  var mensagem = document.getElementById("mensagem").value;
  
  var link = "mailto:?subject=" + assunto + "&body=" + mensagem;
  window.location.href = link;
}