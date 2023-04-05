document.querySelector('#push').onclick = function(){
	let inputElement = document.querySelector('#newtask input');
	if(inputElement.value.length == 0){
	    alert("Kindly Enter Task Name!!!!")
	}
    
	else{
	    document.querySelector('#tasks').innerHTML += `
		<div class="task">
		    <span id="taskname">
			${document.querySelector('#newtask input').value}
		    </span>
		    <button class="delete">
		    X
		    </button>
		</div>
	    `;
    
	    let current_tasks = document.querySelectorAll(".delete");
	    for(let i=0; i<current_tasks.length; i++){
		current_tasks[i].onclick = function(){
		    this.parentNode.remove();
		}
	    }
	    inputElement.value = "";
	}
    }