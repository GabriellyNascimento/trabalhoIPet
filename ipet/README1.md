<!DOCTYPE html>
<html lang="en">
<head>
  <title>Cadastro de Clientes IPet</title>
  <meta charset="utf-8">
  <link rel="icon" href="" type="" sizes="16x16">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" media="all" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900" rel="stylesheet">
<link rel="stylesheet" href="css/animate.css">
<!-- Estilo do recurso -->
<link rel="stylesheet" href="css/owl.carousel.css">
<link rel="stylesheet" href="css/owl.theme.css">
<link rel="stylesheet" href="css/ionicons.min.css">
<!-- Estilo do recurso -->
<link href="css/style.css" rel="stylesheet" type="text/css" media="all" />
  <style >
  	legend{
  		style="padding-bottom: 15px; 
  		padding-top: 30px;
  		border-bottom: 1px dotted  #D3D3D3;
  		font-weight: bold;
  		font-size: 14px;"
  	}
  </style>
</head>
<body>
  <div class="wrapper">

  <div class="container">
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container"> 
        <!-- Marque e alterne para agrupar para melhor exibição em dispositivos móveis -->
        <div class="navbar-header page-scroll">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false"> <span class="sr-only">Alternar de navegação</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
          <a class="navbar-brand page-scroll" href="#main"><img src="images/logo.png" width="80" height="30" alt="" /></a> </div>
        <!-- Colete os links de navegação, formulários e outros conteúdos para alternar -->
        <div class="collapse navbar-collapse navbar-right" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li><a  href="#main">Home</a></li>
            <li><a  href="#classes">Serviços</a></li>
            <li><a  href="cad.html">Cadastro</a></li>
            <li><a  href="#review">Depoimentos</a></li>
            <li><a  href="#contact">Contato</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- /.navbar-collapse --> 
  </div>
  <div class="container">
    
 

<br><br><br><br><br><br>

    <br>
  <form> 	
  	<fieldset>
  	<legend>DADOS PESSOAIS</legend>
     <br>         
  <div class="row">
    
    <div class="col-xs-6">
      <label for="usr">*Nome:</label>
      <input type="text" class="form-control" id="usr" required>
      </div>

      <div class="col-xs-6">
      <label for="usr">*Sobrenome:</label>
      <input type="text" class="form-control" id="usr" required>
      </div>

    </div>
    <br>

    <div class="row">
    <div class="col-xs-3">
	<label for="usr">Telefone</label>
    <input type="text" class="form-control" id="usr">	
    </div>

    <div class="col-xs-1"></div>

	<div class="col-xs-3">
	<label for="usr">Data de Nascimento:</label>
    <input type="text" class="form-control" id="usr">
    </div>

    <div class="col-xs-1"></div>

    <div class="col-xs-2">
	<label for="usr">CPF</label>
    <input type="text" class="form-control" id="usr">	
    </div>

    <div class="col-xs-2">
	<label for="usr">RG</label>
    <input type="text" class="form-control" id="usr">	
    </div>

    </div>
    </fieldset>
    <br><br>
    <fieldset>
    	<legend>DADOS DE ENDEREÇO</legend>
      <br> 
    	<div class="row">
    	<div class="col-xs-4">
		<label for="usr">Rua</label>
	    <input type="text" class="form-control" id="usr">	
    	</div>


    	<div class="col-xs-2">
		<label for="usr">Número</label>
	    <input type="text" class="form-control" id="usr">	
    	</div>

    	<div class="col-xs-4">
		<label for="usr">Bairro</label>
	    <input type="text" class="form-control" id="usr">	
    	</div>
    	</div>
    	<br>
    	<div class="row">
    		<div class="col-xs-4">
			<label for="usr">Cidade</label>
		    <input type="text" class="form-control" id="usr">	
	    	</div>    		

	    	<div class="col-xs-2">
			<label for="usr">CEP</label>
		    <input type="text" class="form-control" id="usr">	
	    	</div>
    	</div>
    </fieldset>
    <br><br>
    <fieldset>
    	<legend>DADOS DE LOGIN</legend>
      <br> 
    	<div class="row">
    		<div class="col-xs-4">
    		<label for="usr">*Login de Usuário:</label>
		    <input type="text" class="form-control" id="usr" required>
    		</div>

    		<div class="col-xs-4">
    		<label for="usr">*E-mail:</label>
		    <input type="text" class="form-control" id="usr" required>
    		</div>
    	</div>
    	<br>
    	<div class="row">
    		<div class="col-xs-4">
    		<label for="pwd">*Senha:</label>
		    <input type="text" class="form-control" id="pwd" required>
    		</div>

    		<div class="col-xs-4">
    		<label for="pwd">*Confirme a senha:</label>
		    <input type="text" class="form-control" id="pwd" required>
    		</div>
    	</div>
    </fieldset>

  </form>
  <br>
 
  	<button type="button" class="btn btn-primary">CADASTRAR</button>

	<button type="button" class="btn btn-default">CANCELAR</button>
 </div>
 </div>  
<script type="text/javascript" src="js/jquery-2.1.1.js"></script> 
<script type="text/javascript" src="js/bootstrap.min.js"></script> 
<script type="text/javascript" src="js/plugins.js"></script> 
<script type="text/javascript" src="js/menu.js"></script> 
<script type="text/javascript" src="js/custom.js"></script> 


</body>
</html>
