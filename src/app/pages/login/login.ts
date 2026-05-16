import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    NavbarComponent
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  email = '';
  password = '';

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  login(){

    const loginData = {

      email: this.email,
      password: this.password

    };

    this.http.post<any>(

      'http://localhost:3000/login',

      loginData

    ).subscribe({

      next:(response)=>{

        localStorage.setItem(
          'user',
          JSON.stringify(response.user)
        );

        alert('Login Successful ✅');

        this.router.navigate(['/my-trips']);

      },

      error:(error)=>{

        console.log(error);

        alert('Invalid Credentials ❌');

      }

    });

  }

}