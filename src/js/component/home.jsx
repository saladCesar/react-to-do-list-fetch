import React, { useState } from "react";

//include images into your bundle
import { ToDosList } from "./ToDosList.js";
// import { TestFile } from "./TestFile.jsx";

//create your first component
export const Home = () => {
	return (
		<div className="container-fluid">
			<div className="text-center d-flex justify-content-center">
				<ToDosList />
			</div>
		</div>
	);
};
