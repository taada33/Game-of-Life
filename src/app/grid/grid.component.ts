import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {
  grid = [...new Array(10).fill(new Array(10).fill(0))]

  constructor(){
    console.log(this.grid);
  }

  alterCell(cell: number): number{
    cell ? cell = 0 : cell = 1;
    console.log(cell)
    return cell;
  }

}
