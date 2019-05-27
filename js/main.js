$(document).ready(function() {
  gente = [];
  $('.sidenav').sidenav();
  $('.fixed-action-btn').floatingActionButton();
  //$('.slider').slider();
  $('.dropdown-trigger').dropdown();
  $('.modal').modal();
  llenar();

  $('.entrar').on('click', function() {
    gente.forEach(function(persona) {
      if ($('#usuario').val() == persona.usuario && $('#pass').val() == persona.contra) {
        //console.log("si entraste cachon");
        let timerInterval
        Swal.fire({
          title: 'Espere un momento',
          html: '',
          timer: 2000,
          onBeforeOpen: () => {
            Swal.showLoading()
            timerInterval = setInterval(() => {
              /*Swal.getContent().querySelector('strong')
                .textContent = Swal.getTimerLeft()*/
            }, 100)
          },
          onClose: () => {
            $(".input-field").remove();
            $(".entrar").remove();
            if(persona.tipo == "socio"){
              console.log("aca entras a la pagina de socio cachon");
              $("#slide-out").append(`<li>
              <ul class="collapsible collapsible-accordion">
                  <li>
                    <a class="collapsible-header waves-effect waves-blue"><i class="material-icons">folder_special</i>Servicios de establo <i class="material-icons right" style="margin-right:0;">arrow_drop_down</i></a>
                    <div class="collapsible-body">
                      <ul>
                        <li><a class="waves-effect waves-blue hospedaje"><i class="material-icons">fullscreen</i>Hospedaje y alimentación<span class="new badge right yellow grey lighten-1" data-badge-caption="updated"></span></a></li>
                        <li><a class="waves-effect waves-blue"><i class="material-icons">swap_horiz</i>Aseo y ejercitación</a></li>
                        <li><a class="waves-effect waves-blue"><i class="material-icons">swap_horiz</i>Veterinario</a></li>
                        <li>
                          <div class="divider"></div>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </li>`)
              $("#slide-out").append('<li><a class="collapsible-header waves-effect waves-blue"><i class="material-icons">folder_special</i>Cursos de equitación</a></li>');
              $("#slide-out").append('<li><a class="collapsible-header waves-effect waves-blue"><i class="material-icons">folder_special</i>Paseos o cabalgatas</a></li>');
              $("#slide-out").append('<li><a class="collapsible-header waves-effect waves-blue"><i class="material-icons">folder_special</i>ofrecer mi caballo</a></li>');
              $('.collapsible').collapsible();
            }else if(persona.tipo == "administrador"){
              console.log("aca entras a la pagina de administrador cachon");
              $("#slide-out").append('<li><a class="collapsible-header waves-effect waves-blue"><i class="material-icons">folder_special</i>Hacerme socio</a></li>');
              $("#slide-out").append('<li><a class="collapsible-header waves-effect waves-blue"><i class="material-icons">folder_special</i>Paseos o cabalgatas</a></li>');
              location.replace("C:/Users/Usuario/Downloads/clubecuestre/admin/index.html");
//file:///C:/Users/Usuario/Downloads/clubecuestre/admin/index.html
            }else if(persona.tipo == "usuario"){
              console.log("aca entras a la pagina de usuario cachon");
            }
            localStorage.setItem("nombre", persona.nombre);
            localStorage.setItem("apellido", persona.apellido);
            localStorage.setItem("tipo", persona.tipo);
            clearInterval(timerInterval)
          }
        }).then((result) => {
          if (
            // Read more about handling dismissals
            result.dismiss === Swal.DismissReason.timer
          ) {
            //console.log('I was closed by the timer')
          }
        })
      }
    });
    //console.log($('#usuario').val());
  })
});


function llenar() {
  gente.push({
    usuario: "socio",
    contra: "socio123",
    nombre: "jose",
    apellido: "cantillo",
    tipo: "socio"
  })
  gente.push({
    usuario: "administrador",
    contra: "administrador123",
    nombre: "andres",
    apellido: "rodriguez",
    tipo: "administrador"
  })
  gente.push({
    usuario: "usuario",
    contra: "usuario123",
    nombre: "jasseth",
    apellido: "de la hoz",
    tipo: "usuario"
  })
}
