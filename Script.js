function Calc()
        {
			let x =document.getElementById("unit").value ;
			
			if(x < 30)
			{
				document.getElementById("rs").innerHTML=Number(x)*7.85+" Rs";
			}
			else if(x <= 60)
			{
				var rs=235.50+(Number(x)-30)*7.85;
				document.getElementById("rs").innerHTML=rs+" Rs";
			}
			else if(x <= 90)
			{
				var rs=471+(Number(x)-60)*10;
				document.getElementById("rs").innerHTML=rs+" Rs";
			}
			else if(x <= 120)
			{
				var rs=771+(Number(x)-90)*27.75;
				document.getElementById("rs").innerHTML=rs+" Rs";
			}
			else
			{
				document.getElementById("rs").innerHTML=1603.50+(Number(x)-120)*32.48+" Rs";
				
			}
		}
		
