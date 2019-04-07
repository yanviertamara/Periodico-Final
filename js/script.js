function valida(f) {
  var ver = true;
  var msg = "Faltan datos en los campos:\n";
  if(f.nombres.value == "")
  {
    msg += "- Nombres\n";
    ver = false;
  }

  if(f.apellidos.value == "")
  {
    msg += "- Apellidos\n";
    ver = false;
  }

  if(!document.querySelector('input[name="1"]:checked')) {
    msg += "- Genero\n";
     ver = false;
  }

  if(f.edad.selectedIndex==0)
  {
    msg += "- Edad\n";
    ver = false;
  }

  if(f.email.value == "")
  {
    msg += "- Email\n";
    ver = false;
  }

  if(f.motivo.value==0)
  {
    msg += "- Motivo\n";
    ver = false;
  }

  if(ver == false){
    alert(msg);
  return ver;
  }else {
  alert('Sus datos se han enviado correctamente');
  }

}
