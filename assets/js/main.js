function Student(id, studentName, techPoints, lifePoints, status){
	this.id = id;
	this.studentName = studentName;
	this.techPoints = techPoints;
	this.lifePoints = lifePoints;
	this.status = status;
}
// elementos a agregar
//const student01 = new Student(1,"Susana",80,80,"Active");

function ver_imagen() {
	var n = 0;
	this[n++] = "assets/img/1.png";
	this[n++] = "assets/img/2.png";
	this[n++] = "assets/img/3.png";
	this[n++] = "assets/img/4.png";
	this[n++] = "assets/img/5.png";
	this.N = n;
}

var imagen = new ver_imagen();
var src = imagen[ Math.floor(Math.random() * imagen.N) ];

res = [];
var print = document.getElementById("print");

function addStudent() {
	var studentName = document.getElementById("studentName").value;
	var techPoints = document.getElementById("techPoints").value;
	var lifePoints = document.getElementById("lifePoints").value;
	res.push( new Student( res.length + 1, studentName, techPoints, lifePoints, "active" ) );
	document.getElementById("studentName").value = "";
	document.getElementById("techPoints").value = "";
	document.getElementById("lifePoints").value = "";
	document.getElementById("print").innerHTML = "";
	newStudent(res[res.length - 1]);
	return res;
}

function newStudent(el) {
	document.getElementById("print").innerHTML = '<div class="student"><img src=' + src + '><h4>' + el.studentName + '</h4><p><span class="border">Tech Skills:</span> ' + el.techPoints + '%</p><p><span class="border">Life Skills:</span> ' + el.lifePoints + '%</p><p><span class="border">Status:</span> ' + el.status + '</p></div>';
}

function showStudent() {
	printHTML(" ");
	res.forEach(function(elemento){
	print.innerHTML += '<div class="student"><img src=' + src + '><h4>' + elemento.studentName + '</h4><p><span class="border">Tech Skills:</span> ' + elemento.techPoints + '</p><p><span class="border">Life Skills:</span> ' + elemento.lifePoints + '</p><p><span class="border">Status:</span> ' + elemento.status + '</p></div>';
	});
}

function printHTML (html) {
	print.innerHTML = '';
	print.innerHTML = html;
}