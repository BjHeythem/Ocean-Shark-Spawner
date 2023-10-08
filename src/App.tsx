import React, { useState } from 'react';
import './App.css';


type TPoint = {
  x: number;
  y: number;
}


function App() {
  const [points, setPoints] = useState<TPoint[]>([])
  const [popped, setPopped] = useState<TPoint[]>([])
  
  function handlePlaceCircle(e: React.MouseEvent<HTMLDivElement>) {

    const { clientX, clientY } = e;
    console.log(`x: ${clientX} y: ${clientY}`);
    setPoints([...points, { 
      x:clientX, 
      y:clientY 
    }])
    setPopped([])
    console.log(points)

  }

  function handleUndo() {
    const newPoints = [...points];
    const poppedPoint = newPoints.pop();
    if (poppedPoint !== undefined) {
      setPopped([...popped, poppedPoint]);
    }
    setPoints(newPoints)
  }

  function handleRedo() {
    const poppedPoint = popped.pop();
    if (poppedPoint !== undefined) { setPoints([...points, poppedPoint])}
  }

  return (
    <>
    <div className='sky'>
    <button className="btn" disabled={points.length === 0} onClick={handleUndo}>UNDO</button>
    <button className="btn" disabled={popped.length === 0} onClick={handleRedo}>REDO</button>
    </div>
      <div className="App"
        onClick={handlePlaceCircle}
      >
        {points.map((point, index) => (
          <div key={index}
          className="fish" 
          style={{
            left: point.x+'px',
            top: point.y+'px',
          }}
          >
            <div id="bubbles"></div>
            <div id="shark">
              <div className="shark-body"></div>
              <div className="shark-eye"></div>
              <div className="aleta"></div>
              <div className="tail"></div>
              <div className="fin"></div>
              <div className="gill gill-1"></div>
              <div className="gill gill-2"></div>
              <div className="gill gill-3"></div>
            </div>
          </div>
        ))}
          
      </div>
    </>
  );
}

export default App;
