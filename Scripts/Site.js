
function somar (valor1, valor2){
	alert(valor1+valor2);
}
function subtrair(valor1,valor2){
	alert(valor1-valor2);
}
function multiplicar(valor1,valor2){
		alert(valor1*valor2);
}

function dividir(valor1, valor2){
		alert (valor1/valor2);
}

function exibirNome(nome, sobrenome){
	alert(nome+" "+sobrenome);
}

function imc (peso, altura){
	alert(Math.round(Number(peso/(altura * 2)),2));
}

function areaQuadrado(lado){
	alert(lado * 2);
}

function calculo(){
	 var peso = 70;
	 var alt1 = 1.65;
	 var alt2 = 1.65;
	 
	 return(peso/(alt1*alt2));
}
