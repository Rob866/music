$(document).ready(function(){


       //perfiles start
    $(".viewMore_click").click(function(){
        $(" .main .about-mov").animate({top:"0"})
        $(" .main .image-mov").animate({left:"100%"})
        $(" .main .info-mov").animate({left:"100%"})
        $(" .main .details-mov").animate({top :"65%"})

    }
    );

    $(".close_click").click(function(){
        $(" .main .about-mov").animate({top:"-100%"})
        $(" .main .image-mov").animate({left:"0"})
        $(" .main .info-mov").animate({left:"0"})
        $(" .main .details-mov").animate({top :"100%"})
    });

    $(".viewMore_click2").click(function(){
        $(" .main .about-mov2").animate({top:"0"})
        $(" .main .image-mov2").animate({left:"100%"})
        $(" .main .info-mov2").animate({left:"100%"})
        $(" .main .details-mov2").animate({top :"65%"})

    }
    );

    $(".close_click2").click(function(){
        $(" .main .about-mov2").animate({top:"-100%"})
        $(" .main .image-mov2").animate({left:"0"})
        $(" .main .info-mov2").animate({left:"0"})
        $(" .main .details-mov2").animate({top :"100%"})
    });


    $(".viewMore_click3").click(function(){
        $(" .main .about-mov3").animate({top:"0"})
        $(" .main .image-mov3").animate({left:"100%"})
        $(" .main .info-mov3").animate({left:"100%"})
        $(" .main .details-mov3").animate({top :"65%"})

    }
    );

    $(".close_click3").click(function(){
        $(" .main .about-mov3").animate({top:"-100%"})
        $(" .main .image-mov3").animate({left:"0"})
        $(" .main .info-mov3").animate({left:"0"})
        $(" .main .details-mov3").animate({top :"100%"})
    });
    //perfiles finish
    //modal start
    flag=0;
    $(".firstRow .bloque1").click(function(){

        $(".bigImage").fadeIn();
        $(".bigImage img").attr("src","img/1.jpg");
        var newHTML="img/descripciones/1.html"
        $('.descripcion').load(newHTML);
        flag=1;
    });
    $(".firstRow .bloque2").click(function(){
        $(".bigImage").fadeIn();
        $(".bigImage img").attr("src","img/2.jpg");
        var newHTML="img/descripciones/2.html"
        $('.descripcion').load(newHTML); 
        flag=2;
    });
    $(".firstRow .bloque3").click(function(){
        $(".bigImage").fadeIn();
        $(".bigImage img").attr("src","img/3.jpg");
        var newHTML="img/descripciones/3.html"
        $('.descripcion').load(newHTML);
        flag=3;
    });

    $(".secondRow .bloque1").click(function(){
        $(".bigImage").fadeIn();
        $(".bigImage img").attr("src","img/4.jpg");
        var newHTML="img/descripciones/4.html"
        $('.descripcion').load(newHTML);
        flag=4;
    });
    $(".secondRow .bloque2").click(function(){
        $(".bigImage").fadeIn();
        $(".bigImage img").attr("src","img/5.jpg");
        var newHTML="img/descripciones/5.html"
        $('.descripcion').load(newHTML);
        flag=5;
    });
    $(".secondRow .bloque3").click(function(){
        $(".bigImage").fadeIn();
        $(".bigImage img").attr("src","img/6.jpg");
        var newHTML="img/descripciones/6.html"
        $('.descripcion').load(newHTML);
        flag=6;
    });

    $(".thirdRow .bloque1").click(function(){
        $(".bigImage").fadeIn();
        $(".bigImage img").attr("src","img/7.jpg");
        var newHTML="img/descripciones/7.html"
        $('.descripcion').load(newHTML);
        flag=4;
    });
    $(".thirdRow .bloque2").click(function(){
        $(".bigImage").fadeIn();
        $(".bigImage img").attr("src","img/8.jpg");
        var newHTML="img/descripciones/8.html"
        $('.descripcion').load(newHTML);
        flag=5;
    });
    $(".thirdRow .bloque3").click(function(){
        $(".bigImage").fadeIn();
        $(".bigImage img").attr("src","img/9.jpg");
        var newHTML="img/descripciones/9.html"
        $('.descripcion').load(newHTML);
        flag=6;
    });

    $(".bigImage .close").click(function(){
        $(".bigImage").fadeOut();
     
    });



    $(".bigImage .next").click(function(){
        if(flag==1) {
           $(".bigImage img").attr("src","img/2.jpg");   
           var newHTML="img/descripciones/2.html"
           $('.descripcion').load(newHTML); 
           flag=2;
        }
        else if(flag==2) {
            $(".bigImage img").attr("src","img/3.jpg"); 
            var newHTML="img/descripciones/3.html"
            $('.descripcion').load(newHTML);  
            flag=3;
         }
         else if(flag==3) {
            $(".bigImage img").attr("src","img/4.jpg"); 
            var newHTML="img/descripciones/4.html"
            $('.descripcion').load(newHTML); 
            flag=4;
         } 
         else if(flag==4) {
            $(".bigImage img").attr("src","img/5.jpg");  
            var newHTML="img/descripciones/5.html"
            $('.descripcion').load(newHTML); 
            flag=5;
         }
         else if(flag==5) {
            $(".bigImage img").attr("src","img/6.jpg");  
            var newHTML="img/descripciones/6.html"
            $('.descripcion').load(newHTML); 
            flag=6;
         }
         else if(flag==6) {
            $(".bigImage img").attr("src","img/7.jpg");   
            var newHTML="img/descripciones/7.html"
            $('.descripcion').load(newHTML);
            flag=7;
         }
         else if(flag==7) {
            $(".bigImage img").attr("src","img/8.jpg"); 
            var newHTML="img/descripciones/8.html"
            $('.descripcion').load(newHTML);  
            flag=8;
         }

         else if(flag==8) {
            $(".bigImage img").attr("src","img/9.jpg");  
            var newHTML="img/descripciones/9.html"
            $('.descripcion').load(newHTML); 
            flag=9;
         }

         else if(flag==9) {
            $(".bigImage img").attr("src","img/1.jpg");  
            var newHTML="img/descripciones/1.html"
            $('.descripcion').load(newHTML); 
            flag=1;
         }
    });
    $(".bigImage .pre").click(function(){
        if(flag==1) {
           $(".bigImage img").attr("src","img/9.jpg");  
           var newHTML="img/descripciones/9.html"
           $('.descripcion').load(newHTML);
           flag=9;
        }
        else if(flag==9) {
            $(".bigImage img").attr("src","img/8.jpg");  
            var newHTML="img/descripciones/8.html"
            $('.descripcion').load(newHTML); 
            flag=8;
         }
         else if(flag==8) {
            $(".bigImage img").attr("src","img/7.jpg"); 
            var newHTML="img/descripciones/7.html"
            $('.descripcion').load(newHTML); 
            flag=7;
         } 
         else if(flag==7) {
            $(".bigImage img").attr("src","img/6.jpg");  
            var newHTML="img/descripciones/6.html"
            $('.descripcion').load(newHTML); 
            flag=6;
         }
         else if(flag==6) {
            $(".bigImage img").attr("src","img/5.jpg");  
            var newHTML="img/descripciones/5.html"
            $('.descripcion').load(newHTML); 
            flag=5;
         }
         else if(flag==5) {
            $(".bigImage img").attr("src","img/4.jpg");   
            var newHTML="img/descripciones/4.html"
            $('.descripcion').load(newHTML);
            flag=4;
         }
         else if(flag==4) {
            $(".bigImage img").attr("src","img/3.jpg"); 
            var newHTML="img/descripciones/3.html"
            $('.descripcion').load(newHTML);
            flag=3;
         }

         else if(flag==3) {
            $(".bigImage img").attr("src","img/2.jpg");
            var newHTML="/img/descripciones/2.html"
            $('.descripcion').load(newHTML);  
            flag=2;
         }

         else if(flag==2) {
            $(".bigImage img").attr("src","img/1.jpg"); 
            var newHTML="img/descripciones/1.html"
            $('.descripcion').load(newHTML);  
            flag=1;
         }
    });





});