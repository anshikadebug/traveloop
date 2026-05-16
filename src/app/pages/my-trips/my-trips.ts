import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar';

@Component({
  selector: 'app-my-trips',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './my-trips.html',
  styleUrls: ['./my-trips.css']
})
export class MyTrips {

  trips: any[] = [];

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.fetchTrips();
  }

  fetchTrips() {
    const user = JSON.parse(localStorage.getItem('user') || '{}');

    if (!user.id) {
      this.trips = [];
      return;
    }

    this.http.get<any[]>(`http://localhost:3000/trips/${user.id}`)
      .subscribe({
        next: (response) => {
          this.trips = response;
        },
        error: (error) => {
          console.log(error);
        }
      });
  }

  openTrip(id: any) {
    this.router.navigate(['/trip', id]);
  }

  editTrip(trip: any) {
    this.router.navigate(['/edit-trip', trip.id]);
  }

  deleteTrip(id: any) {
    this.http.delete(`http://localhost:3000/delete-trip/${id}`)
      .subscribe({
        next: () => {
          alert('Trip Deleted ✅');
          this.fetchTrips();
        },
        error: (error) => {
          console.log(error);
          alert('Delete Failed ❌');
        }
      });
  }
}