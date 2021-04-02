import React from "react";
import Tile from "./Tile.js"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tiles:
        [{
          id: 0,
          currentPosition: 0,
          winPosition: 0,
          blanktile: true,
          clicked: false
        }],
      //gridsize is a sibling to the tiles array in state. This allows you to indicate length of array w/o hard coding
      gridsize: 4
    }
  }

  componentDidMount = () => {
    //this is to popluate the array, tiles id with numbers 0 - 15, for a total of 16 numbers in the id
    let populateTilesArray = [];
    for (let i = 0; i < this.state.gridsize * this.state.gridsize; i++) {
      populateTilesArray.push({
        id: i,
        currentPosition: i,
        winPosition: i,
        blanktile: !Boolean(i),
        clicked: false
      })
    }
    this.setState({ tiles: populateTilesArray })
    console.log(populateTilesArray)
  }

  clickChange = (id) => {
    let tilesCopy = this.state.tiles;
    tilesCopy[id].clicked = true;
    this.setState({tiles:tilesCopy});
    console.log(this.state.tiles)
  }

  swapSquares = (obj) => {
    let swapCopy = this.state.tiles.map(arr => {return {...arr}})
    let blank = swapCopy.find(obj => obj.blanktile === true);
    // console.log(Math.floor(blank.currentPosition / 4) === Math.floor(obj /4));
    if (Math.floor(blank.currentPosition / 4) === Math.floor(obj.currentPosition / 4) && 
       ((Math.floor(blank.currentPosition % 4 + 1) === Math.floor(obj.currentPosition % 4) ||
       (Math.floor(blank.currentPosition % 4 - 1) === Math.floor(obj.currentPosition % 4))))) {
        {
          swapCopy[obj.id].currentPosition = this.state.tiles[blank.id].currentPosition;
          swapCopy[obj.id].blanktile = this.state.tiles[blank.id].blanktile;
          swapCopy[blank.id].currentPosition = this.state.tiles[obj.id].currentPosition;
          swapCopy[blank.id].blanktile = this.state.tiles[obj.id].blanktile;
          this.setState({tiles:swapCopy});
        } 
       }
    else if 
       (Math.floor(blank.currentPosition % 4) === Math.floor(obj.currentPosition % 4) && 
       ((Math.floor(blank.currentPosition / 4 + 1) === Math.floor(obj.currentPosition / 4) ||
       (Math.floor(blank.currentPosition / 4 - 1) === Math.floor(obj.currentPosition / 4))))) {
        {
          swapCopy[obj.id].currentPosition = this.state.tiles[blank.id].currentPosition;
          swapCopy[obj.id].blanktile = this.state.tiles[blank.id].blanktile;
          swapCopy[blank.id].currentPosition = this.state.tiles[obj.id].currentPosition;
          swapCopy[blank.id].blanktile = this.state.tiles[obj.id].blanktile;
          this.setState({tiles:swapCopy});
        } 
       }
}

//clicked is in the index position on the next line, potentialMoveTo is in the item position
// checkIfBlankSpot = (clickedPos, potentialMoveToPos) => {
//   let clickedObj = this.state.tiles[clickedPos];
//   let potentialObj = this.state.tiles[potentialMoveToPos];
//   // console.log('I am before if');
//   // console.log(`Clicked Object: ${JSON.stringify(clickedObj)}`);
//   // console.log(`PotentialObj: ${JSON.stringify(potentialObj)}`);

//   // console.log(`Clicked Object: ${clickedObj.clicked}`);
//   // console.log(`PotentialObj: ${potentialObj.blanktile}`);
//   if (clickedObj.clicked && potentialObj.blanktile){
//     // console.log('I am in first if');
//     //rows same, col +-1
//     if ((clickedObj.currentPosition / 4 === potentialObj.currentPosition / 4
//       && potentialObj.currentPosition % 4 === ((clickedObj.currentPosition % 4 + 1 ) || (clickedObj.currentPosition % 4  - 1)))
//         //columns same, rows +-1
//         ||
//         (clickedObj.currentPosition % 4 === potentialObj.currentPosition % 4
//         && potentialObj.currentPosition / 4 === ((clickedObj.currentPosition / 4 + 1 ) || (clickedObj.currentPosition / 4 - 1))
//         )) {
//       console.log("working!")
//     }
//   }
// }


  render = () => {
    return (
      <div className="container">
        <div className="row" style={{height: "400px", width: "400px"}}>
        {this.state.tiles.map(tile => <Tile key={tile.id} tile={tile} id={tile.id} currentPosition={tile.currentPosition} clickChange={this.clickChange} swapSquares={this.swapSquares}/>)}
      </div>
      </div>
    )
  }
}
export default App;
