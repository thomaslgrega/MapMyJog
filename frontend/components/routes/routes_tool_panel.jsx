import React from 'react';

const RoutesToolPanel = props => {

  return (
    <div className='tool-panel'>
      <span className="fas fa-chevron-down tools-down-arrow" onClick={props.handleToolbarClick}></span>
      <div className='distance-container'>
        <p className="distance-title">DISTANCE</p>
        <p className="distance-content">{props.distance}</p>
      </div>
      <div className='button-panel-container'>
        <div className='undo-container' onClick={props.undoWaypoint}>
          <span className="fas fa-undo-alt"></span>
          <span className='undo-span'>UNDO</span>
        </div>
        <div className='center-container' onClick={props.centerMap}>
          <span className="fas fa-compress-arrows-alt"></span>
          <span className='center-span'>CENTER</span>
        </div>
        <div className='reverse-container' onClick={props.reverseWaypoints}>
          <span className='fas fa-exchange-alt'></span>
          <span className='reverse-span' >REVERSE</span>
        </div>
        <div className='return-container' onClick={props.returnToStart}>
          <span className="fas fa-circle-notch"></span>
          <span className='return-span'>RETURN</span>
        </div>
        <div className='clear-container' onClick={props.clearWaypoints}>
          <span className="fas fa-times"></span>
          <span className='clear-span'>CLEAR</span>
        </div>
      </div>
      {/* <button onClick={props.test}>TEST</button> */}
    </div>
  )
}

export default RoutesToolPanel;
