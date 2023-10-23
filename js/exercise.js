function implicacion(){
	let opc, a = 0, b = 0, v1 = 0, c = ' ';
	opc = parseFloat(document.getElementById('opciones').value);//OPCIONES
	a = parseFloat(document.getElementById('c_1').value);//CONDICION1
	b = parseFloat(document.getElementById('c_2').value);//CONDICION2
	v1 = parseFloat(document.getElementById('variable').value);
	
	if(opc==1){//OPCION1
		if(v1>a && v1>b) c = v1+' es mayor que ' +a+', por lo tanto también es mayor que '+b+' = V';
		if(v1>a && v1<b) c = v1+' es mayor que ' +a+', pero no es mayor que '+b+' = F';
		if(v1<a && v1>b) c = v1+' es menor que ' +a+', pero es mayor que '+b+' = V';
		if(v1<a && v1<b) c = v1+' es menor que ' +a+', y es menor que '+b+' = V';
		if(v1==a && v1<b) c = v1+' es igual que ' +a+', pero es menor que '+b+' = F';
		if(v1==a && v1>b) c = v1+' es igual que ' +a+', por lo tanto es mayor que '+b+' = V';
		if(v1>a && v1==b) c = v1+' es mayor que ' +a+', pero es igual que '+b+' = F';
		if(v1<a && v1==b) c = v1+' es menor que ' +a+', pero es igual '+b+' = F';
		if(v1==a && v1==b) c = v1+' es igual ' +a+', y también es igual que '+b+' = V';
	}else if(opc==2){
		if(v1%a==0 && v1%b==0) c = v1+' es divisible entre ' +a+', por lo tanto también es divisible entre '+b+' = V';
		if(v1%a!=0 && v1%b==0) c = v1+' no es divisible entre ' +a+', pero es divisible entre '+b+' = V';
		if(v1%a==0 && v1%b!=0) c = v1+' es divisible entre ' +a+', pero no es divisible entre '+b+' = F';
		if(v1%a!=0 && v1%b!=0) c = v1+' no es divisible entre ' +a+', por lo tanto también no es divisible entre '+b+' = V';
	}


	document.getElementById('resultado').innerHTML = c;
}
