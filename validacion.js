$(document).ready(function(){
    $(".NOSE").addClass('ocultar');
    $(".NOSE2").addClass('ocultar');
    $(".NOSE3").addClass('ocultar');
$("#miBoton").click(function()
     
{      
	if($("#IDPROVEEDOR").val() == ""){
        $(".NOSE").addClass('mostrar');
        $("#IDPROVEEDOR").addClass('resaltar');       // Esta función coloca el foco de escritura del usuario en el campo Nombre directamente.
       
       
        $("#IDPROVEEDOR").click(function(){
          $("#IDPROVEEDOR").removeClass('resaltar');
         $(".NOSE").removeClass('mostrar')}); 
           
      
            










     }
         $(".NOSE").removeClass('resaltar');
          $(".NOSE").addClass('ocultar');

     	if($("#APELLIDOPROVEEDOR").val() == ""){
        $(".NOSE2").addClass('mostrar');
        $("#APELLIDOPROVEEDOR").addClass('resaltar');       // Esta función coloca el foco de escritura del usuario en el campo Nombre directamente.
       
       
        $("#APELLIDOPROVEEDOR").click(function(){
          $("#APELLIDOPROVEEDOR").removeClass('resaltar');
         $(".NOSE2").removeClass('mostrar')}); 
         


     
   };     
          $(".NOSE2").removeClass('resaltar');
          $(".NOSE2").addClass('ocultar');

          if($("#DNIPROVEEDOR").val() == ""){
        $(".NOSE3").addClass('mostrar');
        $("#DNIPROVEEDOR").addClass('resaltar');       // Esta función coloca el foco de escritura del usuario en el campo Nombre directamente.
       
       
        $("#DNIPROVEEDOR").click(function(){
          $("#DNIPROVEEDOR").removeClass('resaltar');
         $(".NOSE3").removeClass('mostrar')}); 
         


     
   			}


         $(".NOSE3").removeClass('resaltar');
          $(".NOSE3").addClass('ocultar');
         
            
        if($("#DNI-Proveedor").val() == ""){
        $(".NOSE3").addClass('mostrar');
        $("#DNI-Proveedor").addClass('resaltar');       // Esta función coloca el foco de escritura del usuario en el campo Nombre directamente.
       
       
        $("#DNI-Proveedor").click(function(){
          $("#DNI-Proveedor").removeClass('resaltar');
         $(".NOSE3").removeClass('mostrar')}); 
         


     
   			}


         $(".NOSE3").removeClass('resaltar');
          $(".NOSE3").addClass('ocultar');
         return false;    
   			







         }
  

      

   );});

           
       

        
     
    
         

       
        
     
    
         


