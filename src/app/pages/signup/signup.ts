import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NavbarComponent } from '../../components/navbar/navbar';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    FormsModule,
    NavbarComponent
  ],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {

  name = '';
  email = '';
  password = '';

  constructor(
    private http: HttpClient
  ) {}

  signup(){

    const userData = {

      name: this.name,
      email: this.email,
      password: this.password

    };

    this.http.post(

      'http://localhost:3000/signup',

      userData

    ).subscribe({

      next:()=>{

        alert('Signup Successful ✅');

      },

      error:(error)=>{

        console.log(error);

        alert('Signup Failed ❌');

      }

    });

  }

}