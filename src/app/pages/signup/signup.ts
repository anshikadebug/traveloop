import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.html',
  styleUrls: ['./signup.css']
})
export class SignupComponent {

  name = '';
  email = '';
  password = '';

  constructor(private http: HttpClient) {}

  signup() {
    const data = {
      name: this.name,
      email: this.email,
      password: this.password
    };

    this.http.post('https://traveloop-production-a086.up.railway.app/', data)
      .subscribe(() => {
        alert('Signup successful 🚀');
      });
  }
}