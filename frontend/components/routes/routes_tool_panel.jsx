import React from 'react';

const RoutesToolPanel = props => {
  return (
    <div className='tool-panel'>
      <p>DISTANCE</p>
      <p>{props.distance}</p>
      <button onClick={props.undoWaypoint}>UNDO</button>
      <button onClick={props.clearWaypoints}>CLEAR</button>
      <button onClick={props.reverseWaypoints}>REVERSE</button>
      <button onClick={props.centerMap}>CENTER</button>
      <button onClick={props.returnToStart}>RETURN</button>
    </div>
  )
}

export default RoutesToolPanel;