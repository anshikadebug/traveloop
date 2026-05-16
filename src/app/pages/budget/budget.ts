import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../components/navbar/navbar';

@Component({
  selector: 'app-budget',
  standalone: true,
  imports: [FormsModule, NavbarComponent],
  templateUrl: './budget.html',
  styleUrls: ['./budget.css']
})
export class Budget {
  transport = 0;
  stay = 0;
  food = 0;
  activities = 0;

  get total() {
    return Number(this.transport) + Number(this.stay) + Number(this.food) + Number(this.activities);
  }
}