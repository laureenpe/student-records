
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
function addStudent()
{
	var nombre = pedirDatos("nombre");
	var notaT = pedirDatos("Nota Tecnica")
	var notaE = pedirDatos("Nota socio-Emocional");
	res.push( new Student(res.length +1, nombre, notaT, notaE, "active"))
	return res;
}

