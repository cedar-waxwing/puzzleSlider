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
        clicked: false,
        // top: -100 * Math.floor(i / 4),
        // left: -100 * (i % 4)
      })
    }
    this.setState({ tiles: populateTilesArray })
    console.log(populateTilesArray)
  }

  clickChange = (id) => {
    // let tilesCopy = this.state.tiles;
    // tilesCopy[id].clicked = true;
    // this.setState({ tiles: tilesCopy });
    // console.log(this.state.tiles)
  }

  // swapSquares = (obj) => {
  //   let swapCopy = [...this.state.tiles]
  //   let blank = swapCopy.find(obj => obj.blanktile === true);
  //   // same row and col +-1
    // let blankCol = blank.currentPosition % 4;
    // let blankRow = blank.currentPosition / 4;
    // if ((Math.floor(blank.currentPosition / 4) === Math.floor(obj.currentPosition / 4) &&
    //   (((blank.currentPosition % 4 + 1) === (obj.currentPosition % 4) ||
    //     ((blank.currentPosition % 4 - 1) === (obj.currentPosition % 4))))) ||
    //     //second half of if statement. same col and row +-1
    //     ((blank.currentPosition % 4) === (obj.currentPosition % 4) &&
    //     ((Math.floor(blank.currentPosition / 4 + 1) === Math.floor(obj.currentPosition / 4) ||
    //       (Math.floor(blank.currentPosition / 4 - 1) === Math.floor(obj.currentPosition / 4)))))) {
  //     {
  //       let tempID = obj.currentPosition
  //       obj.currentPosition = blank.currentPosition;
  //       obj.blanktile = true;
  //       blank.currentPosition = tempID;
  //       blank.blanktile = false;
  //       this.setState({ tiles: swapCopy });
  //       //use sort and 
  //       //changing the id instead -- when do map and render many tiles, sort them by the ID. the ID will define
  //     }
  //   }
  // }

  swapSquares = (obj) => {
    // let swapCopy = [...this.state.tiles]
    let swapCopy = this.state.tiles.map(arr => { return {...arr} })
    console.log(`Clicked Tile: ${JSON.stringify(obj)}`);
    console.log(`Before Swap: ${JSON.stringify(swapCopy)}`);
    // let blank = swapCopy.find(obj => obj.blanktile === true);
    let blank = swapCopy.find(res => res.blanktile === true);
    // let clicked = swapCopy.find(obj => obj. )
    console.log(`Blank Tile: ${JSON.stringify(blank)}`);
    // same row and col +-1
    let blankCol = blank.currentPosition % 4;
    let blankRow = blank.currentPosition / 4;
    let objCol = obj.currentPosition % 4;
    let objRow = obj.currentPosition / 4;

    if (
      //(Math.floor(blankRow) === Math.floor(objRow) && ((blankCol + 1 === objCol) || (blankCol - 1 === objCol))) ||
        //second half of if statement. same col and row +-1
       // (blankCol === objCol && ((Math.floor(blankRow + 1) === Math.floor(objRow) || (Math.floor(blankRow - 1) === Math.floor(objRow)))))
       (Math.floor(blank.id / 4) === Math.floor(obj.id / 4) &&
       (((blank.id % 4 + 1) === (obj.id % 4) ||
         ((blank.id % 4 - 1) === (obj.id % 4))))) ||
         //second half of if statement. same col and row +-1
         ((blank.id % 4) === (obj.id % 4) &&
         ((Math.floor(blank.id / 4 + 1) === Math.floor(obj.id / 4) ||
           (Math.floor(blank.id / 4 - 1) === Math.floor(obj.id / 4))))))
       
      
      {
        //let tempID = obj.currentPosition
       // obj.currentPosition = blank.currentPosition;
        // obj.blanktile = true;
        //blank.currentPosition = tempID;
        // blank.blanktile = false;
        swapCopy[obj.id].currentPosition = this.state.tiles[blank.id].currentPosition;
        swapCopy[blank.id].currentPosition = this.state.tiles[obj.id].currentPosition;

        swapCopy[obj.id].blanktile = this.state.tiles[blank.id].blanktile;
        swapCopy[blank.id].blanktile = this.state.tiles[obj.id].blanktile;

        console.log(`After Swap: ${JSON.stringify(swapCopy)}`);
        this.setState({ tiles: swapCopy });
        //use sort and 
        //changing the id instead -- when do map and render many tiles, sort them by the ID. the ID will define
    }
  }

  // swapSquares = (obj) => {
  //   let swapCopy = [...this.state.tiles]
  //   let blank = swapCopy.find(obj => obj.blanktile === true);
  //   // same row and col +-1
  //   if ((Math.floor(blank.id / 4) === Math.floor(obj.id / 4) &&
  //     (((blank.id % 4 + 1) === (obj.id % 4) ||
  //       ((blank.id % 4 - 1) === (obj.id % 4))))) ||
  //       //second half of if statement. same col and row +-1
  //       ((blank.id % 4) === (obj.id % 4) &&
  //       ((Math.floor(blank.id / 4 + 1) === Math.floor(obj.id / 4) ||
  //         (Math.floor(blank.id / 4 - 1) === Math.floor(obj.id / 4)))))) {
  //     {
  //       let tempID = obj.id
  //       obj.id = blank.id;
  //       obj.blanktile = true;
  //       blank.id = tempID;
  //       blank.blanktile = false;

  //       this.setState({ tiles: swapCopy });
  //       //use sort and 
  //       //changing the id instead -- when do map and render many tiles, sort them by the ID. the ID will define
  //     }
  //   }
  // }

  render = () => {
    return (
      <div className="container">
        <div className="row" 
        style={{ height: "400px", width: "400px" }}
        >
          {this.state.tiles
          //.sort((a, b) => a.id - b.id)
          .map(tile => <Tile key={tile.id} tile={tile} id={tile.id} currentPosition={tile.currentPosition} clickChange={this.clickChange} swapSquares={this.swapSquares} />)}
        </div>
      </div>
    )
  }
}
export default App;
