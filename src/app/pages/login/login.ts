import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {

  email = '';
  password = '';

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  login() {
    const data = {
      email: this.email,
      password: this.password
    };

    this.http.post('https://traveloop-production-a086.up.railway.app/', data)
      .subscribe({
        next: (res: any) => {

          localStorage.setItem('token', res.token);

          alert('Login successful 🔥');

          // redirect to trips page
          this.router.navigate(['/trips']);
        },

        error: (err) => {
          console.log(err);
          alert('Invalid login ❌');
        }
      });
  }
  
}