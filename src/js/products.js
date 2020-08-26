window.addEventListener("load",eventos);//Carrega os eventos
        function eventos(){
        //Atribui o eventos a todas as imagens da galeria  
        for(c=0;c<document.querySelectorAll(".product-content").length;c++){
        document.querySelectorAll(".product-content")[c].addEventListener("click",function(){
        //essa função vai acionar o modal, ou no caso atribuir um classe active nele
        document.querySelectorAll(".modal")[0].classList.add("active");
        
        document.querySelectorAll(".overlay")[0].classList.add("active");
        
        
        //Captuerar o conteúdo da div que efetuou a função
        var a = this.innerHTML;
        
        
        
        //Imprimir o conteúdo capturado da div, dentro do modal
        document.querySelector(".content").innerHTML=a
        
        //Assim que o modal for exibido atribui o evento para todas as classes img_invisible      
        for(cont=0;cont<document.querySelectorAll(".img_invisible").length;cont++){ 
        document.querySelectorAll(".img_invisible")[cont].addEventListener("click",criarIMG);
        }
        
        });
        }
        //--------------------------------
        document.querySelectorAll(".close")[0].addEventListener("click",function(){
        
        document.querySelectorAll(".modal")[0].classList.remove("active");
        
        document.querySelectorAll(".overlay")[0].classList.remove("active");
        });
        
        document.querySelectorAll(".overlay")[0].addEventListener("click",function(){
        
        document.querySelectorAll(".modal")[0].classList.remove("active");
        
        document.querySelectorAll(".overlay")[0].classList.remove("active");
        });
        //Essas funções removem a classe active do modal e do overlay, dessa forma eles desaparecem
        
        
        
        }
        
        //Essa função vai capturar o src e setar na id que está amostra
        function criarIMG(){
                //captura o atributo src da imagem que foi clicada
               var b=this.getAttribute("src");
               var a = document.getElementById("img_amost").getAttribute("src");
                  //Vai setar o atributo capturado na imagem maior     
                document.getElementById("img_amost").setAttribute("src",b);
                   
                   this.setAttribute("src",a);
               }

//Essa função tornará o menu fixo após escrollar 176px para baixo
  $(function(){
      //carrega o menu na página
      $("#menu").load("../../html/menu.html");
   //--------------------------------------------------
           $(window).scroll(function(){
         if($(this).scrollTop() > 250 && $(window).width()>600){
            $("#menu").addClass("fixo");
        }else{
            $("#menu").removeClass("fixo");
                  }
         });
      
    
     
 });