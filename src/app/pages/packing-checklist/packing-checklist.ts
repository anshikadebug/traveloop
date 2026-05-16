import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../components/navbar/navbar';

@Component({
  selector: 'app-packing-checklist',
  standalone: true,
  imports: [FormsModule, NavbarComponent],
  templateUrl: './packing-checklist.html',
  styleUrls: ['./packing-checklist.css']
})
export class PackingChecklist {
  item = '';

  items: any[] = [];

  addItem() {
    if (!this.item.trim()) return;

    this.items.push({
      name: this.item,
      packed: false
    });

    this.item = '';
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }
}