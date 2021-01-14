openAddTask();
isonchange();






const draggables = document.querySelectorAll('.draggable');
const containers = document.querySelectorAll('.containertask');






























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