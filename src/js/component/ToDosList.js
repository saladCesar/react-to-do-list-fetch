import React from "react";
import { useState } from "react";

// // 1. The tasks are added when the user press enter on the keyboard or you can have your own button.

// // 2. The delete icon shows only when the task is hovered.

// // 3. The user can add as many tasks as it wants.

// // 4. When there is no tasks the list should say "No tasks, add a task"

// // 5. There is no way to update a task, the user will have to delete and create again.

export const ToDosList = () => {
	const [task, setTask] = useState("");
	const [taskList, setTaskList] = useState([]);

	const addTask = (e) => {
		if (e.keyCode == 13 && e.target.value != "") {
			setTaskList([...taskList, task]);
			setTask("");
		}
	};
	const removeTask = (index) => {
		// let filteredArray = listedItems.filter((item, i) => i != index);
		// taskList(filteredArray);
		setTaskList(taskList.filter((tasktToRemove, i) => i != index));
	};

	return (
		<div className="form-body container">
			<h1 className="header text-center">Add a new task</h1>
			<div className="form-input">
				<input
					className="form"
					type="text"
					value={task}
					onChange={(e) => setTask(e.target.value)}
					onKeyUp={addTask}
				/>
				<div className="listed-items">
					<ul>
						{taskList.map((task, index) => {
							return (
								<li key={index}>
									{task}
									<span
										className="remove-task"
										onClick={() => removeTask(index)}>
										<i className="fas fa-trash trash-icon"></i>
									</span>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
};
