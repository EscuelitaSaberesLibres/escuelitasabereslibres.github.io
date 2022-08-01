var cerrarInfo = () => {
  
}


/*TODOS*/

//función para cambiar titulo de páginas
//usar una funcion de router para todas las páginas
//función para cambiar el color de fondo según lo requieran
// buscar cómo estandarizar el look del sitio
// usar reset: true para los templates
// colores en forma de circular gradient

/*$(document).ready(function() {
$(".inside").click(function () {
    $(".inside").removeClass("active");
    // $(".tab").addClass("active"); // instead of this do the below 
    $(this).addClass("active");   
});
});*/

// controla la fecha y que se mantenga acutalizada durante el tiempo

d = new Date();
document.querySelector("#year").innerHTML = d.getFullYear();

// controla que se cierre o abra el menu en modo cel

const controlNav = () => {
  var x = document.getElementById("mainNav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
};

/******** Contenidos de spreadsheets ********/

/* URLs */

var titulosURL = "https://docs.google.com/spreadsheets/d/1hwMFkS-XVETwnrspvueVgi3lM33RCyFflA2EeI5SiL4/edit#gid=1044860396"
var titulosTemplate = Handlebars.compile($("#titulos-template").html());


var inicioURL =
  "https://docs.google.com/spreadsheets/d/1hwMFkS-XVETwnrspvueVgi3lM33RCyFflA2EeI5SiL4/edit#gid=972359806";
var inicioTemplate = Handlebars.compile($("#inicio-template").html());
var imgIniTemplate = Handlebars.compile($("#imgIni-template").html());

var conozcaURL =
  "https://docs.google.com/spreadsheets/d/1hwMFkS-XVETwnrspvueVgi3lM33RCyFflA2EeI5SiL4/edit#gid=103943823";
var descTemplate = Handlebars.compile($("#desc-template").html());
var proyTemplate = Handlebars.compile($("#proy-template").html());

var cuadernosURL =
  "https://docs.google.com/spreadsheets/d/1hwMFkS-XVETwnrspvueVgi3lM33RCyFflA2EeI5SiL4/edit#gid=1004425867";
var cuadernosTemplate = Handlebars.compile($("#cuadernos-template").html());
var cuadernoContenidoTemplate = Handlebars.compile(
  $("#cuadernoContenido-template").html()
);

var calendarioURL =
  "https://docs.google.com/spreadsheets/d/1hwMFkS-XVETwnrspvueVgi3lM33RCyFflA2EeI5SiL4/edit#gid=1201349491";
var calendarioTemplate = Handlebars.compile($("#calendario-template").html());
var calendarioContenidoTemplate = Handlebars.compile($("#calendarioContenido-template").html());

var danzaCursosURL =
  "https://docs.google.com/spreadsheets/d/1hwMFkS-XVETwnrspvueVgi3lM33RCyFflA2EeI5SiL4/edit#gid=993289994";
var danzaCursosTemplate = Handlebars.compile($("#danza-template").html());


var danzaModulosURL =
  "https://docs.google.com/spreadsheets/d/1hwMFkS-XVETwnrspvueVgi3lM33RCyFflA2EeI5SiL4/edit#gid=471486049";
var danzaModulosTemplate = Handlebars.compile($("#danzaModulos-template").html());
var danzaModulosContenidoTemplate = Handlebars.compile($("#danzaModulosContenido-template").html());


var tiendaURL =
  "https://docs.google.com/spreadsheets/d/1hwMFkS-XVETwnrspvueVgi3lM33RCyFflA2EeI5SiL4/edit#gid=1863876325";
var tiendaTemplate = Handlebars.compile($("#tienda-template").html());
var tiendaContenidoTemplate = Handlebars.compile($("#tiendaContenido-template").html());

 
/* funciones que cargan el contenido */

// desplegar titulo

var setTitulo = (nombrePagina,idDiv) => {
  console.log(typeof(nombrePagina));
  $("#"+idDiv).sheetrock({
    url: titulosURL,
    rowTemplate: titulosTemplate,
    query: "select * where A = " + nombrePagina,
    reset: true,
  });
};

// limpiar contenido generado

const borrarContenido = () => {
  $(".dinamicos").html("");
};

//Cambiar color del fondo

const cambiarBackground = (backgroundId) => {
  const background = ["#A3E4D7","#E6EDEC","#EBDEF0","#D5F5E3","#D5F5E3","#D9D6D4","linen"]
                     // 0     , 1       ,  2      , 3        ,    4    ,  5     , 6     
  document.querySelector("#main").style.background = background[backgroundId];
}

// INICIO

var setContenidoInicio = () => {
  //$("#titulo").html("");
  $("#imgsInicio").sheetrock({
    url: inicioURL,
    rowTemplate: imgIniTemplate,
    reset: true,
  });

  $("#programasInicio").sheetrock({
    url: inicioURL,
    rowTemplate: inicioTemplate,
    reset: true
  });
};

// CONOZCANOS

var setContenidoConozcanos = () => {
  // $("#descripcion").html("");
  $("#descripcion").sheetrock({
    url: conozcaURL,
    rowTemplate: descTemplate,
    reset: true,
  });

  // $("#proyectosLista").html("");
  $("#proyectosLista").sheetrock({
    url: conozcaURL,
    rowTemplate: proyTemplate,
    reset: true,
  });
};

//*      CALENDARIO       */

var setContenidoCalendario = () => {
  // $("#calendario").html("");
  $("#calendario").sheetrock({
    url: calendarioURL,
    rowTemplate: calendarioTemplate,
    reset: true,
  });
};

// CALENDARIOINFO

var setContenidoCalendarioInfo = (id) => {
  console.log(id);
  //$("#calendarioContenido").html("");
  $("#calendarioContenido").sheetrock({
    url: calendarioURL,
    query: "select * where A = " + id,
    rowTemplate: calendarioContenidoTemplate,
    reset: true,
  });
};

//*       CUADERNOSINICIO      */

var setContenidoCuadernosIni = () => {
  // $("#cuadernos").html("");
  $("#cuadernos").sheetrock({
    url: cuadernosURL,
    rowTemplate: cuadernosTemplate,
    reset: true,
  });
};

// CUADERNO

var setContenidoCuadernosInfo = (id) => {
  console.log(id);
  $("#cuadernoContenido").sheetrock({
    url: cuadernosURL,
    query: "select * where A = " + id,
    rowTemplate: cuadernoContenidoTemplate,
    reset: true,
  });
};

// DANZA DE SABERES INICIO

var setContenidoDanzaIni = () => {
  $("#danza").sheetrock({
    url: danzaCursosURL,
    rowTemplate: danzaCursosTemplate,
    reset: true,
  });
};

// DANZA DE SABERES CURSO

var setContenidoDanzaCurso = (id) => {
  $("#danzaModulos").sheetrock({
    url: danzaModulosURL,
    rowTemplate: danzaModulosTemplate,
    query: "select * where B = " + id,
    reset: true,
  });
};

// DANZA DE SABERES MODULO

var setContenidoDanzaModulo = (id) => {
  $("#danzaContenido").sheetrock({
    url: danzaModulosURL,
    rowTemplate: danzaModulosContenidoTemplate,
    query: "select * where A = " + id,
    reset: true,
  });
  console.log(id)
};

// TIENDITA

var setContenidoTiendita = () => {
  $("#tiendita").sheetrock({
    url: tiendaURL,
    rowTemplate: tiendaTemplate,
    reset: true,
  });
};

var setContenidoTienditaProducto = (id) => {
  $("#tienditaContenido").sheetrock({
    url: tiendaURL,
    rowTemplate: tiendaContenidoTemplate,
    query: "select * where A = " + id,
    reset: true,
  });
};