import React from "react";
import size400 from "./size400.jpg";

function Tile(props) {
  let top = -100 * Math.floor(props.tile.currentPosition / 4);
  let left = -100 * (props.tile.currentPosition % 4);
  //let tileStyle = `background-image: url(${size400}); background-position: ${top}, ${left}`
//style={{ tileStyle }}
  return (
    <div className="card border-dark col-3 overflow-hidden position-relative"  onClick={() => { props.clickChange(props.tile.id); props.swapSquares(props.tile) }}>
      {!props.tile.blanktile && <img className="position-absolute" src={size400} style={{ top, left }}></img>}
      <h1>{props.tile.currentPosition}</h1>
    </div>
  )
}

export default Tile;


