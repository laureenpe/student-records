
function Student(id,studentname,techpoints,lifepoints,status){
	this.id = id;
	this.studentname = studentname;
	this.techpoints = techpoints;
	this.lifepoints = lifepoints;
	this.status = status
}
// elementos a agregar
//const student01 = new Student(1,"Susana",80,80,"Active");



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
print.innerHTML += "<strong>" + "Nombre: " + "</strong>" + elemento.studentname + "<br>" + elemento.techpoints + "<br>" 
+ elemento.lifepoints + "<br>" + elemento.status + "<br>"
})

}

function printHTML (html){
 print.innerHTML = '';
 print.innerHTML = html;
}