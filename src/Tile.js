import React from "react";
import clark from "./clark.jpeg";

function Tile(props) {
   let top = -100 * Math.floor(props.tile.currentPosition / 4);
   let left = -100 * (props.tile.currentPosition % 4);

  //let tileStyle = `background-image: url(${size400}); background-position: ${top}, ${left}`
//style={{ tileStyle }}
  return (
    <div 
    //className="col-3 border border-dark"
    className="card border border-dark col-3 overflow-hidden position-relative"  
    onClick={() => {
      //props.clickChange(props.tile.id); 
      props.swapSquares(props.tile) }}>
      {/* {(props.id !== 0 ? props.id : "")}  */}
      {(!props.tile.blanktile ? <img className="position-absolute" src={clark} style={{ top, left }}></img> : "")}
      {/* <h1>curPos:{props.tile.currentPosition}</h1>  */}
      {/* <h1>blankTile:{props.tile.blanktile ? "true" : "false"}</h1> 
      <h1>id:{props.tile.id}</h1>
       <h1>winPosition:{props.tile.winPosition}</h1>  */}
    </div>
  )
}

export default Tile;


