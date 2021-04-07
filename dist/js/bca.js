// social bar
document.getElementById("social-bar").innerHTML = `
<div class="social-icon">
<a>
  <i class="fab fa-instagram"></i>          
</a>
</div>
<div class="social-icon">
<a>
  <i class="fab fa-facebook"></i>
</a>
</div>
<div class="social-icon">
<a href="https://www.linkedin.com/in/levi-carvalho-7171b225/" target="_blank">
  <i class="fab fa-linkedin"></i>
</a>
</div>
<div class="social-icon telefone">        
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
          <li id="actSob"><a href="/sobre/" id="sobre"></a></li>
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
          <li  id="actCas"><a href="#" id="cases"></a></li>
          <li  id="actNot"><a href="#" id="noticias"></a></li>
          <li  id="actCon"><a href="#" id="contato"></a></li>
        </ul>
      </div>
    </div>
  </nav>

</div>

`;
var btInicio = document.getElementById("inicio");
var btAtuacao = document.getElementById("atuacao");
var btSobre = document.getElementById("sobre");
var btCases = document.getElementById("cases");
var btNoticias = document.getElementById("noticias");
var btContato = document.getElementById("contato");

btInicio.innerHTML = 'Início';
btAtuacao.innerHTML = 'Áreas de Atuação <span class="caret"></span>';
btSobre.innerHTML = 'Sobre';
btCases.innerHTML = 'Cases de Sucesso';
btNoticias.innerHTML = 'Notícias';
btContato.innerHTML = 'Contato';

var actInicio = document.getElementById("actIni");
var actAtuacao = document.getElementById("actAtu");
var actSobre = document.getElementById("actSob");
var actCases = document.getElementById("actCas");
var actNoticias = document.getElementById("actNot");
var actContato = document.getElementById("actCon");

var activeBts = [actInicio, actSobre, actAtuacao, actCases,actNoticias, actContato];
activeBts[0,1,2,3,4,5].addEventListener("click", function() {
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