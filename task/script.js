closeAddTask();
closeAddList();
onChange_addtask_option();



































// Object
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














































/*let myTask1 = new Task("quest Journaliere", "est 4 quete qui ce fait tout les jours");
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


setCookie("save", JSON.stringify(ssave), 365);*/


//var jjj =  Object.assign(new Task, JSON.parse(getCookie("save"))[1]);

//alert(jjj.getName());;
const save_Cookie = "save";

var save_list = [];

load();

const draggables = document.querySelectorAll('.draggable');
const containers = document.querySelectorAll('.containertask');

























































function load() {
	let save_list_list_task = getCookie(save_Cookie);
	if (save_list_list_task == "") {
		setCookie(save_Cookie, JSON.stringify([]), 365);
		save_list = [];
	} else {
		loadList(save_list_list_task);
	}

	reLoad();
}

function reLoad() {
	let html = "";

	let cc = 0;
	for(let i = 0; i < save_list.length; i++) {
		

		let list2 = save_list[i];
		html += '<div class="container containertask">';
			html += '<h1>' + list2.getName() + '</h1>';
			for(let i2 = 0; i2 < list2.getTasks().length; i2++) {
				let task = list2.getTasks()[i2];
				html += '<label class="box draggable" draggable="true"><input type="checkbox" id="action_1" name="scales">' + task.getName() + '</label>';
			}
			html += '<p class="box morebox" onclick="openAddTask(' + cc++ +')">+</p>';
		html += '</div>';
	}
	html += '<div class="container morecontainer" onclick="openAddList()">+</div>';

	document.getElementById("contt2").innerHTML = html;
}

/**
 * 
 */
function loadList(save_list_list_task) {
	save_list = [];

	let save_list_list_task2 = JSON.parse(save_list_list_task);
	
	for(let i = 0; i < save_list_list_task2.length; i++) {
		let save_list_task = save_list_list_task2[i];
		let list_task = [];
		//alert(save_list_task.task);
		//if (false) {
			for(let i2 = 0; i2 < save_list_task.task.length; i2++) {
				list_task.push(Object.assign(new Task, save_list_task.task[i2]));
			}
		//}
		save_list.push(new List(save_list_task.name, list_task));
	}
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

// Cookie
function saveCookie() {
	setCookie(save_Cookie, JSON.stringify(save_list), 365);
}









































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

// Add List
function openAddList() {
	/*Notification.requestPermission( function(status) {
		console.log(status); // les notifications ne seront affichées que si "autorisées"
		var n = new Notification("title", {body: "notification body"}); // this also shows the notification
	  });*/

	const title = 'Simple Title';
	const options = {
	body: 'Simple piece of body text.\nSecond line of body text :)'
	};
	registration.showNotification(title, options);
	/*addBottom();
	document.getElementById("addlist").style.display = "flex";*/
}

function submitAddList() {
	save_list.push(new List(document.getElementById("list_name").value, []));
	reLoad();
	saveCookie();
	closeAddList();
}

function closeAddList() {
	removeBottom();
	document.getElementById("addlist").style.display = "none";
}

// Add Task
function openAddTask(nb) {
	addBottom();
	document.getElementById("addtask").style.display = "flex";
	document.getElementById("button_addTask").onclick = function() { submitAddTask(nb); };
}

function submitAddTask(nb) {
	save_list[nb].task.push(new Task(document.getElementById("task_name").value, document.getElementById("task_desc").value));
	reLoad();
	saveCookie();
	closeAddTask();
}

function closeAddTask() {
	removeBottom();
	document.getElementById("addtask").style.display = "none";
}