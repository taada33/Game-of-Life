import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {

  grid = new Array();


  ngOnInit(): void{
    for(let i = 0; i < 10; i++){
      this.grid.push([0,0,0,0,0,0,0,0,0,0])
    }
  }

  alterCell(i: number,j: number){
    this.grid[i][j] ? this.grid[i][j] = 0 : this.grid[i][j] = 1;
  }

  randomize(): void{
    for(let i = 0; i < 10; i++){
      for(let j = 0; j < 10; j++){
        this.grid[i][j] = Math.floor(Math.random() * Math.floor(2));
      }
    }
  }

  startGame(): void{

    const nextGrid = new Array();

    for(let i = 0; i < 10; i++){
      nextGrid.push([0,0,0,0,0,0,0,0,0,0])
    }

    // let gridTotal=0;

    // for(let i=0; i< this.grid.length;i++){
    //   for(let j=0; j< this.grid.length;j++){
    //     gridTotal+=this.grid[i][j];
    //   }
    // }

    // while(gridTotal > 0){
      for(let i = 0; i < this.grid.length; i++){
        for(let j = 0; j < this.grid[i].length; j++){
          let total = 0;
          let lastCol = j-1;
          let nextCol = j+1;
          let lastRow = i-1;
          let nextRow = i+1;
  
          if(lastCol < 0){
            lastCol = this.grid.length-1;
          }
  
          if(lastRow < 0){
            lastRow = this.grid.length-1;
          }
  
          if(nextCol > this.grid.length-1){
            nextCol = 0;
          }
  
          if(nextRow > this.grid.length-1){
            nextRow = 0;
          }

          console.log(`lastRow = ${lastRow}, lastCol = ${lastCol} nextRow = ${nextRow}, nextCol = ${nextCol}`)
  
          total+= this.grid[lastRow][j];
          total+= this.grid[lastRow][lastCol];
          total+= this.grid[i][lastCol];
          total+= this.grid[lastRow][nextCol];
          total+= this.grid[nextRow][lastCol];
          total+= this.grid[nextRow][nextCol];
          total+= this.grid[i][nextCol];
          total+= this.grid[nextRow][j];
  
          if(total === 2 || total === 3){
            nextGrid[i][j] = 1;
          }else{
            nextGrid[i][j] = 0;
          }
        }
      }

      this.grid = [...nextGrid];

    //   for(let i=0; i< this.grid.length;i++){
    //     for(let j=0; j< this.grid.length;j++){
    //       gridTotal+=this.grid[i][j];
    //     }
    //   }
    // }
  }
}
