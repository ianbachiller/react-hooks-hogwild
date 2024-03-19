import React from 'react'
import Tile from "./Tile"

function TileList ({hogs}) {

 
    const hogsList = hogs.map((hog) => <Tile key={hog.name} hog={hog} />)
    return (
        <div className="ui grid container">  
            {hogsList} 
        </div>
     
    )
}
export default TileList