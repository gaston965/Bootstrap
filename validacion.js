$(document).ready(function(){
    
$("#miBoton").click(function()
{      $("#NOSE").toggle("hide");
	if($("#IDPROVEEDOR").val() == ""){
        $("#NOSE").toggle("show");
        $("#IDPROVEEDOR").addClass('resaltar');       // Esta función coloca el foco de escritura del usuario en el campo Nombre directamente.
       
  
        $("#IDPROVEEDOR").click(function(){
        $("#NOSE").toggle("hide")}); 
           
       return false;
     }





     
   });});

$(document).ready(function()
	 
{  
    // $("#APHELP").addClass('hide');
	$("#miBoton").click(function()
{
	if($("#APELLIDOPROVEEDOR").val() == ""){
        // $("#APHELP").addClass('show');
        $("#APELLIDOPROVEEDOR").addClass('resaltar');       // Esta función coloca el foco de escritura del usuario en el campo Nombre directamente.
       
  
        $("#APELLIDOPROVEEDOR").click(function(){
        // $("#APHELP").addClass('hide')
              }); 
           
       return false;
     }





     
   });});


       

        
     
    
         

       
        
     
    
         


