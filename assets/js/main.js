function Student(id,studentname,techpoints,lifepoints,status){
	this.id = id;
	this.studentname = studentname;
	this.techpoints = techpoints;
	this.lifepoints = lifepoints;
	this.status = status
}
// elementos a agregar
//const student01 = new Student(1,"Susana",80,80,"Active");

function ver_imagen()
{
  var n=0;
  this[n++]="imagenes/1.png";
  this[n++]="imagenes/2.png";
  this[n++]="imagenes/3.png";
  this[n++]="imagenes/4.png";
  this[n++]="imagenes/5.png";
  this.N=n;
}
var imagen=new ver_imagen();
src= imagen[ Math.floor(Math.random() * imagen.N) ]

function pedirDatos(datos)
{
	return prompt("Ingrese el " + datos + " de la estudiante")
}

res = [];
var print = document.getElementById("print")

function addStudent()
{
	var nombre = pedirDatos("nombre");
	var notaT = pedirDatos("Nota Tecnica")
	var notaE = pedirDatos("Nota socio-Emocional");
	res.push( new Student(res.length +1, nombre, notaT, notaE, "active"))
	return res;
}

function showStudent(){
printHTML(" ");

res.forEach(function(elemento){
print.innerHTML += "<img src="+src+">" + "<br><strong>" + "Nombre: " + "</strong>" + elemento.studentname + "<br>" + elemento.techpoints + "<br>" 
+ elemento.lifepoints + "<br>" + elemento.status + "<br>"
})

}

function printHTML (html){
 print.innerHTML = '';
 print.innerHTML = html;
}