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

  started : boolean = false;

  running : any;


  ngOnInit(): void{
    for(let i = 0; i < 10; i++){
      this.grid.push([0,0,0,0,0,0,0,0,0,0])
    }
  }

  clearCells(): void{
    this.grid = new Array()
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

    this.started = true;

    this.running = setInterval(()=>{
      const nextGrid = new Array();
      for(let i = 0; i < 10; i++){
        nextGrid.push([0,0,0,0,0,0,0,0,0,0])
      }
  
  
        for(let i = 0; i < this.grid.length; i++){
          for(let j = 0; j < this.grid[i].length; j++){
            let total = 0;
            let lastCol = j-1;
            let nextCol = j+1;
            let lastRow = i-1;
            let nextRow = i+1;
    
            if(lastRow >= 0){
              total+= this.grid[lastRow][j];
            }

            if(lastRow >= 0 && nextCol <= this.grid.length-1){
              total+= this.grid[lastRow][nextCol];
            }

            if(lastRow >= 0 && lastCol >= 0){
              total+= this.grid[lastRow][lastCol];
            }

            if(lastCol >= 0){
              total+= this.grid[i][lastCol];
            }

            if(nextRow <= this.grid.length-1 && lastCol >= 0){
              total+= this.grid[nextRow][lastCol];
            }

            if(nextRow <= this.grid.length-1){
              total+= this.grid[nextRow][j];
            }

            if(nextRow <= this.grid.length-1 && nextCol <= this.grid.length-1){
              total+= this.grid[nextRow][nextCol];
            }

            if(nextCol <= this.grid.length-1){
              total+= this.grid[i][nextCol];
            }
  
            if(total === 2 || total === 3){
              nextGrid[i][j] = 1;
            }else{
              nextGrid[i][j] = 0;
            }
          }
        }
  
        this.grid = [...nextGrid];
  
        const gridTotal = this.grid.reduce((total: number, row: Array<number>)=>{
          return total + row.reduce((subtotal: number, cell: number)=>{
            return subtotal + cell;
          },0)
        },0)
  
        if(!gridTotal){
          this.started = false;
          clearInterval(this.running);
        }
    },100);
  }

  stopGame(): void{
    this.started = false;
    clearInterval(this.running);
  }
}
