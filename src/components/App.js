import React, { useState } from "react";
import Nav from "./Nav";
import TileList from "./TileList"
import hogs from "../porkers_data";

function App() {
	const[filteredHogs, setFilteredHogs] = useState(hogs)
	function handleGreasify() {
		const greasedHogs = hogs.filter(hog => hog.greased)
		setFilteredHogs(greasedHogs)
	}
	function handleClickToShowAllHogs () {
		setFilteredHogs(hogs)
	}
	function handleSortByName() {
        const sortedByName = [...filteredHogs].sort((a, b) => {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
        });
        setFilteredHogs(sortedByName);
    }
	function handleSortByWeight() {
		const sortedByWeight = [...filteredHogs].sort((a, b) => {
		  return a.weight - b.weight;
		});
		setFilteredHogs(sortedByWeight);
	  }

	return (
		<div className="App">
			<Nav />
			<div className="buttonContainer">
				<h3> Filter buttons</h3>
				<button label="Click to filter greased hogs" onClick={handleGreasify}>GREASIFY THESE HOGS</button>
				<button onClick={handleClickToShowAllHogs}>Show all the cutie bacons</button> 

				<h3> Sorting buttons </h3>
				<button onClick={handleSortByName}>Sort these bacons by name!</button>
				<button onClick={handleSortByWeight}>Sort these bacons by weight!</button>
			</div>
			<TileList hogs={filteredHogs}/>
	
		</div>
	);
}

export default App;

//Todo:
	//(Iterate)Display a tile for each hig in the porker_data.js
	//(Create a Tile component)Display name and image for each tile

	//Add click event listnere for every tile with a cb funciton to display that tile's specialty, weight, if greased, and highest medal achieved.
	
	//Create a filter component to filter all the hogs that are greased

	//Create a sorting function using either name OR weight