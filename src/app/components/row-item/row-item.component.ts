import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'tr[row-item]',
  standalone: true,
  imports: [],
  templateUrl: './row-item.component.html'
 
})
export class RowItemComponent {
  @Output() removeEventEmiter = new EventEmitter()

  @Input() item!: Item;

  OnRemove(id: number){
    this.removeEventEmiter.emit(id)
  
  }


}


