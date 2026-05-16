import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class NavbarComponent {

  constructor(
    private router: Router
  ){

    const savedTheme =
    localStorage.getItem('theme');

    if(savedTheme === 'dark'){

      document.body.classList.add(
        'dark-theme'
      );

    }

  }

  toggleTheme(){

    document.body.classList.toggle(
      'dark-theme'
    );

    const isDark =
    document.body.classList.contains(
      'dark-theme'
    );

    localStorage.setItem(

      'theme',

      isDark ? 'dark' : 'light'

    );

  }

  logout(){

    localStorage.removeItem('user');

    alert('Logged Out ✅');

    this.router.navigate(['/login']);

  }

}