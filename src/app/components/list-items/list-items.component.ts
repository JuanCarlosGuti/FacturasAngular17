import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../models/item';
import { RowItemComponent } from '../row-item/row-item.component';

@Component({
  selector: 'list-items',
  standalone: true,
  imports: [RowItemComponent],
  templateUrl: './list-items.component.html',
  styleUrl:'./list-items.css'

})
export class ListItemsComponent {
  @Output() invoiceEventeEmiter = new EventEmitter()

  @Input() items: Item[] = []

  onRemove(id:number){
    this.invoiceEventeEmiter.emit(id)  
  }
}


