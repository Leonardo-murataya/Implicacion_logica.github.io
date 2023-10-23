let cont = 1;
const siguiente = document.querySelector('.next');
const regresar = document.querySelector('.back');

var x  = document.getElementById("b_next");
var y  = document.getElementById("b_back");



siguiente.addEventListener('click', ()=>{
	if(cont<=3){//INICIO IF PRINCIPAL
		cont++;
		if(cont==1){
			mostrar1();
		}
		else if(cont==2){
			mostrar2();
			x.style.display = "block";
			y.style.display = "block";
		}else if(cont==3){
			mostrar3();
			x.style.display = "block";
			y.style.display = "block";
		}else if(cont==4){
			mostrar4();
			x.style.display = "none";
			y.style.display = "block";
		}
	}//FIN IF PRINCIPAL
});

regresar.addEventListener('click', ()=>{
	if(cont>=2){
		cont--;
		if(cont==1){
			mostrar1();
			x.style.display = "block";
			y.style.display = "none";
		}
		else if(cont==2){
			mostrar2();
			x.style.display = "block";
			y.style.display = "block";
		}else if(cont==3){
			mostrar3();
			x.style.display = "block";
			y.style.display = "block";
		}else if(cont==4){
			mostrar4();
		}
	}
});


window.onload = function(){
	var a  = document.getElementById("panel1");
	var b  = document.getElementById("panel2");
	var c  = document.getElementById("panel3");
	var d  = document.getElementById("panel4");

	var x  = document.getElementById("b_next");
	var y  = document.getElementById("b_back");

	a.style.display = "block";
	b.style.display = "none";
	c.style.display = "none";
	d.style.display = "none";

	x.style.display = "block";
	y.style.display = "none";
}

function mostrar1(){
	var a  = document.getElementById("panel1");
	var b  = document.getElementById("panel2");
	var c  = document.getElementById("panel3");
	var d  = document.getElementById("panel4");

	var x  = document.getElementById("b_next");
	var y  = document.getElementById("b_back");

	a.style.display = "block";
	b.style.display = "none";
	c.style.display = "none";
	d.style.display = "none";

	x.style.display = "block";
	y.style.display = "none";
}

function mostrar2(){
	var a  = document.getElementById("panel1");
	var b  = document.getElementById("panel2");
	var c  = document.getElementById("panel3");
	var d  = document.getElementById("panel4");

	a.style.display = "none";
	b.style.display = "block";
	c.style.display = "none";
	d.style.display = "none";
}

function mostrar3(){
	var a  = document.getElementById("panel1");
	var b  = document.getElementById("panel2");
	var c  = document.getElementById("panel3");
	var d  = document.getElementById("panel4");

	a.style.display = "none";
	b.style.display = "none";
	c.style.display = "block";
	d.style.display = "none";
}

function mostrar4(){
	var a  = document.getElementById("panel1");
	var b  = document.getElementById("panel2");
	var c  = document.getElementById("panel3");
	var d  = document.getElementById("panel4");

	a.style.display = "none";
	b.style.display = "none";
	c.style.display = "none";
	d.style.display = "block";
}
