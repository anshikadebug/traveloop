import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}