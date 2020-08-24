import React from 'react';

const RoutesToolPanel = props => {
  return (
    <div className='tool-panel'>
      <div className='distance-container'>
        <p className="distance-title">DISTANCE</p>
        <p className="distance-content">{props.distance}</p>
      </div>
      <div className='button-panel-container'>
        <div className='undo-container'>
          <span className="fas fa-undo-alt"></span>
          <button className='undo-button' onClick={props.undoWaypoint}>UNDO</button>
        </div>
        <button className='clear-button' onClick={props.clearWaypoints}>CLEAR</button>
        <button className='center-button' onClick={props.centerMap}>CENTER</button>
        <button className='reverse-button' onClick={props.reverseWaypoints}>REVERSE</button>
        <button className='return-button' onClick={props.returnToStart}>RETURN</button>
      </div>
      {/* <button onClick={props.test}>TEST</button> */}
    </div>
  )
}

export default RoutesToolPanel;
