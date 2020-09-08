import React from 'react'

function Toolbar(props) {
  return (
    <div className="tool">
      {props.filters.map(o => <button onClick={props.onSelectFilter} className="but">{o}</button>)}
    </div>);
}

export default Toolbar;