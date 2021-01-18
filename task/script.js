closeAddTask();
onChange_addtask_option();














/*var mess = "";

var ca = getTask()
for(var i = 0; i < ca.length; i++) {
	var c = ca[i];
	mess += '<label class="box draggable" draggable="true"><input type="checkbox" id="action_1" name="scales">' + c.substring(name.length, c.length) + '</label>';
}
document.getElementById("testtt59").innerHTML = mess;*/







var lists = [];

var list1 = [];
var list2 = [];
var list3 = [];

list1.push("hello1");
list1.push("hello2");
list2.push("hello3");
list2.push("hello4");
list3.push("hello5");
list3.push("hello6");


lists.push(list1);
lists.push(list2);
lists.push(list3);

//setCookie("save_list1_quest", lists, 365);
//setCookie("task2", "zzz", 365);




class Task {
	constructor(name, desc) {
		this.name = name;
		this.desc = desc;
		this.check = false;
	}

	/*constructor(parse) {
		let m = JSON.parse(parse);
		this.name = m.name;
		this.desc = m.desc;
		this.check = m.check;
	}*/

	getName() {
		return this.name;
	}

	getDesc() {
		return this.desc;
	}

	isCheck() {
		return this.check;
	}
}

class List {
	constructor(name, task) {
		this.name = name;
		this.task = task;
	}

	getName() {
		return this.name;
	}

	getTasks() {
		return this.task;
	}
}



let myTask1 = new Task("quest Journaliere", "est 4 quete qui ce fait tout les jours");
let myTask2 = new Task("10 minerais", "il faut récupéer 10 minerais et ce fait tout les jours");

var listt = [];

listt.push(myTask1);
listt.push(myTask2);

let myTask6 = new List("Genchin impact", listt);






let myTask21 = new Task("2quest Journaliere", "2est 4 quete qui ce fait tout les jours");
let myTask22 = new Task("210 minerais", "2il faut récupéer 10 minerais et ce fait tout les jours");

var listt2 = [];

listt2.push(myTask21);
listt2.push(myTask22);

let myTask26 = new List("Genchin impact2", listt2);


var ssave = [];

ssave.push(myTask6);
ssave.push(myTask26);


setCookie("save", JSON.stringify(ssave), 365);


//var jjj =  Object.assign(new Task, JSON.parse(getCookie("save"))[1]);

//alert(jjj.getName());;

load();

const draggables = document.querySelectorAll('.draggable');
const containers = document.querySelectorAll('.containertask');



function load() {
	let list = getList();

	let html = "";


	for(let i = 0; i < list.length; i++) {
		let list2 = list[i];
		html += '<div class="container containertask">';
			html += '<h1>' + list2.getName() + '</h1>';
			for(let i2 = 0; i2 < list2.getTasks().length; i2++) {
				let task = list2.getTasks()[i2];
				html += '<label class="box draggable" draggable="true"><input type="checkbox" id="action_1" name="scales">' + task.getName() + '</label>';
			}
			html += '<p class="box morebox" onclick="openAddTask()">+</p>';
		html += '</div>';
	}

	html += '<div class="container morecontainer"></div>';

	document.getElementById("contt2").innerHTML = html;
}








//alert(getCookie("save"));


//alert(getList()[1].getTasks()[0].getName());
//alert(getList()[1].getName());

function getList() {
	var lists = [];
	let save_list_list_task = JSON.parse(getCookie("save"));
	
	for(let i = 0; i < save_list_list_task.length; i++) {
		let save_list_task = save_list_list_task[i];
		//alert("save_list_task " + save_list_list_task[i].task.length);
		let list_task = [];
		for(let i2 = 0; i2 < save_list_task.task.length; i2++) {
			let test2 = Object.assign(new Task, save_list_task.task[i2])
			list_task.push(test2);
			//alert(test2.getName() + " " + test2.getDesc() + " " + test2.isCheck());
		}
		lists.push(new List(save_list_task.name, list_task));
	}
	return lists;
}



// Cookie
function setCookie(cname, cvalue, exdays) {
	var date = new Date();
	date.setTime(date.getTime() + (exdays*24*60*60*1000));
	var expires = "expires="+ date.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
  
function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i <ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

function checkCookie() {
	var username = getCookie("username");
	if (username != "") {
		alert("Welcome again " + username);
	} else {
	username = prompt("Please enter your name:", "");
		if (username != "" && username != null) {
			setCookie("username", username, 365);
		}
	}
}



/*function getList() {
	var lists = [];
	var name = "save_";
	var ca = document.cookie.split(';');
	for(var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			lists.push(c.substring(name.length, c.length));
		}
	}
	return lists;
}*/











































// Event

draggables.forEach(draggable => {
	draggable.addEventListener('dragstart', () => {
		draggable.classList.add('dragging')
	})

	draggable.addEventListener('dragend', () => {
		draggable.classList.remove('dragging')
	})
})

containers.forEach(container => {
	container.addEventListener('dragover', e => {
		e.preventDefault()
		const afterElement = getDragAfterElement(container, e.clientY)
		const draggable = document.querySelector('.dragging')
		if (afterElement == null) {
			container.insertBefore(draggable, container.querySelectorAll('.morebox')[0])

		} else {
			container.insertBefore(draggable, afterElement)
		}
	})
})






























// Function

function getDragAfterElement(container, y) {
	const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]

	return draggableElements.reduce((closest, child) => {
		const box = child.getBoundingClientRect()
		const offset = y - box.top - box.height / 2
		if (offset < 0 && offset > closest.offset) {
			return { offset: offset, element: child }
		} else {
			return closest
		}
	}, { offset: Number.NEGATIVE_INFINITY }).element
}

function onChange_addtask_option(){
	const rbs = document.querySelectorAll('input[name="repeat"]');
	let selectedValue;
	for (const rb of rbs) {
		if (rb.checked) {
			selectedValue = rb.value;
			break;
		}
	}
	if (selectedValue === "no") {
		document.getElementById("addtask_option").innerHTML = "";
	} else if (selectedValue === "repeat_x") {
		var paddtask_option = "<select name=\"temps\" id=\"temps-select\">";
			paddtask_option += "<option value=\"day\">Jour</option>";
			paddtask_option += "<option value=\"week\">Semaine</option>";
			paddtask_option += "<option value=\"month\">Mois</option>";
			paddtask_option += "<option value=\"hamster\">An</option>";
		paddtask_option += "</select>";

		paddtask_option += "<input class=\"\" type=\"time\" id=\"task_time\">";

		document.getElementById("addtask_option").innerHTML = paddtask_option;
	} else if (selectedValue === "repeat_t") {

		var paddtask_option = "<input class=\"\" type=\"number\" id=\"task_time\">";

		paddtask_option += "<select name=\"temps\" id=\"temps-select\">";
			paddtask_option += "<option value=\"seconds\">Seconds</option>";
			paddtask_option += "<option value=\"hours\">Hours</option>";
			paddtask_option += "<option value=\"days\">Days</option>";
			paddtask_option += "<option value=\"months\">Months</option>";
			paddtask_option += "<option value=\"years\">Years</option>";
		paddtask_option += "</select>";

		document.getElementById("addtask_option").innerHTML = paddtask_option;
	}
}






























// Window
function addBottom() {
	document.getElementById("bottom").style.display = "block";
}

function removeBottom() {
	document.getElementById("bottom").style.display = "none";
}

function openAddList() {
	addBottom();
	//document.getElementById("").style.display = "block";
}

function closeAddList() {
	removeBottom();
	//document.getElementById("").style.display = "none";
}

// Add Task
function openAddTask() {
	addBottom();
	document.getElementById("addtask").style.display = "block";
}

function closeAddTask() {
	removeBottom();
	document.getElementById("addtask").style.display = "none";
}