import React, { useState } from 'react'

function Tile ({hog}) {
    const [popUpVisible, setPopUpVisible] = useState(false)
    function handleClick () {
        setPopUpVisible(!popUpVisible)
    }
    return (
        <div className="ui card" onClick={handleClick}>
          <img src={hog.image} alt={hog.name} />
          <h3>{hog.name}</h3>
          {popUpVisible ? (
                <div className="popup">
                    <h2>{hog.name}</h2>
                    <p>Specialty: {hog.specialty}</p>
                    <p>Weight: {hog.weight}</p>
                    <p>Greased: {hog.greased ? 'Yes' : 'No'}</p>
                    <p>Highest Medal Achieved: {hog['highest medal achieved']}</p>
                </div>
            ) : null}
        </div>
      );
}
export default Tile