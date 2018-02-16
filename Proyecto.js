<html>
  <head>
  </head>
  <body>
<script type="text/javascript">
const precioBase = 350;

var nombre=prompt("Por favor ingrese el nombre completo");
var edad=prompt("Ingrese edad");
var Cargos=0;
var Cargos2=0;
var CargoHijos=0;
var Contar=0;
//const Base = 250;

if(edad<=0||edad<=18)
{
   precioBase = 0;
 	alert("Es menor de edad no  puede asegurarse su edad es : "+edad);

}
  
	else
    {
      
      if(edad>=18 && edad<=20)
	  
	{
		alert("No se le aplican recargos ");
		Cargos=0;	
  	
		
	}
	else if(edad>=21&&edad<=25)
	{
		alert("se le aplican recargos  de 1%");
		Cargos=0.01;
		 PreguntarHijos();
		 PreguntarConyuge();
	     	
	}
	else if(edad>=26&&edad<=30)
	{
		alert(" se le aplican recargos  de 2%");
		Cargos=0.02;
		PreguntarHijos();
		 PreguntarConyuge();
	}
	
	else if(edad>=31&&edad<=40)
	{
		alert(" se le aplican recargos  de 5%");
		Cargos=0.05;
		PreguntarHijos();
		 PreguntarConyuge();
	
	}
	else if(edad>=41&&edad<=50)
	{
		alert(" se le aplican recargos  de 8%");
		Cargos=0.08;
		PreguntarHijos();
		 PreguntarConyuge();
	
	}
	else if(edad>=51&&edad<=65)
	{
		alert(" se le aplican recargos  de 12%");
		Cargos=0.12;
		PreguntarHijos();
		 PreguntarConyuge();
	
	}
      
      else if(edad>65)
	{
		alert(" mayor de65 no pueda asegurarse");
		Cargos=0;
		
	
	}
      
    }
 
 

 

  //Funcion para PreguntarHijos	 y edades
  function Hijos(B)
  {
  var i;

  var Suma=0;
  var e;
   for(i=1;i<=B;i++)
   {
 
   Edad_Hijos=prompt("Ingrese Edad  Del Hijo"+i);
  if(Edad_Hijos>=21){
   
   Suma=parseInt(Suma)+parseInt(Edad_Hijos);
    Contar++;
  }
   }  
	}
	
	//function para  PreguntarHijos
	function PreguntarHijos()
	{
	var Res;
	var Cantidad_Hijos=0;
	Res=prompt("Tiene Hijos _Usted _ Si=1 / No=0")
	if(Res==1){
	Cantidad_Hijos=prompt("Ingrese El Numero de Hijos a Inscribir");
	Hijos(Cantidad_Hijos);
	}
	else
	{
	alert("Es solo ");
	}
	}
	
	//Funcion para PreguntarConyuge
	function PreguntarConyuge()
    {
	var Respuesta;
	Respuesta=prompt("Tiene Conyuge SI=1 /  NO=0");
	if(Respuesta==1)
	{
	Edad_Conyuge();
	}
	else
	{
	alert("Tiene Pisot va");
	}
	} 

	
	// fUNCION PARA vALIDAR LA EDAD DE CONYUGE
	function Edad_Conyuge()
	{
	
   var edad2 = prompt("Ingrese edad de Su conyuge");
    if(edad2<30)
{
	alert("Recargo de de 1%");
     Cargos2=0.01;
     
}
  
	else
    {
      
      if(edad2>=30 && edad2<40)
	{
		alert("Aplica el recargo de 2%");
		Cargos2=0.02;
	}
	else if(edad2>=40&&edad2<50)
	{
		alert("se le aplican recargos  3%");
		Cargos2=0.03;
	}
	else if(edad2>=50&&edad2<70)
	{
		alert(" se le aplican recargos  de 5%");
		Cargos2=0.05;
	}
	
	else if(edad2>=70)
	{
		alert(" no  se puede asegurar  ");
		Cargos2=0;
	
	}

    
  }
  }
 var  comisionPersona=parseFloat(precioBase)*parseFloat(Cargos);
var comisionConyuge=parseFloat(precioBase)*parseFloat(Cargos2);
var  Comision_Hijo=parseFloat(Contar*0.01);
var Total_a_Pagar=comisionPersona+comisionConyuge+Comision_Hijo+precioBase;
var Cadena="EL nombre es : "+nombre+"\nEdad es : "+edad+"\nCargos por edad : "+comisionPersona+"\nCargos por edad Conyuge"+comisionConyuge+"\n hijos MAyores a 21 años "+Contar+"\nComision por hijos "+Comision_Hijo+"\nTotal a Pagar Por el seguro "+Total_a_Pagar;
alert(Cadena);


  </script>
  </body>
  </html>