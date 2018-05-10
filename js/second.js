// Initialize Firebase
var config = {
  apiKey: "AIzaSyAZgn1TeDnME8W6OVhQ-sjc3ziBgIBgzjA",
  authDomain: "prueba-f0cab.firebaseapp.com",
  databaseURL: "https://prueba-f0cab.firebaseio.com",
  projectId: "prueba-f0cab",
  storageBucket: "prueba-f0cab.appspot.com",
  messagingSenderId: "344060592616"
};
firebase.initializeApp(config);

const db = firebase.database().ref('url');
const dbe = firebase.firestore();

const divS = document.getElementById('content');
const divTwo = document.getElementById('content2');

dbe.collection("validar_url").get().then(function(snap){
    snap.forEach((doc) => {
        divTwo.innerHTML += `<div class="card my-2"> ${doc.id} => ${doc.data().urls} </div>`;
    });
});

db.once('value').then(function(snap){
    //divS.innerText = snap.val();
    console.log(snap.val());
});

var cont = 1;
var pos = 0;

$(document).ready(inicio);

function inicio(){
    var url = $(location).attr('href');
    pos = url.search("#");
    var loquedice = '';
    if (pos != 0) {
        for (var i = (pos + 1); i < url.length; i++) {
            loquedice += url[i];
        }
        window.alert(loquedice);
    }else {
        //window.alert("¡URL no válido!");
        window.alert(pos);
    }
}

function crearDiv(){
    if (cont < 0) {
        $("#remover").css('display', 'none');
    }else {
        $("#contenedor").append(`
        <div class='card my-2' id='${cont}'>
            prueba ${cont}
        </div>`);
        $("#remover").css('display', 'inline');
        cont += 1;
    }
}
function deshacerDiv(){
    cont -= 1;
    $("#"+cont).remove();
    if (cont < 2) {
        $("#remover").css('display', 'none');
    }
}
