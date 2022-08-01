/* router - rutas para cada página
permite activar los templates necesarios para cargar contenido en la página */

window.addEventListener("load", () => {
  const router = new Navigo("/", { hash: true });
  //const render = (content) => (document.querySelector("#contenido").innerHTML = content);

  router
    .on("/calendario", (match) => {
      borrarContenido();
      setTitulo(2,"titulosSecciones")
      setContenidoCalendario();
      cambiarBackground(1);  // cambiar Color de Fondo Calendario
    })
    .on("/calendario/evento", (match) => {
      borrarContenido();
      setContenidoCalendarioInfo(Object.keys(match.params)[0]);
      cambiarBackground(1); // cambiar Color de Fondo Eventos de Calendario
    })
    .on("/conozcanos", (match) => {
      borrarContenido();
      setTitulo(5,"titulosSecciones")
      setTitulo(6,"tituloProyectos")
      setContenidoConozcanos();
      cambiarBackground(2); // cambiar Color de Fondo Conózcanos
    })
    .on("/cuadernos", (match) => {
      borrarContenido();
      setTitulo(3,"titulosSecciones")
      setContenidoCuadernosIni();
      console.log("cuadernos");
      cambiarBackground(3); // cambiar Color de Fondo Cuadernos
    })
    .on("/cuadernos/cuaderno", (match) => {
      borrarContenido();
    
      setContenidoCuadernosInfo(Object.keys(match.params)[0]);
      cambiarBackground(3); // cambiar Color de Fondo Contenido Cuaderno
    })
    .on("/danzasaberes", (match) => {
      borrarContenido();
      setTitulo(4,"titulosSecciones")
      setContenidoDanzaIni();
      cambiarBackground(5); // cambiar Color de Fondo Danza Saberes
    })
    .on("/danzasaberes/curso", (match) => {
      borrarContenido();
      setTitulo(7,"titulosSecciones")
      setContenidoDanzaCurso(JSON.stringify(Object.keys(match.params)[0]));
      cambiarBackground(5); // cambiar Color de Fondo Curso
    })
    .on("/danzasaberes/mod", (match) => {
      borrarContenido();
      setContenidoDanzaModulo(Object.keys(match.params)[0]);
      cambiarBackground(5); // cambiar Color de Fondo Modulo
    })
    .on("/tiendita", (match) => {
      borrarContenido();
    setTitulo(8,"titulosSecciones")
      setContenidoTiendita();
    cambiarBackground(6);  // cambiar Color de Fondo Tiendita
    })
  .on("/tiendita/producto", (match) => {
      borrarContenido();
      setContenidoTienditaProducto(Object.keys(match.params)[0]);
    cambiarBackground(6); // cambiar Color de Fondo Producto
    })
    .on((match) => {
      borrarContenido();
      setTitulo(1,"tituloInicio")
      setContenidoInicio();
      cambiarBackground(6);  // cambiar Color de Fondo Inicio
    })
    .notFound(() => {
      console.log("404");
      cambiarBackground(0);
    })
    .resolve();
});
