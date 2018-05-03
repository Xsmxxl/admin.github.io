var activar = false;

function abrir(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

function nuevo() {
    $('.nuevo').css('display', 'block');
    $('.buscar').css('display', 'none');
}
function buscar() {
    $('.buscar').css('display', 'block');
    $('.nuevo').css('display', 'none');
}
function pendientesAuth() {
    $('.pendientesAuth').css('display', 'block');
    $('.conectAuth').css('display', 'none');
}
function conectAuth() {
    $('.conectAuth').css('display', 'block');
    $('.pendientesAuth').css('display', 'none');
}

function enviarNuevoUsuario() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

function buscador() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("buscar");
  filter = input.value.toUpperCase();
  table = document.getElementById("tablaFiltro");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function sonLetras(evt)
{
	var charCode = (evt.which) ? evt.which : evt.keyCode;
	if (charCode != 46 && charCode > 31
	&& (charCode < 48 || charCode > 57))
	return false;
	return true;
}


function sonNumeros(evt)
{
	var charCode = (evt.which) ? evt.which : evt.keyCode;
	if (charCode != 46 && charCode > 31
	&& (charCode < 48 || charCode > 57))
	return true;
	return false;
}
