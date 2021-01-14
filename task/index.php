<!DOCTYPE html>
<html>
<head>
	<title>Task</title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
<div id="bottom"></div>
<div id="addtask">
	<h1>Add task</h1>
	<from>
		<input type="text" id="task_name" placeholder="Saisissez un titre" maxlength="10">
		<input type="text" id="task_details" placeholder="Ajouter des détails" maxlength="10">
		
		<label for="contactChoice1">
			<input type="radio" id="contactChoice1" name="repeat" value="no" onclick="onChange_addtask_option()" checked>
			No
		</label>
		<label for="contactChoice2">
			<input type="radio" id="contactChoice2" name="repeat" value="repeat_x" onclick="onChange_addtask_option()">
			Tout les x temps
		</label>
		<label for="contactChoice3">
			<input type="radio" id="contactChoice3" name="repeat" value="repeat_t" onclick="onChange_addtask_option()">
			Au bout d'un temps
		</label>
		
		<div id="addtask_option">
			<select name="temps" id="temps-select">
				<option value="">Jour</option>
				<option value="dog">Semaine</option>
				<option value="cat">Mois</option>
				<option value="hamster">An</option>
			</select>
			
			
			<input class="" type="time" id="task_time" style="display: none;">
		</div>
	</from>
</div>

<div class="containerlist">
	
	<div class="container containertask">
		<h1>Task 1</h1>
		<label class="box draggable" draggable="true"><input type="checkbox" id="action_1" name="scales">1</label>
		<label class="box draggable" draggable="true"><input type="checkbox" id="action_1" name="scales">2</label>
		<label class="box draggable" draggable="true"><input type="checkbox" id="action_1" name="scales">3</label>
		<label class="box draggable" draggable="true"><input type="checkbox" id="action_1" name="scales">6</label>
		<p class="box morebox">+</p>
	</div>

	<div class="container containertask">
		<h1>Task 2</h1>
		<p class="box draggable" draggable="true"><input type="checkbox" id="action_1" name="scales">4</p>
		<p class="box draggable" draggable="true"><input type="checkbox" id="action_1" name="scales">5</p>
		<p class="box morebox">+</p>
	</div>
	
	<div class="container containertask">
		<h1>Task 2</h1>
		<p class="box draggable" draggable="true"><input type="checkbox" id="action_1" name="scales">9</p>
		<p class="box draggable" draggable="true"><input type="checkbox" id="action_1" name="scales">10</p>
		<p class="box morebox">+</p>
	</div>
	
	<div class="container morecontainer"></div>
</div>



<script type="text/javascript" src="script.js"></script>
</body>
</html>