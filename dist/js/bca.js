// social bar
document.getElementById("social-bar").innerHTML = `
<div class="social-icon" title="Siga-nos no Instagram">
<a>
  <i class="fab fa-instagram"></i>          
</a>
</div>
<div class="social-icon" title="Curta no Facebook">
<a>
  <i class="fab fa-facebook"></i>
</a>
</div>
<div class="social-icon" title="Siga-nos no Linkedin">
<a href="https://www.linkedin.com/in/levi-carvalho-7171b225/" target="_blank">
<i class="fab fa-linkedin"></i>
</a>
</div>
<div class="social-icon" title="Envie um E-mail">
<a href="mailto:levibatistadecarvalho@gmail.com?subject=Contato via site Batista de Carvalho&body=Inclua aqui seus questionamentos e dúvidas&bcc=levi.carvalho1@gmail.com" target="_blank">
  <i class="fas fa-envelope"></i>
</a>
</div>
<div class="social-icon" title="Chame-nos no WhatsApp">
<a href="https://wa.link/ovv4nw" target="_blank">
  <i class="fab fa-whatsapp"></i>
</a>
</div>
<div class="social-icon telefone" title="Vamos bater um papo? (11) 985.775.279">        
  <i>(11) 985.775.279</i>        
</div>
`
// navbar
document.getElementById("menu").innerHTML = `
<div class="container">  
  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="/"><img src="/dist/img/logo-horizontal.png" class="img-responsive" alt="Batista de Carvalho Advocacia"></a>
      </div>
      <div id="navbar" class="navbar-collapse collapse">
        <ul class="nav navbar-nav navbar-right">
          <li id="actIni"><a href="/" id="inicio"></a></li>
          <li id="actSob"><a href="/o-escritorio/" id="sobre"></a></li>
          <li class="dropdown" id="actAtu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" id="atuacao"></a>
            <ul class="dropdown-menu" id="areas-atuacao">            
              <li class="dropdown-header">Pessoa Jurídica</li>
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>            
              <!--li role="separator" class="divider"></li-->
              <li class="dropdown-header">Pessoa Física</li>
              <li><a href="#">Separated link</a></li>
              <li><a href="#">One more separated link</a></li>            
            </ul>
          </li>          
          <li  id="actNot"><a href="/artigos/" id="noticias"></a></li>
          <li  id="actCon"><a href="/contato/" id="contato"></a></li>
        </ul>
      </div>
    </div>
  </nav>

</div>
`;
var btInicio = document.getElementById("inicio");
var btAtuacao = document.getElementById("atuacao");
var btSobre = document.getElementById("sobre");
var btNoticias = document.getElementById("noticias");
var btContato = document.getElementById("contato");

btInicio.innerHTML = 'Início';
btAtuacao.innerHTML = 'Áreas de Atuação <span class="caret"></span>';
btSobre.innerHTML = 'o escritório';
btNoticias.innerHTML = 'artigos';
btContato.innerHTML = 'Contato';

var actInicio = document.getElementById("actIni");
var actAtuacao = document.getElementById("actAtu");
var actSobre = document.getElementById("actSob");
var actNoticias = document.getElementById("actNot");
var actContato = document.getElementById("actCon");

var activeBts = [actInicio, actSobre, actAtuacao,actNoticias, actContato];
activeBts[0,1,2,3,4].addEventListener("click", function() {
  activeBts[i].classList.remove('active');
  // i.classList.add('active');
});


// clique fora do hamburguer para fechar menu
jQuery('body').bind('click', function(e) {
    if(jQuery(e.target).closest('.navbar').length == 0) {
        // click happened outside of .navbar, so hide
        var opened = jQuery('.navbar-collapse').hasClass('collapse in');
        if ( opened === true ) {
            jQuery('.navbar-collapse').collapse('hide');
        }
    }
});
// Abrir dropdown no hover
const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";
$(window).on("load resize", function() {
  if (this.matchMedia("(min-width: 1024px)").matches) {
    $dropdown.hover(
      function() {
        const $this = $(this);
        $this.addClass(showClass);
        $this.addClass('hover');
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
      },
      function() {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.removeClass('hover');
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
      }
    );
  } else {
    $dropdown.off("mouseenter mouseleave");
  }
});

// rodapé
document.getElementById('rodape').innerHTML = `

<p>&copy; 2021 Batista de Carvalho Advocacia. &middot;</p>
<a href="#topo"><i class="fa fa-chevron-up"></i></a>

`