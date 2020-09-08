import React from 'react';

function ProjectList(props) {
  
  return (
    <div className="list">
      <ul className="ul">{props.masF.map(o => <img className="im" src={o.img} alt="img"/>)}</ul>
      <ul className="ul">{props.masS.map(o => <img className="im" src={o.img} alt="img"/>)}</ul>
      <ul className="ul">{props.masT.map(o => <img className="im" src={o.img} alt="img"/>)}</ul>
    </div>
  );
}

export default ProjectList;