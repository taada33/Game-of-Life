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

  }
}
